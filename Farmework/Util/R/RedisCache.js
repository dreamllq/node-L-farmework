/**
 * Created by lvliqi on 2016/7/12.
 */

var bluebird = require("bluebird");
var redis = require("redis");
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

var Redis = function () {
    var client = redis.createClient({
        host: C.memory_host,
        port: C.memory_port,
        no_ready_check: true,
        retry_strategy: function (options) {
            if (options.error.code === 'ECONNREFUSED') {
                // End reconnecting on a specific error and flush all commands with a individual error
                return new Error('The server refused the connection');
            }
            if (options.total_retry_time > 1000 * 60 * 60) {
                // End reconnecting after a specific timeout and flush all commands with a individual error
                return new Error('Retry time exhausted');
            }
            if (options.times_connected > 10) {
                // End reconnecting with built in error
                return undefined;
            }
            // reconnect after
            return Math.max(options.attempt * 100, 3000);
        }
    });

    client.on("ready", function () {
        console.log("redis client ready");
    });

    client.on("connect", function () {
        console.log("redis client connect");
    });

    client.on("reconnecting", function () {
        console.log("redis client reconnecting");
    });

    client.on("error", function (err) {
        console.error(err);
    });

    client.on("end", function () {
        console.log("redis client close");
    });

    client.on("warning", function () {
        console.log("redis client warning");
    });

    return client;
};

module.exports = Redis;