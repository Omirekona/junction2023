/**
 * Setup express server.
 */

import express, { Request, Response, NextFunction } from "express";
import path from "path";
import _ from "./firebase/firebase";//just to make sure that is gets inited
import "express-async-errors";
import BaseRouter from "./handlers/api";
import Paths from "./handlers/constants/Paths";

import { verifyTokenMiddleware } from "./firebase/firebase";


// **** Variables **** //

const app = express();

// **** Setup **** //

export interface RequestWithUID extends Request {
  uid?: string
}

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "..", "static")));

app.use("/api", verifyTokenMiddleware);

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
