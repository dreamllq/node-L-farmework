/**
 * Created by lvlq on 16/2/27.
 */
var Sequelize = require("sequelize");
var sequelize = Util("sequelize");

module.exports = sequelize.define("wsdl", {
    input: {
        type: Sequelize.TEXT,
        field: "input",
        allowNull: false,
        defaultValue: "",
    },
    output: {
        type: Sequelize.TEXT,
        field: "output",
        allowNull: false,
        defaultValue: "",
    }

});