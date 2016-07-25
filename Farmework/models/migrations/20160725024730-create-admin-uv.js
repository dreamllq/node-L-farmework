'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('admin_uvs', {
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
            num: {
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
            return queryInterface.addIndex('admin_uvs', ["type_name", 'today_time']);
        }).then(function () {
            return queryInterface.addIndex('admin_uvs', ["type_name"]);
        }).then(function () {
            return queryInterface.addIndex('admin_uvs', ["type_name", 'today_time'], {
                indexName: 'keyname',
                indicesType: 'UNIQUE'
            });
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('admin_uvs');
    }
};