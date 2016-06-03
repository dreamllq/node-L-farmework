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

var commands = ['set', 'get', 'setex'];
for (var i = 0; i < commands.length; i++) {
    var c = commands[i];
    module.exports[c] = (function (command) {

        return function () {
            var deferred = Q.defer();
            var len = arguments.length;
            var arg = arguments;
            for (var j = 0; j < len; j++) {
                if (typeof arguments[j] != 'string') {
                    try {
                        arguments[j] = stringify(arguments[j]);
                    } catch (e) {
                    }
                }
            }

            createClient().then(function (client) {
                var cb = function (err, reply) {
                    try {
                        reply = parse(reply);
                    } catch (e) {
                    }

                    if (!!err) {
                        deferred.reject(err);
                    } else {
                        console.log("redis-%s-%s::%j", command, arg[0], reply);
                        deferred.resolve(reply);
                    }
                };
                switch (len) {
                    case 0:
                        client[command](cb);
                        break;
                    case 1:
                        client[command](arg[0], cb);
                        break;
                    case 2:
                        client[command](arg[0], arg[1], cb);
                        break;
                    case 3:
                        client[command](arg[0], arg[1], arg[2], cb);
                        break;
                }

                client.quit();
            }).catch(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }

    })(c);
}