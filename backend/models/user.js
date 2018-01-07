'use strict';

module.exports = function(sequelize, DataTypes){
  const User = sequelize.define('User', {
    email_address: {
    type: DataTypes.STRING,
    isEmail:true,
    allowNull:false
    },
    password: {
    type: DataTypes.STRING,
    len: [8,16],
    allowNull:false
    }
  }, {
      classMethods: {
        associate: function(models) {
          User.hasMany(models.Recipe)
        }
      }
    }
  );
  return User;
};