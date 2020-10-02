'use strict';
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    title: {
      type: DataTypes.string,
      allowNull: false
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {});
  Region.associate = function(models) {
    // associations can be defined here
  };
  return Region;
};
