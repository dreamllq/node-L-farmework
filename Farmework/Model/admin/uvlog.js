/**
 * Created by lvliqi on 2016/7/20.
 */
var Sequelize = require("sequelize");
var sequelize = Util("sequelize");

module.exports = sequelize.define("admin_uvlog", {
    type_name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
        comment: "统计类型"
    },
    today_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: function () {
            var date = new Date();
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            return Math.floor(date.getTime() / 1000);
        },
        comment: "统计今日时间"
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        comment: "ip/uid"
    }
}, {
    indexes: [
        {
            fields: ["type_name", 'today_time', 'key']
        }
    ],
    scopes: {
        get: function (type_name, key) {
            var date = new Date();
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            var today_time = Math.floor(date.getTime() / 1000);

            return {
                where: {
                    type_name: type_name,
                    today_time: today_time,
                    key: key
                }
            }
        }
    }
});