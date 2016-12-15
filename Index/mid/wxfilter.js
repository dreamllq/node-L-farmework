/**
 * Created by lvlq on 16/11/8.
 */
module.exports = function (req, res, next) {
    if (req.query.oauth && req.query.openid) {
        var data = {
            openid: req.query.openid,
            nickname: req.query.nickname,
            language: req.query.language,
            city: req.query.city,
            province: req.query.province,
            country: req.query.country,
            headimgurl: req.query.headimgurl,
            unionid: req.query.unionid,
            oauth: 1
        };
        req.session.wx_user = data;

        Models.weixin_user.saveAndUpdate(data).then(function () {
            req.session.save(function () {
                next();
            });
        }).catch(function (err) {
            res.send("系统错误");
        });
    } else {
        next();
    }
};
