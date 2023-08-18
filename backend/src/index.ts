import server from "./server";

// **** Run **** //
const service = server.listen(3000);

service.setTimeout(20000);
