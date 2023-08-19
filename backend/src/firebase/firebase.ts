import admin from "firebase-admin";
const serviceAccount = require("./service.json");

import {Request, Response, NextFunction} from "express";
import user from "../repos/user";

interface RequestWithUID extends Request {
    uid?: string 
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export const verifyTokenMiddleware = async (req: RequestWithUID, res: Response, next: NextFunction) => {
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


export default admin;