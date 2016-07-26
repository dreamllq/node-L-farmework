/**
 * Created by lvlq on 16/1/13.
 */
var Sequelize = require("sequelize");
var config = Config();

var sequelize = new Sequelize(config.db_database, config.db_username, config.db_password, {
    host: config.db_host,
    port: config.db_port,
    dialect: config.db_type,
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
});

module.exports = sequelize;