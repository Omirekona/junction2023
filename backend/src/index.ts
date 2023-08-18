import server from "./server";
import db from "./repos/db";

// **** Run **** //
const port = process.env.PORT || 3000;
const service = server.listen(port);

service.setTimeout(20000);
