/**
 * Created by lvlq on 16/7/24.
 */
require("../../index");
// var config = require("../../Config/common");

var mysql_c = {
    "username": C.db_username,
    "password": C.db_password,
    "database": C.db_database,
    "host": C.db_host,
    "dialect": C.db_type,
    "port": C.db_port,
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