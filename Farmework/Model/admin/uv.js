/**
 * Created by lvliqi on 2016/7/20.
 */
var Sequelize = require("sequelize");
var sequelize = Util("sequelize");

module.exports = sequelize.define("admin_uv", {
    type_name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
        comment: "统计类型"
    },
    today_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "统计今日时间"
    },
    num: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "统计今日时间"
    }
}, {
    indexes: [
        {
            fields: ["type_name", 'today_time']
        },
        {
            fields: ["type_name"]
        },
        {
            type: "unique",
            fields: ["type_name", 'today_time'],
            name: "keyname"
        }
    ],
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

            var end = date.getTime() / 1000;
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