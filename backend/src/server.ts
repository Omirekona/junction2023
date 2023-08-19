/**
 * Setup express server.
 */

import express, { Request, Response, NextFunction } from "express";
import path from "path";

import "express-async-errors";

import BaseRouter from "./handlers/api";
import Paths from "./handlers/constants/Paths";

// **** Variables **** //

const app = express();

// **** Setup **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("the static path is: ", path.resolve(__dirname, "..", "static"));
app.use(express.static(path.resolve(__dirname, "..", "static")));

// Add APIs, must be after middleware
app.use(Paths.Base, BaseRouter);

app.use("/api/hello", (_, res) => {
  res.send("hello how are you doing");
});

// **** Export default **** //

export default app;
