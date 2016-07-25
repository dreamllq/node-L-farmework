'use strict';
module.exports = function(sequelize, DataTypes) {
  var admin_right = sequelize.define('admin_right', {
    name: DataTypes.STRING,
    createUser: DataTypes.INTEGER,
    createUserName: DataTypes.STRING,
    list: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return admin_right;
};