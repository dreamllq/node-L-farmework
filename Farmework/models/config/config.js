/**
 * Created by lvlq on 16/7/24.
 */
require("../../index");
var config = Config();

var mysql_c = {
    "username": config.db_username,
    "password": config.db_password,
    "database": config.db_database,
    "host": config.db_host,
    "dialect": config.db_type,
    "port": config.db_port
};

var c = {
    "development": mysql_c,
    "test": mysql_c,
    "production": mysql_c
};

module.exports = c;