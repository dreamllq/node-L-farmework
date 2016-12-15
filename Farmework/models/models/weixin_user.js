'use strict';
var Api = Util("wx.api");
var Q = require("q");
var base64 = Util("Func.base64");

module.exports = function (sequelize, DataTypes) {
    var weixin_user = sequelize.define('weixin_user', {
        subscribe: DataTypes.INTEGER,
        openid: DataTypes.STRING,
        unionid: DataTypes.STRING,
        nickname: {
            type: DataTypes.STRING,
            set: function (val) {
                this.setDataValue('nickname', base64.encode(val));
            }
        },
        sex: DataTypes.INTEGER,
        language: DataTypes.STRING,
        city: DataTypes.STRING,
        province: DataTypes.STRING,
        country: DataTypes.STRING,
        headimgurl: DataTypes.STRING,
        subscribe_time: DataTypes.INTEGER,
        remark: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        groupid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        tagid_list: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "",
            set: function (val) {
                this.setDataValue('tagid_list', JSON.stringify(val));
            }
        }
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
                        data.nickname = base64.decode(data.nickname);
                        data.tagid_list = JSON.parse(data.tagid_list);

                        if (data.subscribe == 1) {
                            if ((new Date().getTime() - data.updatedAt.getTime() < 10 * 24 * 60 * 60 * 1000)) {
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
                                if (user_info.subscribe == 0) {
                                    return data;
                                } else {
                                    return models.update(user_info, {
                                        where: {
                                            openid: user_info.openid
                                        }
                                    }).then(function () {
                                        return user_info;
                                    })
                                }
                            })
                        }
                    } else {
                        return Api.getUserAsync(openid).then(function (user_info) {
                            if (user_info.subscribe == 1) {
                                return models.create(user_info).then(function () {
                                    return user_info;
                                });
                            } else {
                                return null;
                            }
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
            },
            saveAndUpdateByUnionid: function (userinfo) {
                var model = this;

                return model.find({
                    where: {
                        unionid: userinfo.unionid
                    }
                }).then(function (data) {
                    if (data) {
                        return model.update(userinfo, {
                            where: {
                                id: data.id
                            }
                        })
                    } else {
                        return model.saveAndUpdateByOpenid(userinfo);
                    }
                });
            },
            saveAndUpdateByOpenid: function (userinfo) {
                var model = this;

                return model.find({
                    where: {
                        openid: userinfo.openid
                    }
                }).then(function (data) {
                    if (data) {
                        return model.update(userinfo, {
                            where: {
                                id: data.id
                            }
                        })
                    } else {
                        return model.create(userinfo);
                    }
                });
            },
            saveAndUpdate: function (userinfo) {
                if (userinfo.unionid) {
                    return this.saveAndUpdateByUnionid(userinfo);
                } else {
                    return this.saveAndUpdateByOpenid(userinfo);
                }
            }
        }
    });
    return weixin_user;
};