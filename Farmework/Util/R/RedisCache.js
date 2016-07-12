/**
 * Created by lvliqi on 2016/7/12.
 */

var bluebird = require("bluebird");
var redis = require("redis");
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
var config = Config();

var Redis = function () {
    var client = redis.createClient(config.memory_port, config.memory_host, {
        no_ready_check: true
    });

    client.on("error", function (err) {
        console.error(err);
    });

    return client;
};

module.exports = Redis;