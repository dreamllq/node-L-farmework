'use strict';
module.exports = function (sequelize, DataTypes) {
    var weixin_source = sequelize.define('weixin_source', {
        type: DataTypes.INTEGER,
        data: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        desc: {
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
            },
            addSource: function (options) {
                var model = this;

                return model.create(options);
            },
            deleteSource: function (options) {
                var model = this;

                return model.destroy({
                    where: {
                        id: options.id
                    }
                });
            }
        }
    });
    return weixin_source;
};