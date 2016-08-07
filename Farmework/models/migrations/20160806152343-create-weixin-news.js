'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('weixin_news', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            desc: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            imgurl: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            url: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            html: {
                type: Sequelize.TEXT,
                allowNull: false,
                defaultValue: ''
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
        return queryInterface.dropTable('weixin_news');
    }
};