/**
 * Created by lvlq on 16/7/24.
 */
// require("../../index");
var config = require("../../Config/common");

var mysql_c = {
    "username": config.db_username,
    "password": config.db_password,
    "database": config.db_database,
    "host": config.db_host,
    "dialect": config.db_type,
    "port": config.db_port,
    query: {
        raw: true
    },
    define: {
        scopes: {
            page: function (page, step) {
                page = Math.floor(page);
                step = Math.floor(step);
                if (page < 1) {
                    page = 1;
                }
                return {
                    offset: (page - 1) * step,
                    limit: step
                }
            }
        }
    },
    timezone: "+08:00"
};

var c = {
    "development": mysql_c,
    "test": mysql_c,
    "production": mysql_c
};

module.exports = c;