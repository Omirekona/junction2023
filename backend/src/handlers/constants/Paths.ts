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
    GetNew: "/new",
  },
  User: {
    Base: "/user",
    Points: "/points",
  },
  Image: {
    Base: "/image",
    Compare: "/compare",
  },
  Mission: {
    Base: "/mission",
    Get: "",
  },
} as const;

// **** Export **** //

export default Paths;
