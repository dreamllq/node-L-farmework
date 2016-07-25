'use strict';
module.exports = function (sequelize, DataTypes) {
    var admin_pv = sequelize.define('admin_pv', {
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
            }
        },
        scopes: {
            getOneDay: function (type_name, today_time) {
                return {
                    where: {
                        type_name: type_name,
                        today_time: today_time
                    }
                }
            },
            getAll: function (type_name) {
                return {
                    where: {
                        type_name: type_name
                    }
                }
            },
            getRange: function (type_name, begin, end) {
                return {
                    where: {
                        type_name: type_name,
                        today_time: {
                            $gte: begin,
                            $lte: end
                        }
                    }
                }
            },
            get7: function (type_name) {
                var date = new Date();
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);

                var end = Math.floor(date.getTime() / 1000);
                var begin = end - (7 * 24 * 60 * 60);

                return {
                    where: {
                        type_name: type_name,
                        today_time: {
                            $gte: begin,
                            $lte: end
                        }
                    },
                    limit: 7
                }
            },
            get15: function (type_name) {
                var date = new Date();
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);

                var end = Math.floor(date.getTime() / 1000);
                var begin = end - (15 * 24 * 60 * 60);

                return {
                    where: {
                        type_name: type_name,
                        today_time: {
                            $gte: begin,
                            $lte: end
                        }
                    },
                    limit: 15
                }
            },
            get30: function (type_name) {
                var date = new Date();
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);

                var end = Math.floor(date.getTime() / 1000);
                var begin = end - (30 * 24 * 60 * 60);

                return {
                    where: {
                        type_name: type_name,
                        today_time: {
                            $gte: begin,
                            $lte: end
                        }
                    },
                    limit: 30
                }
            }
        }
    });
    return admin_pv;
};