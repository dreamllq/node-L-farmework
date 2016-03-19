/**
 * Created by lvlq on 16/1/20.
 */
var Sequelize = require("sequelize");
var sequelize = Util("sequelize");

module.exports = sequelize.define("admin_right", {
    name: {
        type: Sequelize.STRING,
        field: "name",
        allowNull: false,
        defaultValue: 0,
        comment: "权限名"
    },
    createUser: {
        type: Sequelize.INTEGER,
        field: "create_user",
        allowNull: false,
        defaultValue: 0,
        comment: "创建人id"
    },
    createUserName: {
        type: Sequelize.STRING,
        field: "create_user_name",
        allowNull: false,
        defaultValue: 0,
        comment: "创建人姓名"
    },
    list: {
        type: Sequelize.TEXT,
        field: "list",
        comment: "菜单id列表"
    }
}, {
    comment: "权限管理表"
});