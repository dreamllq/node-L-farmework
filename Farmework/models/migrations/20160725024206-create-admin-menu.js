'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('admin_menus', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            uri: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            icon: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            sort: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            parentId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            groupId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
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
            return queryInterface.addIndex('admin_menus', ['groupId'])
        }).then(function () {
            return queryInterface.addIndex('admin_menus', ['parentId'])
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('admin_menus');
    }
};