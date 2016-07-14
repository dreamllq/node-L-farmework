/**
 * Created by lvlq on 16/7/14.
 */
var express = require("express");
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

router.post("/", multipartMiddleware, function (req, res) {
    console.log(req.body);
    console.log(req.files);

    res.send(JSON.stringify({
        "msg": "111",
        "old_name": "123",
        "all": ""
    }));
});

module.exports = router;