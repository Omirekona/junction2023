/**
 * Express router paths go here.
 */

const Paths = {
  Base: "/api",
  Attraction: {
    Base: "/attraction",
    Get: "/all",
  },
  Route: {
    Base: "/route",
    Get: "",
  },
  User: {
    Base: "/user",
    Points: "/points",
  },
} as const;

// **** Export **** //

export default Paths;
