'use strict';
module.exports = function(sequelize, DataTypes) {
  var admin_user = sequelize.define('admin_user', {
    userName: DataTypes.STRING,
    passWord: DataTypes.STRING,
    parentId: DataTypes.INTEGER,
    authId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return admin_user;
};