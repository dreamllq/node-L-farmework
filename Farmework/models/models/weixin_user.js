'use strict';
var Api = Util("wx.api");
var Q = require("q");

module.exports = function (sequelize, DataTypes) {
    var weixin_user = sequelize.define('weixin_user', {
        subscribe: DataTypes.INTEGER,
        openid: DataTypes.STRING,
        nickname: DataTypes.STRING,
        sex: DataTypes.INTEGER,
        language: DataTypes.STRING,
        city: DataTypes.STRING,
        province: DataTypes.STRING,
        country: DataTypes.STRING,
        headimgurl: DataTypes.STRING,
        subscribe_time: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            },
            getByOpenid: function (openid) {
                var models = this;
                var defer = Q.defer();

                models.find({
                    where: {
                        openid: openid
                    }
                }).then(function (data) {
                    if (data) {
                        console.log(data.updatedAt.getTime());
                        if (new Date().getTime() - data.updatedAt.getTime() < 10 * 24 * 60 * 60 * 1000) {
                            return data;
                        } else {
                            return Api.getUserAsync(openid).then(function (user_info) {
                                return models.update(user_info, {
                                    where: {
                                        openid: user_info.openid
                                    }
                                }).then(function () {
                                    return user_info;
                                })
                            });
                        }

                    } else {
                        return Api.getUserAsync(openid).then(function (user_info) {
                            return models.create(user_info).then(function () {
                                return user_info;
                            });
                        });
                    }
                }).then(function (u) {
                    defer.resolve(u);
                }).catch(function (err) {
                    defer.reject(err);
                });
                return defer.promise;

            },
            getById: function (id) {

            },
            save: function (openid) {
                return this.getByOpenid(openid);
            }
        }
    });
    return weixin_user;
};