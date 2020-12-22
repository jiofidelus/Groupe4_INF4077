/** @format */

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      idUser: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      names: {
        type: DataTypes.STRING,
      },
      surnames: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      picture: {
        type: DataTypes.STRING,
      },
      userIdArchive: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        unique: true,
      },
    },

    {
      hooks: {
        beforeCreate: async (user, options) => {
          try {
            user.password = await user.HashPassword(user.password);
          } catch (error) {
            throw new Error('erreur');
          }
        },

        beforeUpdate: async (user, options) => {
          try {
            if (user.password && user.password.length <= 20) {
              user.password = await user.HashPassword(user.password);
            }
          } catch (error) {
            throw new Error('erreur');
          }
        },
      },
      indexes: [
        {
          unique: true,
          fields: ['email'],
        },
      ],
    }
  );

  User.prototype.passwordIsValid = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.prototype.HashPassword = async function (password) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  };

  return User;
};
