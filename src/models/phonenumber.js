'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhoneNumber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PhoneNumber.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  PhoneNumber.init(
    {
      // id: {
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV4,
      //   unique: true,
      //   allowNull: false,
      //   primaryKey: true,
      // },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[0-9]{10}/,
        },
      },
      type: {
        type: DataTypes.ENUM,
        values: ['home', 'work', 'mobile'],
        allowNull: true,
        defaultValue: 'mobile',
      },
    },
    {
      sequelize,
      modelName: 'phoneNumber',
      tableName: 'phone_numbers',
    },
  );
  return PhoneNumber;
};
