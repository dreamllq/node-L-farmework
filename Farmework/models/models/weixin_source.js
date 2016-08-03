'use strict';
module.exports = function(sequelize, DataTypes) {
  var weixin_source = sequelize.define('weixin_source', {
    type: DataTypes.INTEGER,
    tid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return weixin_source;
};