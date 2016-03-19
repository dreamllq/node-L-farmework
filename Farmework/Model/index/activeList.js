/**
 * Created by lvlq on 16/2/27.
 */
var Sequelize = require("sequelize");
var sequelize = Util("sequelize");

module.exports = sequelize.define("active_list", {
    name: {
        type: Sequelize.STRING,
        field: "name",
        allowNull: false,
        defaultValue: 0,
        comment: "活动名"
    }
});