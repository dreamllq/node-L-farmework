/**
 * Created by lvlq on 15/7/27.
 */
var redis = require("redis");
var config = Config();
var Q = require("q");

var createClient = function () {
    var deferred = Q.defer();
    var redisClient = redis.createClient(config.memory_port, config.memory_host, {
        no_ready_check: true
    });

    redisClient.on("ready", function () {
        deferred.resolve(redisClient);
    });
    redisClient.on("error", function (err) {
        console.error(err);
        deferred.reject(err);
    });
    redisClient.on("end", function () {
    });
    return deferred.promise;
};

var stringify = function (obj) {
    if (!obj) return obj;
    else return JSON.stringify(obj);
};

var parse = function (string) {
    if (!string) return string;
    else return JSON.parse(string);
};

var set = function (key, value) {
    value = stringify(value);
    var deferred = Q.defer();
    createClient()
        .then(function (client) {
            client.set(key, value, function (err, reply) {
                if (!!err) {
                    deferred.reject(err);
                } else {
                    console.log("redis-set-%s::%s", key, value);
                    deferred.resolve(reply);
                }
            });
            client.quit();
        })
        .catch(function (err) {
            deferred.reject(err);
        });

    return deferred.promise;
};

var get = function (key) {
    var deferred = Q.defer();
    createClient()
        .then(function (client) {
            client.get(key, function (err, reply) {
                reply = parse(reply);
                if (!!err) {
                    deferred.reject(err);
                } else {
                    console.log("redis-get-%s::%j", key, reply);
                    deferred.resolve(reply);
                }
            });

            client.quit();
        })
        .catch(function (err) {
            deferred.reject(err);
        });

    return deferred.promise;
};

var setex = function (key, value, ttl) {
    var deferred = Q.defer();
    value = stringify(value);
    createClient()
        .then(function (client) {
            client.setex(key, ttl, value, function (err) {
                if (!!err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve();
                }
            });
            client.quit();
        })
        .catch(function (err) {
            deferred.reject(err);
        });
    return deferred.promise;
};

var getset = function (key, value) {
    var deferred = Q.defer();
    value = stringify(value);
    createClient()
        .then(function (client) {
            client.getset(key, value, function (err, reply) {
                reply = parse(reply);
                if (!!err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(reply);
                }
            });
            client.quit();
        })
        .catch(function (err) {
            deferred.reject(err);
        });
    return deferred.promise;
};

module.exports = {
    set: set,
    get: get,
    setex: setex,
    getset: getset
};