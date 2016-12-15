/**
 * Created by lvlq on 16/8/5.
 */
var express = require("express");
var router = express.Router();
var source_type = require("../../enum/source_type");
var source_status = require("../../enum/source_status");
var _ = require("underscore");

router.get("/index", function (req, res) {
    var returnData = {};
    Models.weixin_source.pageData(req.query.page, {
        type: source_type.NEWS
    }).then(function (data) {
        returnData.list = data.list;
        returnData.page = data.page;
        var ids = _.map(data.list, function (l) {
            return l.data;
        });
        ids = ids.join(",").split(",");

        return Models.weixin_news.getByIds(ids);
    }).then(function (data) {
        returnData.newsdata = data;
        res.render("weixin/source/news/index.html", returnData);
    }).catch(function (err) {
        console.log(err);
        res.r404();
    })
});

router.get("/add", function (req, res) {
    res.render("weixin/source/news/add.html");
});

router.post("/add", function (req, res) {
    var news = req.body.news;
    Models.weixin_news
        .insertData(news)
        .then(function (ids) {
            // res.success(ids);

            var data = {
                data: ids.join(","),
                type: source_type.NEWS,
                uid: req.session.user.id,
                status: source_status.ONLINE
            };

            return Models.weixin_source.addSource(data);
        })
        .then(function () {
            res.success();
        })
        .catch(function (err) {
            res.error(10001, err.message, err);
        });
});

router.post("/list", function (req, res) {
    var list = [];

    Models.weixin_source.findAll({
        where: {
            type: source_type.NEWS
        }
    }).then(function (data) {
        list = data ? data : [];
        var ids = _.map(data, function (l) {
            return l.data;
        });
        ids = ids.join(",").split(",");

        return Models.weixin_news.getByIds(ids);

    }).then(function (data) {
        var list_obj = {};
        _.each(data, function (obj) {
            list_obj[obj.id] = obj;
        });

        var return_list = _.map(list, function (obj) {
            var ids = obj.data.split(',');
            obj.news = _.map(ids, function (n) {
                return list_obj[n];
            });
            return obj;
        });

        res.success({
            list: return_list
        });
    }).catch(function (err) {
        res.error(10003, '系统错误', err);
    })
});

module.exports = router;