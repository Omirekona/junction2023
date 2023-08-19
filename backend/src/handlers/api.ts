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

// Get an attraction's info
// api/attraction?uc_seq=${uc_seq}&preference=${preference}
attractionRouter.get(Paths.Attraction.Get, AttractionHandler.get);

// generate new route
// api/route/new?preference=${preference}
routeRouter.get(Paths.Route.GetNew, RouteHandler.getNew);

// get previously generated route info by id
// api/route?routeId=${routeId} -> one unique route
// api/route?userId=${userId} -> all routes belonging to user
routeRouter.get(Paths.Route.Get, RouteHandler.get);

// User API (WIP, need firebase integration)
// api/user?userId=${userId} -> get user info
userRouter.get("", UserHandler.get);
// api/user -> create new user in db with firebase id
userRouter.post("", UserHandler.create);
// api/user/points -> add points to user
userRouter.post(Paths.User.Points, UserHandler.addPoints);

// Image API
// api/image/compare?uc_seq=${uc_seq}&image=${image}&preference={preference}
// compare the given `image` with the attraction's image, which is derived from UC_SEQ(unique id for attraction per preference) and preference
imageRouter.get(Paths.Image.Compare, ImageHandler.compare);

// Add the feature specific routers to api router
apiRouter.use(Paths.Attraction.Base, attractionRouter);
apiRouter.use(Paths.Route.Base, routeRouter);
apiRouter.use(Paths.User.Base, userRouter);
apiRouter.use(Paths.Image.Base, imageRouter);

// **** Export default **** //

export default apiRouter;
