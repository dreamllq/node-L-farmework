'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('admin_users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userName: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            passWord: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            parentId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            authId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }).then(function () {
            return queryInterface.addIndex('admin_users', ["authId"]);
        }).then(function () {
            return queryInterface.addIndex('admin_users', ["parentId"]);
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('admin_users');
    }
};