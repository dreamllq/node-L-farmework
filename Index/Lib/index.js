/**
 * Created by lvlq on 16/1/7.
 */
module.exports = function (app) {
    app.get("/next", function (req, res) {
        res.redirect("dayima://topic/8315377");
    });

    app.get("/", function (req, res) {
        var User = M("User");
        User.create({
            firstName: "abc",
            lastName: "123"
        }).then(function (d) {
            res.json({data: d});
        }).catch(function (e) {
            res.json({err: e});
        });
    });

    app.post("/", function (req, res) {
        res.json({a: 1});
    });
};