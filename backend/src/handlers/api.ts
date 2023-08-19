import { Router } from "express";

import Paths from "./constants/Paths";
import AttractionHandler from "./AttractionHandler";
import RouteHandler from "./RouteHandler";
import UserHandler from "./UserHandler";
import ImageHandler from "./ImageHandler";

// **** Variables **** //

const apiRouter = Router();
const attractionRouter = Router();
const routeRouter = Router();
const userRouter = Router();
const imageRouter = Router();

// Get all attractions
attractionRouter.get(Paths.Attraction.Get, AttractionHandler.get);

// Get route by preference
// api/route/get?preference=${preference}
routeRouter.get(Paths.Route.GetNew, RouteHandler.getNew);
routeRouter.get(Paths.Route.Get, RouteHandler.get);

// User API
userRouter.get("", UserHandler.get);
userRouter.post("", UserHandler.create);
userRouter.post(Paths.User.Points, UserHandler.addPoints);

// Image API
imageRouter.get(Paths.Image.Compare, ImageHandler.compare);

// Add the feature specific routers to api router
apiRouter.use(Paths.Attraction.Base, attractionRouter);
apiRouter.use(Paths.Route.Base, routeRouter);
apiRouter.use(Paths.User.Base, userRouter);
apiRouter.use(Paths.Image.Base, imageRouter);

// **** Export default **** //

export default apiRouter;
