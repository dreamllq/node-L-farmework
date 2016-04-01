/**
 * Created by lvlq on 16/3/24.
 */
module.exports = function (options) {
    options = options || {};
    var link = options.link || "";
    var title = options.title || ""; //通用标题
    var img = options.img || "";
    var desc = options.desc || "";
    var qtitle = options.qtitle || title; //朋友圈专用标题,如没有,就用通用标题

    return function (req, res, next) {
        res.locals.share = {};
        res.locals.share.link = link;
        res.locals.share.title = title;
        res.locals.share.img = img;
        res.locals.share.desc = desc;
        res.locals.share.qtitle = qtitle;
        next();
    }
};