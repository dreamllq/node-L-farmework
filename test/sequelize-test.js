/**
 * Created by lvlq on 16/3/20.
 */
// Config = function () {
//     return require(__dirname + "/../Farmework/Config/common.js")
// };
//
// Util = function (str) {
//     var arr = str.split(".");
//     var path = "/../Farmework/Util/";
//     for (var i = 0; i < arr.length; i++) {
//         path += "/" + arr[i];
//     }
//     return require(__dirname + path);
// };
//
// M = function (str) {
//     var arr = str.split(".");
//     var path = __dirname + "/../Farmework/Model/";
//     for (var i = 0; i < arr.length; i++) {
//         path += "/" + arr[i];
//     }
//     return require(path);
// };
//
// var Sequelize = require("sequelize");
//
// var sequelize = Util("sequelize");

// var User = M("index.user");
// User.scope({
//     method: ["page", 4, 10]
// }).findAll().then(function (data) {
//     console.log(data);
// });

// where: {
//     id: {
//         $and: {a: 5}           // AND (a = 5)
//         $or: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
//         $gt: 6,                // id > 6
//             $gte: 6,               // id >= 6
//             $lt: 10,               // id < 10
//             $lte: 10,              // id <= 10
//             $ne: 20,               // id != 20
//             $between: [6, 10],     // BETWEEN 6 AND 10
//             $notBetween: [11, 15], // NOT BETWEEN 11 AND 15
//             $in: [1, 2],           // IN [1, 2]
//             $notIn: [1, 2],        // NOT IN [1, 2]
//             $like: '%hat',         // LIKE '%hat'
//             $notLike: '%hat'       // NOT LIKE '%hat'
//         $iLike: '%hat'         // ILIKE '%hat' (case insensitive)  (PG only)
//         $notILike: '%hat'      // NOT ILIKE '%hat'  (PG only)
//         $overlap: [1, 2]       // && [1, 2] (PG array overlap operator)
//         $contains: [1, 2]      // @> [1, 2] (PG array contains operator)
//         $contained: [1, 2]     // <@ [1, 2] (PG array contained by operator)
//         $any: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)
//     },

// M("admin.uv").sync();
// M("admin.pv").sync();
// M("admin.uvlog").sync();

// M("admin.pv").scope({method: ['get30', 1]}).find().then(function (data) {
//     console.log(data);
// });


// var module = M("admin.pv");
// var type_name = "ccc";
// var date = new Date();
// date.setHours(0);
// date.setMinutes(0);
// date.setSeconds(0);
// var today_time = Math.floor(date.getTime() / 1000);
// module.findOrCreate({
//     where: {
//         type_name: type_name,
//         today_time: today_time
//     },
//     defaults: {
//         type_name: type_name
//     }
// }).then(function () {
//     return module.update({
//         num: Sequelize.literal('`num`+1')
//     }, {
//         where: {
//             type_name: type_name
//         }
//     })
// });


// M("admin.uvlog").scope({method: ['get', "ccc", "1"]}).f;

var db = require("../Farmework/models/models");
db.admin_menu.all().then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});
