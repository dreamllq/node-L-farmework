/**
 * Created by lvlq on 16/2/26.
 */
var Sequelize = require("sequelize");
var sequelize = Util("sequelize");

module.exports = sequelize.define("test", {
    name: {
        type: Sequelize.STRING,
        field: "name",
        allowNull: false,
        defaultValue: 0,
        comment: "菜单名"
    },
    uri: {
        type: Sequelize.STRING,
        field: "uri",
        allowNull: false,
        defaultValue: 0,
        comment: "跳转地址"
    },
    icon: {
        type: Sequelize.STRING,
        field: "icon",
        allowNull: false,
        defaultValue: 0,
        comment: "图标"
    },
    sort: {
        type: Sequelize.INTEGER,
        field: "sort",
        allowNull: false,
        defaultValue: 0,
        comment: "排序"
    },
    parentId: {
        type: Sequelize.INTEGER,
        field: "parent_id",
        allowNull: false,
        defaultValue: 0,
        comment: "父菜单Id"
    },
    groupId: {
        type: Sequelize.INTEGER,
        field: "group_id",
        allowNull: false,
        defaultValue: 0,
        comment: "菜单分组Id"
    }
});