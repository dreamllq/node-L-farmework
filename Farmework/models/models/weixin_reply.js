'use strict';
module.exports = function (sequelize, DataTypes) {
    var weixin_reply = sequelize.define('weixin_reply', {
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        reply_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        uuid: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return weixin_reply;
};