'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('admin_rights', {
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
            createUser: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            createUserName: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            list: {
                type: Sequelize.TEXT,
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
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('admin_rights');
    }
};