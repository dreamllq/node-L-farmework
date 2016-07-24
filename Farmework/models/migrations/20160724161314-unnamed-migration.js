'use strict';

module.exports = {
    up: function (queryInterface, Sequelize, done) {
        queryInterface.createTable("admin_right", {
            name: {
                type: Sequelize.STRING,
                field: "name",
                allowNull: false,
                defaultValue: 0,
                comment: "权限名"
            },
            createUser: {
                type: Sequelize.INTEGER,
                field: "create_user",
                allowNull: false,
                defaultValue: 0,
                comment: "创建人id"
            },
            createUserName: {
                type: Sequelize.STRING,
                field: "create_user_name",
                allowNull: false,
                defaultValue: 0,
                comment: "创建人姓名"
            },
            list: {
                type: Sequelize.TEXT,
                field: "list",
                comment: "菜单id列表"
            }
        }, {
            comment: "权限管理表"
        }).then(function () {
            done()
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
