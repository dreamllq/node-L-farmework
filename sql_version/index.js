/**
 * Created by lvlq on 16/3/19.
 */
var fs = require("fs");
var Q = require("q");

Config = function () {
    return require(__dirname + "/../Farmework/Config/common.js")
};

Util = function (str) {
    var arr = str.split(".");
    var path = "/../Farmework/Util/";
    for (var i = 0; i < arr.length; i++) {
        path += "/" + arr[i];
    }
    return require(__dirname + path);
};

M = function (str) {
    var arr = str.split(".");
    var path = __dirname + "/../Farmework/Model/";
    for (var i = 0; i < arr.length; i++) {
        path += "/" + arr[i];
    }
    return require(path);
};

var sequelize = Util("sequelize");

var getTableDbver = function (table) {
    var defer = Q.defer();
    var dbver = M(table + ".dbver");
    dbver.sync({
        logging: false
    }).then(function () {
        dbver.max("ver", {
            logging: false
        }).then(function (max) {
            if (max) {
                defer.resolve(max);
            } else {
                defer.resolve(0);
            }
        });
    });

    return defer.promise;
};

var getTables = function () {
    var files = fs.readdirSync(__dirname);
    var dir = [];
    for (var i = 0; i < files.length; i++) {
        var stat = fs.statSync(__dirname + "/" + files[i]);
        if (stat.isDirectory()) {
            dir.push(files[i]);
        }
    }
    return dir;
};


var getTableVerFile = function (table, ver) {
    var table_path = __dirname + "/" + table;
    var files = fs.readdirSync(table_path);
    var f = [];
    for (var i = 0; i < files.length; i++) {
        var stat = fs.statSync(table_path + "/" + files[i]);
        if (stat.isFile()) {
            var v = parseInt(files[i].split(".")[0]);
            if (v > ver) {
                f.push(table_path + "/" + files[i]);
            }
        }
    }

    return f;
};

var doTableVer = function (files) {
    var defer = Q.defer();

    doTableVer1(files, 0, function (err) {
        if (err) {
            defer.reject(err);
        } else {
            defer.resolve();
        }
    });
    return defer.promise;
};

var doTableVer1 = function (files, index, cb) {

    if (index < files.length) {
        var sqls = fs.readFileSync(files[index], 'utf8');
        var sql_arr = getAllSql(sqls);
        doAllSql(sql_arr, 0, function (err) {
            if (err) {
                cb(err);
            } else {
                console.log(files[index] + "... complete.");
                index++;
                doTableVer1(files, index, cb);
            }
        });
    } else {
        cb(null);
    }
};

var getAllSql = function (sqls) {
    sqls = sqls.replace(/\n/g, "");
    var arr = sqls.split(";");
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != "") {
            result.push(arr[i] + ";")
        }
    }
    return result;
};

var doAllSql = function (sql_arr, index, cb) {
    if (index < sql_arr.length) {
        doSQL(sql_arr[index]).then(function () {
            index++;
            doAllSql(sql_arr, index, cb);
        }).catch(function (err) {
            cb(err);
        });
    } else {
        cb(null);
    }
};

var doSQL = function (sql) {
    var defer = Q.defer();
    sequelize.query(sql, {
        logging: false
    }).then(function () {
        defer.resolve();
    }).catch(function (err) {
        defer.reject(err);
    });
    return defer.promise;
};

var doAll = function (tables, index) {
    if (index < tables.length) {
        var table = tables[index];
        getTableDbver("index").then(function (ver) {
            var files = getTableVerFile(table, ver);
            doTableVer(files).then(function () {
                index++;
                doAll(tables, index);
            }).catch(function (err) {
                console.log("Error::" + err.message);
            })
        });
    } else {
        console.log("complete.");
        process.exit();
    }
};
var tables = getTables();
doAll(tables, 0);