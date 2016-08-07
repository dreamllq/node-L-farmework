'use strict';
var db = require("../models");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return db.admin_menu.bulkCreate([
            {name: "Dashboard", uri: "/admin/index"},
            {name: '系统设置'},
            {name: '权限管理', uri: '/admin/right/index', parentId: 2},
            {name: "管理员管理", uri: '/admin/user/index', parentId: 2}
        ]);
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
