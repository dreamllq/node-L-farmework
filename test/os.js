/**
 * Created by lvlq on 16/4/1.
 */
var os = require("os");

console.log(os.cpus());

console.log("freemem:" + os.freemem());

console.log("pc-name:" + os.hostname());

console.log("platform:" + os.platform());

console.log("totalmem:" + os.totalmem());

console.log("uptime:" + os.uptime());