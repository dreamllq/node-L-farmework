/**
 * Created by lvlq on 16/3/19.
 */
var fs = require("fs");
var Q = require("q");
var oldlog = console.log;
console.log = function () {
};

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

var getTableDbver = function (table) {
    var defer = Q.defer();
    var dbver = M(table + ".dbver");
    dbver.sync().then(function () {
        dbver.max("ver").then(function (max) {
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
        var func = require(files[index]);
        func().then(function () {
            oldlog(files[index] + "::complete!");
            index++;
            doTableVer1(files, index, cb);
        }).catch(function (err) {
            cb(err);
        });
    } else {
        cb(null);
    }
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
        oldlog("complete!");
    }
};


var tables = getTables();

doAll(tables, 0);