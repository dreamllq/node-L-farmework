'use strict';

module.exports = {
    up: function (queryInterface, Sequelize, done) {
        return queryInterface.createTable("admin_user", {
            userName: {
                type: Sequelize.STRING,
                field: "user_name",
                unique: true,
                allowNull: false,
                comment: "用户名"
            },
            passWord: {
                type: Sequelize.STRING(32),
                field: "pass_word",
                allowNull: false,
                comment: "密码"
            },
            parentId: {
                type: Sequelize.INTEGER,
                field: "parent_id",
                allowNull: false,
                defaultValue: 0,
                comment: "用户父id"
            },
            authId: {
                type: Sequelize.INTEGER,
                field: "auth_id",
                allowNull: false,
                defaultValue: 0,
                comment: "权限id"
            },
            email: {
                type: Sequelize.STRING,
                field: "email",
                allowNull: false,
                defaultValue: 0,
                comment: "邮件"
            },
            phone: {
                type: Sequelize.STRING,
                field: "phone",
                allowNull: false,
                defaultValue: 0,
                comment: "电话"
            },
            name: {
                type: Sequelize.STRING,
                field: "name",
                allowNull: false,
                defaultValue: 0,
                comment: "姓名"
            }
        }).then(function () {
            return queryInterface.addIndex("admin_user", ["auth_id"]);
        }).then(function () {
            return queryInterface.addIndex("admin_user", ["parent_id"]);
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
