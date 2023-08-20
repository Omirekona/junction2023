import admin from "firebase-admin";
const serviceAccount = require("./service.json");

import { Request, Response, NextFunction } from "express";
import user from "../repos/user";
import { RequestWithUID } from "src/server";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const verifyTokenMiddleware = async (
  req: RequestWithUID,
  res: Response,
  next: NextFunction
) => {
  const jwtToken = req.headers.authorization?.split(" ")[1]?.trim();
  console.log("req.headers: ", req.headers);
  console.log("jwt token:\n", jwtToken);
  if (!jwtToken) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(jwtToken);
    console.log("decodedToken: ", decodedToken);
    const doesUserExist = await user.checkIfUserExists(decodedToken.uid);
    if (!doesUserExist) {
      user.insertUser(decodedToken.uid);
    }
    req.uid = decodedToken.uid;
    next();
  } catch (error) {
    console.log("there was an error: ", error);
    res.status(401).send("Unauthorized");
  }
};

export default admin;
