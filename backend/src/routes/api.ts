import { Router } from "express";

import Paths from "./constants/Paths";
import AttractionRoutes from "./AttractionRoutes";

// **** Variables **** //

const apiRouter = Router();
const attractionRouter = Router();

// Get all attractions
attractionRouter.get(Paths.Attractions.Get, AttractionRoutes.getAll);

// Add the feature specific routers to api router
apiRouter.use(Paths.Attractions.Base, attractionRouter);

// **** Export default **** //

export default apiRouter;
