'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.PhoneNumber, {
        foreignKey: 'user_id',
        as: 'phoneNumbers',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init(
    {
      // id: {
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV4,
      //   unique: true,
      //   allowNull: false,
      //   primaryKey: true,
      // },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
    },
  );
  return User;
};
