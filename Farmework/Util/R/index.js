/**
 * Created by lvlq on 15/10/7.
 */
var redisClient = require("./redis");
module.exports = function (key) {
    return {
        set: function (value) {
            return redisClient.set(key, value);
        },
        get: function () {
            return redisClient.get(key);
        },
        setex: function (value, ttl) {
            // return redisClient.setex(key, value, ttl);
            return redisClient.setex(key, ttl, value);
        }
    };
};