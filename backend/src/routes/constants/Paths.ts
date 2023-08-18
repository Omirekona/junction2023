/**
 * Express router paths go here.
 */

const Paths = {
  Base: "/api",
  Users: {
    Base: "/users",
    Get: "/all",
    Add: "/add",
    Update: "/update",
    Delete: "/delete/:id",
  },
  Attractions: {
    Base: "/attractions",
    Get: "/all",
  },
} as const;

// **** Export **** //

export default Paths;
