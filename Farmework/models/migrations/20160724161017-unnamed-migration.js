'use strict';

module.exports = {
    up: function (queryInterface, Sequelize, done) {
        queryInterface.createTable("admin_menu", {
            name: {
                type: Sequelize.STRING,
                field: "name",
                allowNull: false,
                defaultValue: 0,
                comment: "菜单名"
            },
            uri: {
                type: Sequelize.STRING,
                field: "uri",
                allowNull: false,
                defaultValue: "",
                comment: "跳转地址"
            },
            icon: {
                type: Sequelize.STRING,
                field: "icon",
                allowNull: false,
                defaultValue: "",
                comment: "图标"
            },
            sort: {
                type: Sequelize.INTEGER,
                field: "sort",
                allowNull: false,
                defaultValue: 0,
                comment: "排序"
            },
            parentId: {
                type: Sequelize.INTEGER,
                field: "parent_id",
                allowNull: false,
                defaultValue: 0,
                comment: "父菜单Id"
            },
            groupId: {
                type: Sequelize.INTEGER,
                field: "group_id",
                allowNull: false,
                defaultValue: 0,
                comment: "菜单分组Id"
            }
        }).then(function () {
            return queryInterface.addIndex("admin_menu", ["groupId"]);
        }).then(function () {
            return queryInterface.addIndex("admin_menu", ["parentId"]);
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
