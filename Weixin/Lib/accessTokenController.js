/**
 * Created by lvlq on 16/1/14.
 */
var express = require("express");
var router = express.Router();
var api = Util("wx.api");

router.use("/get", function (req, res) {
    api.getLatestToken(function (err, token) {
        if (err) {
            res.json({
                errno: 1001,
                err: err
            });
        } else {
            res.json({errno: 0, err: "", token: token});
        }
    });
});

module.exports = router;