'use strict';
var db = require("../models");
module.exports = {
    up: function (queryInterface, Sequelize) {
        return db.admin_menu.bulkCreate([
            {name: "测试"},
            {name: "基础功能", uri: "/admin/test/index", parentId: 5},
            {name: "Highcharts", uri: "/admin/test/highcharts", parentId: 5}
        ])
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
