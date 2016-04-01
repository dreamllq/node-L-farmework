/**
 * Created by lvlq on 16/1/16.
 */
module.exports = function (req, res, next) {
    res.success = function (data, msg) {
        res.json({
            errno: 0,
            errMsg: msg,
            data: data
        });
    };


    res.error = function (errno, msg, e) {
        console.log("Error: " + e.message);
        res.json({
            errno: errno,
            errMsg: msg
        });
    };

    res.r404 = function () {
        res.render("error/404.html");
    };

    next();
};