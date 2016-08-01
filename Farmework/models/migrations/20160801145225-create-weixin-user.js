'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('weixin_users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            subscribe: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            openid: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            nickname: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            sex: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            language: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            province: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            country: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            headimgurl: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            subscribe_time: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            remark: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            groupid: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            tagid_list: {
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
        }).then(function () {
            queryInterface.addIndex("weixin_users", ["openid"])
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('weixin_users');
    }
};