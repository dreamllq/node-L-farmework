'use strict';
module.exports = function (sequelize, DataTypes) {
    var admin_uvlog = sequelize.define('admin_uvlog', {
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
        key: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            },
            get: function (type_name, key) {
                var date = new Date();
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);
                var today_time = Math.floor(date.getTime() / 1000);

                this.find({
                    where: {
                        type_name: type_name,
                        today_time: today_time,
                        key: key
                    }
                })
            },
            addLog: function (type_name, key) {
                return this.create({
                    type_name: type_name,
                    key: key
                })
            }
        }
    });
    return admin_uvlog;
};