'use strict';
module.exports = (sequelize, DataTypes) => {
  const Champions = sequelize.define('Champions', {
    key: DataTypes.INTEGER,
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    blurb: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Champions.associate = function(models) {
    // associations can be defined here
  };
  return Champions;
};
