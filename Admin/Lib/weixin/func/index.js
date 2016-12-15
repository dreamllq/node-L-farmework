/**
 * Created by lvlq on 16/8/9.
 */
var router = require("express").Router();

router.use("/welcome", require('./welcome'));
router.use("/default", require('./default'));

module.exports = router;