'use strict';
module.exports = function(sequelize, DataTypes) {
  var weixin_news = sequelize.define('weixin_news', {
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    imgurl: DataTypes.STRING,
    url: DataTypes.STRING,
    html: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return weixin_news;
};