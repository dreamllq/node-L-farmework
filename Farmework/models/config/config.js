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
            page: function (page, where) {
                page = Math.floor(page);
                var step = Math.floor(C.page_step);
                if (page < 1) {
                    page = 1;
                }
                return {
                    offset: (page - 1) * step,
                    limit: step
                }
            }
        },
        classMethods: {
            pageData: function (page, where) {
                page = page || 1;
                page = page < 1 ? 1 : page;
                var model = this;

                page = Math.floor(page);
                var step = Math.floor(C.page_step);

                return model.findAndCountAll({
                    where: where,
                    offset: (page - 1) * step,
                    limit: step,
                    order: "id desc"
                }).then(function (result) {

                    var page_list = [];
                    var pageNowTemp = page;
                    var pageCount = Math.ceil(result.count / C.page_step);

                    if (pageCount <= 9) {
                        for (var i = 0; i < pageCount; i++) {
                            page_list.push(i + 1);
                        }
                    } else {
                        if (pageNowTemp + 4 > pageCount) {
                            for (var i = pageCount - 8; i <= pageCount; i++) {
                                page_list.push(i);
                            }
                        } else {
                            if (pageNowTemp <= 4) {
                                for (var i = 1; i <= 9; i++) {
                                    page_list.push(i);
                                }
                            } else {
                                for (var i = pageNowTemp - 4; i <= pageNowTemp + 4; i++) {
                                    page_list.push(i);
                                }
                            }
                        }
                    }

                    return {
                        list: result.rows,
                        page: {
                            pages: Math.ceil(result.count / C.page_step),
                            current_page: page,
                            step: C.page_step,
                            count: result.count,
                            page_list: page_list,
                            page_index: 5
                        }
                    }
                });
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