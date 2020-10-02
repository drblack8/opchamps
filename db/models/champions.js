'use strict';
module.exports = (sequelize, DataTypes) => {
  const Champions = sequelize.define('Champions', {
    key: DataTypes.INTEGER,
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    blurb: DataTypes.TEXT,
    image: DataTypes.STRING,
    pos: DataTypes.STRING,
    reg: DataTypes.STRING,
    lore: DataTypes.TEXT,
  }, {});
  Champions.associate = function(models) {
    // associations can be defined here
    Champions.hasMany(models.Comment, { foreignKey: 'championId' });
  };
  return Champions;
};
