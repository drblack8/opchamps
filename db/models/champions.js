'use strict';
module.exports = (sequelize, DataTypes) => {
  const Champions = sequelize.define('Champions', {
    id: DataTypes.STRING,
    key: DataTypes.INTEGER,
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    blurb: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  Champions.associate = function(models) {
    // associations can be defined here
  };
  return Champions;
};
