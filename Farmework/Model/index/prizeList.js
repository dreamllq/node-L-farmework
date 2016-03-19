/**
 * Created by lvlq on 16/2/27.
 */
var Sequelize = require("sequelize");
var sequelize = Util("sequelize");

module.exports = sequelize.define("prize_list", {
    aid: {
        type: Sequelize.INTEGER,
        field: "aid",
        allowNull: false,
        defaultValue: 0,
        comment: "排序"
    },
    name: {
        type: Sequelize.STRING,
        field: "name",
        allowNull: false,
        defaultValue: 0,
        comment: "奖品名"
    },
    num: {
        type: Sequelize.INTEGER,
        field: "num",
        allowNull: false,
        defaultValue: 0,
        comment: "排序"
    },
    has_num: {
        type: Sequelize.INTEGER,
        field: "has_num",
        allowNull: false,
        defaultValue: 0,
        comment: "剩余个数"
    },
    chance: {
        type: Sequelize.INTEGER,
        field: "chance",
        allowNull: false,
        defaultValue: 0,
        comment: "概率"
    }
});