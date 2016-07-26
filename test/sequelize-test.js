// where: {
//     id: {
//         $and: {a: 5}           // AND (a = 5)
//         $or: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
//         $gt: 6,                // id > 6
//         $gte: 6,               // id >= 6
//         $lt: 10,               // id < 10
//         $lte: 10,              // id <= 10
//         $ne: 20,               // id != 20
//         $between: [6, 10],     // BETWEEN 6 AND 10
//         $notBetween: [11, 15], // NOT BETWEEN 11 AND 15
//         $in: [1, 2],           // IN [1, 2]
//         $notIn: [1, 2],        // NOT IN [1, 2]
//         $like: '%hat',         // LIKE '%hat'
//         $notLike: '%hat'       // NOT LIKE '%hat'
//     },

// M("admin.uvlog").scope({method: ['get', "ccc", "1"]}).find();

//     return module.update({
//         num: Sequelize.literal('`num`+1')
//     }, {
//         where: {
//             type_name: type_name
//         }
//     })

var db = require("../Farmework/models/models");
// db['admin_menu'].all().then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.log(err);
// });

db['admin_pv'].addCount("lvliqi");
