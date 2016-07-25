'use strict';
var db = require("../models");
module.exports = {
    up: function (queryInterface, Sequelize) {
        return db.admin_user.create({
            userName: "admin",
            passWord: "e10adc3949ba59abbe56e057f20f883e"
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
