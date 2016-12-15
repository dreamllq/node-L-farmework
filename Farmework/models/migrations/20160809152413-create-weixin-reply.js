'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('weixin_replies', {
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
            reply_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            key: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            uuid: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            uid: {
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
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('weixin_replies');
    }
};