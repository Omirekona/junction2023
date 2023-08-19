import { Router } from "express";

import Paths from "./constants/Paths";
import AttractionHandler from "./AttractionHandler";
import RouteHandler from "./RouteHandler";
import UserHandler from "./UserHandler";

// **** Variables **** //

const apiRouter = Router();
const attractionRouter = Router();
const routeRouter = Router();
const userRouter = Router();

// Get all attractions
attractionRouter.get(Paths.Attraction.Get, AttractionHandler.get);

// Get route by preference
// api/route/get?preference=${preference}
routeRouter.get(Paths.Route.Get, RouteHandler.get);

// User API
userRouter.get("", UserHandler.get);
userRouter.post("", UserHandler.create);
userRouter.post(Paths.User.Points, UserHandler.addPoints);

// Add the feature specific routers to api router
apiRouter.use(Paths.Attraction.Base, attractionRouter);
apiRouter.use(Paths.Route.Base, routeRouter);
apiRouter.use(Paths.User.Base, userRouter);

// **** Export default **** //

export default apiRouter;
