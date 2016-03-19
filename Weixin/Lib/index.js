/**
 * Created by lvlq on 16/1/7.
 */
var oauthService = require("./oauthController");
var jsapiService = require("./jsapiController");
var tokenService = require("./accessTokenController");
module.exports = function (app) {
    app.get("/oauth/getUrl", oauthService.getUrl);
    //app.use("/oauth/getUrlForWeb", oauthService.getUrlForWeb);
    app.get("/oauth/getOauth", oauthService.getOauth);
    app.get("/oauth/getOauthUserInfo", oauthService.getOauthUserInfo);

    app.get("/jsapi/getJsConfig", jsapiService.getJsConfig);
    //app.use("/jsapi/getCardExt", jsapiService.getCardExt);
    //app.use("/jsapi/getTicket", jsapiService.getTicket);
    //app.use("/jsapi/getLatestTicket", jsapiService.getLatestTicket);
    app.get("/accesstoken", tokenService.getAccessToken);
};