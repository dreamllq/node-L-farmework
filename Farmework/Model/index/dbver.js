/**
 * Created by lvlq on 16/3/19.
 */
var Sequelize = require("sequelize");
var sequelize = Util("sequelize");

module.exports = sequelize.define("dbver", {
    ver: {
        type: Sequelize.INTEGER,
        field: "ver",
        allowNull: false,
        defaultValue: 0,
        unique: true
    },
    changelog: {
        type: Sequelize.TEXT,
        field: "changelog",
        allowNull: false,
        defaultValue: "",
    }
}, {
    comment: "sql版本表"
});