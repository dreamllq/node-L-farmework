'use strict';
var db = require("../models");

module.exports = {
    up: function (queryInterface, Sequelize) {
        /*
         Add altering commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         return queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        // {name: "Dashboard", uri: "/admin/index"},
        // {name: '系统设置'},
        // {name: '权限管理', uri: '/admin/right/index', parentId: 2},
        // {name: "用户管理", uri: '/admin/user/index', parentId: 2}

        return db.admin_menu.addMenu({name: "微信管理"}).then(function () {
            return db.admin_menu.addMenu({name: "公众号设置"}, "微信管理");
        }).then(function () {
            return db.admin_menu.addMenu({name: "素材管理"}, "微信管理");
        }).then(function () {
            return db.admin_menu.addMenu({name: "用户管理"}, "微信管理");
        }).then(function () {
            return db.admin_menu.addMenu({name: "图文消息", uri: "/admin/weixin/source/news/index"}, "素材管理");
        }).then(function () {
            return db.admin_menu.addMenu({name: "图片消息", uri: "/admin/weixin/source/image/index"}, "素材管理");
        }).then(function () {
            return db.admin_menu.addMenu({name: "音频消息", uri: "/admin/weixin/source/voice/index"}, "素材管理");
        }).then(function () {
            return db.admin_menu.addMenu({name: "视频消息", uri: "/admin/weixin/source/video/index"}, "素材管理");
        }).then(function () {
            return db.admin_menu.addMenu({name: "文本消息", uri: "/admin/weixin/source/text/index"}, "素材管理");
        }).then(function () {
            return db.admin_menu.addMenu({name: "功能设置"}, "微信管理");
        }).then(function () {
            return db.admin_menu.addMenu({name: "欢迎语设置"}, "功能设置");
        }).then(function () {
            return db.admin_menu.addMenu({name: "默认回复"}, "功能设置");
        }).then(function () {
            return db.admin_menu.addMenu({name: "关键字回复"}, "功能设置");
        }).then(function () {
            return db.admin_menu.addMenu({name: "自定义菜单"}, "功能设置");
        });
    },

    down: function (queryInterface, Sequelize) {
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         return queryInterface.dropTable('users');
         */
        return db.admin_menu.destroy({
            where: {
                name: [
                    '微信管理',
                    '公众号设置',
                    '素材管理',
                    '用户管理',
                    '图文消息',
                    '图片消息',
                    '音频消息',
                    '视频消息',
                    '文本消息',
                    '功能设置',
                    '欢迎语设置',
                    '默认回复',
                    '关键字回复',
                    '自定义菜单'
                ]
            }
        })
    }
};
