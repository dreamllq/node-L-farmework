'use strict';

var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var admin_uv = sequelize.define('admin_uv', {
        type_name: DataTypes.STRING,
        today_time: {
            type: DataTypes.INTEGER,
            defaultValue: function () {
                var date = new Date();
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);
                return Math.floor(date.getTime() / 1000);
            }
        },
        num: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            },
            getlist: function (type_name, begin, end) {
                if (!end) end = begin;

                if (!begin) {
                    return this.findAll({
                        where: {
                            type_name: type_name
                        }
                    })
                } else {
                    return this.findAll({
                        where: {
                            type_name: type_name,
                            today_time: {
                                $gte: begin,
                                $lte: end
                            }
                        }
                    })
                }
            },
            getListLimit: function (type_name, limit) {
                limit = parseInt(limit);
                var date = new Date();
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);

                var end = Math.floor(date.getTime() / 1000);
                var begin = end - (limit * 24 * 60 * 60);

                return this.getlist(type_name, begin, end);
            },
            addCount: function (type_name) {
                var model = this;
                var date = new Date();
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);
                var today_time = Math.floor(date.getTime() / 1000);
                return model.findOrCreate({
                    where: {
                        type_name: type_name,
                        today_time: today_time
                    },
                    defaults: {
                        type_name: type_name
                    }
                }).then(function () {
                    return model.update({
                        num: Sequelize.literal('`num`+1')
                    }, {
                        where: {
                            type_name: type_name
                        }
                    })
                });
            }
        }
    });
    return admin_uv;
};