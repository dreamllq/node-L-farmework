/**
 * Created by lvlq on 16/1/16.
 */
var Sequelize = require("sequelize");

module.exports = function (sequelize) {
    return sequelize.define("admin_user", {
        userName: {
            type: Sequelize.STRING,
            field: "user_name",
            unique: true,
            allowNull: false,
            comment: "用户名"
        },
        passWord: {
            type: Sequelize.STRING(32),
            field: "pass_word",
            allowNull: false,
            comment: "密码"
        },
        parentId: {
            type: Sequelize.INTEGER,
            field: "parent_id",
            allowNull: false,
            defaultValue: 0,
            comment: "用户父id"
        },
        authId: {
            type: Sequelize.INTEGER,
            field: "auth_id",
            allowNull: false,
            defaultValue: 0,
            comment: "权限id"
        },
        email: {
            type: Sequelize.STRING,
            field: "email",
            allowNull: false,
            defaultValue: 0,
            comment: "邮件"
        },
        phone: {
            type: Sequelize.STRING,
            field: "phone",
            allowNull: false,
            defaultValue: 0,
            comment: "电话"
        },
        name: {
            type: Sequelize.STRING,
            field: "name",
            allowNull: false,
            defaultValue: 0,
            comment: "姓名"
        }
    }, {
        indexes: [
            {
                fields: ["auth_id"]
            },
            {
                fields: ["parent_id"]
            }
        ]
    });
}