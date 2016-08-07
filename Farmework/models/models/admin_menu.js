'use strict';
module.exports = function (sequelize, DataTypes) {
    var admin_menu = sequelize.define('admin_menu', {
        name: DataTypes.STRING,
        uri: DataTypes.STRING,
        icon: DataTypes.STRING,
        sort: DataTypes.INTEGER,
        parentId: DataTypes.INTEGER,
        groupId: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            },
            all: function () {
                console.log(1);
                return this.findAll();
            },
            addMenu: function (menu, parentName) {
                var model = this;
                if (!parentName) {
                    return model.create(menu);
                } else {
                    return model.find({
                        where: {
                            name: parentName
                        }
                    }).then(function (data) {
                        if (data) {
                            menu.parentId = data.id;

                            return model.create(menu);
                        } else {
                            return null;
                        }
                    })
                }
            }
        }
    });
    return admin_menu;
};