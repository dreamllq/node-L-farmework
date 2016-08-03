'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('weixin_sources', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            type: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            tid: {
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
            queryInterface.addIndex("weixin_sources", ["type"])
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('weixin_sources');
    }
};