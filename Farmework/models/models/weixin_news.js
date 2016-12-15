'use strict';
var uuid = require("uuid");
var _ = require("underscore");
module.exports = function (sequelize, DataTypes) {
    var weixin_news = sequelize.define('weixin_news', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        imgurl: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        html: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ''
        },
        uuid: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        }
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            },
            insertData: function (news) {
                var model = this;
                news = _.map(news, function (n) {
                    n.uuid = uuid.v1();
                    return n;
                });
                return model
                    .bulkCreate(news)
                    .then(function () {
                        var uuids = _.map(news, function (n) {
                            return n.uuid;
                        });

                        return model.findAll({where: {uuid: uuids}});
                    })
                    .then(function (d) {
                        var ids = _.map(d, function (a) {
                            return a.id;
                        });

                        return ids;
                    })
            },
            getByIds: function (ids) {
                var model = this;

                return model.findAll({
                    where: {
                        id: ids
                    }
                }).then(function (list) {
                    var obj = _.indexBy(list, 'id');
                    return obj;
                });
            }
        }
    });
    return weixin_news;
};