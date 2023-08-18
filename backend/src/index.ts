import server from "./server";
import db from "./repos/db";

// **** Run **** //
const service = server.listen(3000);

service.setTimeout(20000);
