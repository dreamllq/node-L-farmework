'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('admin_uvlogs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            type_name: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            today_time: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            key: {
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
            queryInterface.addIndex("admin_uvlogs", ["type_name", 'today_time', 'key'])
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('admin_uvlogs');
    }
};