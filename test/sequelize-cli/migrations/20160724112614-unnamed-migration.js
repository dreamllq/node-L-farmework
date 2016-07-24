'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, done) {

    queryInterface.createTable(
        'nameOfTheNewTable',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          createdAt: {
            type: Sequelize.DATE
          },
          updatedAt: {
            type: Sequelize.DATE
          },
          attr1: Sequelize.STRING,
          attr2: Sequelize.INTEGER,
          attr3: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
          },
          //foreign key usage
          attr4: {
            type: Sequelize.INTEGER,
          }
        },
        {}
    ).done(function () {

      done();
    });
  },

  down: function (queryInterface) {
    console.log(2);
    return new Promise(function (resolve, reject) {
      resolve();
    });
  }
};