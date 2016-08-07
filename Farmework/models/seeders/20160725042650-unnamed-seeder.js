'use strict';
var db = require("../models");
module.exports = {
    up: function (queryInterface, Sequelize) {
        return db.admin_menu.addMenu({name: "测试"}).then(function () {
            return db.admin_menu.addMenu({name: "基础功能", uri: "/admin/test/index"}, "测试");
        }).then(function () {
            return db.admin_menu.addMenu({name: "Highcharts", uri: "/admin/test/highcharts"}, "测试");
        })
    },

    down: function (queryInterface, Sequelize) {
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         return queryInterface.bulkDelete('Person', null, {});
         */
    }
};
