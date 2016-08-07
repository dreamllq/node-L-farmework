/**
 * Created by lvlq on 16/1/16.
 */
var _ = require("underscore");
module.exports = function () {
    return function (req, res, next) {
        var paths = [
            "/login",
            "/regist",
            "/common/uploadmedia"
        ];

        if (_.indexOf(paths, req.path) == -1) {
            if (!req.session.user) {
                res.header({
                    "reject": "time-out"
                });
                return res.redirect(req.baseUrl + "/login");
            } else {
                res.locals.user = req.session.user;
            }
        }
        res.header({
            "reject": "ok"
        });
        next();
    }
};