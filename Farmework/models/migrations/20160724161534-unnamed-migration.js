'use strict';

module.exports = {
    up: function (queryInterface, Sequelize, done) {
        return queryInterface.createTable("admin_uvlog", {
            type_name: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "",
                comment: "统计类型"
            },
            today_time: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            key: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: '',
                comment: "ip/uid"
            }
        }).then(function () {
            queryInterface.addIndex("admin_uvlog", ["type_name", 'today_time', 'key']);
        }).then(function () {
            done();
        })
    },

    down: function (queryInterface, Sequelize) {
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         return queryInterface.dropTable('users');
         */
    }
};
