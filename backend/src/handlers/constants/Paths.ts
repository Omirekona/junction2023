/**
 * Express router paths go here.
 */

const Paths = {
  Base: "/api",
  Attraction: {
    Base: "/attraction",
    Get: "",
  },
  Route: {
    Base: "/route",
    Get: "",
  },
  User: {
    Base: "/user",
    Points: "/points",
  },
  Image: {
    Base: "/image",
    Compare: "/compare",
  },
} as const;

// **** Export **** //

export default Paths;
