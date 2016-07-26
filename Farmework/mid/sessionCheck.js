/**
 * Created by lvlq on 16/3/25.
 */
module.exports = function (req, res, next) {
    if (!req.session) {
        return next(new Error('oh no session'));
    }
    next();
};