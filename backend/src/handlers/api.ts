import { Router } from "express";

import Paths from "./constants/Paths";
import AttractionHandler from "./AttractionHandler";
import RouteHandler from "./RouteHandler";

// **** Variables **** //

const apiRouter = Router();
const attractionRouter = Router();
const routeRouter = Router();

// Get all attractions
attractionRouter.get(Paths.Attraction.Get, AttractionHandler.getAll);

// Get route by preference
// api/route/get?preference=${preference}
routeRouter.get(Paths.Route.Get, RouteHandler.get);

// Add the feature specific routers to api router
apiRouter.use(Paths.Attraction.Base, attractionRouter);
apiRouter.use(Paths.Route.Base, routeRouter);

// **** Export default **** //

export default apiRouter;
