/**
 * Setup express server.
 */

import express, { Request, Response, NextFunction } from "express";
import path from "path";

import admin from "./firebase/firebase";

import "express-async-errors";

import BaseRouter from "./handlers/api";
import Paths from "./handlers/constants/Paths";

import user from "./repos/user";

// **** Variables **** //

const app = express();

// **** Setup **** //

interface RequestWithUID extends Request {
  uid?: string
}

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "..", "static")));

const verifyTokenMiddleware = async (req: RequestWithUID, res: Response, next: NextFunction) => {
  const jwtToken = req.headers.authorization?.split("Bearer ")[1];
  console.log("req.headers: ", req.headers);
  if (!jwtToken) {
    return res.status(403).send("Unauthorized");
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(jwtToken);
    const doesUserExist = await user.checkIfUserExists(decodedToken.uid);
    if (!doesUserExist) {
      user.insertUser(decodedToken.uid);
    }
    req.uid = decodedToken.uid;
    next();
  } catch (error) {
    console.log("there was an error: ", error);
    res.status(403).send("Unauthorized");
  }
}

app.use("/api/users", verifyTokenMiddleware);

app.get("/api/users", (req: RequestWithUID, res) => {
  res.send(`something protected probably: ${req.uid}`)
})

// Add APIs, must be after middleware
app.use(Paths.Base, BaseRouter);

app.use("/api/hello", (_, res) => {
  res.send("hello how are you doing this is a test");
});

// **** Export default **** //

export default app;
