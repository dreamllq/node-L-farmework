/**
 * Created by lvlq on 16/2/27.
 */
var Sequelize = require("sequelize");
var sequelize = Util("sequelize");

module.exports = sequelize.define("user_list", {
    name: {
        type: Sequelize.STRING,
        field: "name",
        allowNull: false,
        defaultValue: "",
        comment: "姓名"
    },
    phone: {
        type: Sequelize.STRING,
        field: "phone",
        allowNull: false,
        defaultValue: "",
        comment: "电话号"
    },
    address: {
        type: Sequelize.STRING,
        field: "address",
        allowNull: false,
        defaultValue: "",
        comment: "地址"
    },
    aid: {
        type: Sequelize.INTEGER,
        field: "aid",
        allowNull: false,
        defaultValue: 0,
        comment: "活动id"
    },
    pid: {
        type: Sequelize.INTEGER,
        field: "pid",
        allowNull: false,
        defaultValue: 0,
        comment: "奖品id"
    },
    pname: {
        type: Sequelize.STRING,
        field: "pname",
        allowNull: false,
        defaultValue: 0,
        comment: "姓名"
    },
    uid: {
        type: Sequelize.STRING,
        field: "uid",
        allowNull: false,
        defaultValue: 0,
        comment: "用户id"
    },
    img_url: {
        type: Sequelize.STRING,
        field: "img_url",
        allowNull: false,
        defaultValue: 0,
        comment: "上传图片地址"
    },
    ac_code: {
        type: Sequelize.STRING,
        field: "ac_code",
        allowNull: false,
        defaultValue: 0,
        comment: "数码"
    }

});