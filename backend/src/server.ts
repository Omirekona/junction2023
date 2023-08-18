/**
 * Setup express server.
 */

import express, { Request, Response, NextFunction } from "express";

import "express-async-errors";

import BaseRouter from "@src/routes/api";
import Paths from "@src/routes/constants/Paths";

// **** Variables **** //

const app = express();

// **** Setup **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add APIs, must be after middleware
app.use(Paths.Base, BaseRouter);

// **** Export default **** //

export default app;
