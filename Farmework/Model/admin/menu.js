/**
 * Created by lvlq on 16/1/18.
 */
var Sequelize = require("sequelize");
var sequelize = Util("sequelize");

module.exports = sequelize.define("admin_menu", {
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
        defaultValue: "",
        comment: "跳转地址"
    },
    icon: {
        type: Sequelize.STRING,
        field: "icon",
        allowNull: false,
        defaultValue: "",
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
}, {
    indexes: [
        {
            fields: ["group_id"]
        },
        {
            fields: ["parent_id"]
        }
    ]
});