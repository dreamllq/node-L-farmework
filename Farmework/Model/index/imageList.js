/**
 * Created by lvlq on 16/2/27.
 */
var Sequelize = require("sequelize");
var sequelize = Util("sequelize");

module.exports = sequelize.define("image_list", {
    uid: {
        type: Sequelize.STRING,
        field: "uid",
        allowNull: false,
        defaultValue: 0,
        comment: "用户名"
    },
    url: {
        type: Sequelize.STRING,
        field: "url",
        allowNull: false,
        defaultValue: 0,
        comment: "图片链接"
    }
});