/**
 * Express router paths go here.
 */

const Paths = {
  Base: "/api",
  Attractions: {
    Base: "/attractions",
    Get: "/all",
  },
} as const;

// **** Export **** //

export default Paths;
