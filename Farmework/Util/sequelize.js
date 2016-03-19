/**
 * Created by lvlq on 16/1/13.
 */
var Sequelize = require("sequelize");
var config = Config();

var sequelize = new Sequelize(config.db_database, config.db_username, config.db_password, {
    host: config.db_host,
    dialect: config.db_type,
    query: {
        raw: true
    },
    define: {}
});

module.exports = sequelize;