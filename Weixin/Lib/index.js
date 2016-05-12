/**
 * Created by lvlq on 16/1/7.
 */
var oauthRouter = require("./oauthController");
var jsapiRouter = require("./jsapiController");
var tokenRouter = require("./accessTokenController");
module.exports = function (app) {
    app.use("/accesstoken", tokenRouter);
    app.use("/jsapi", jsapiRouter);
    app.use("/oauth", oauthRouter);
};