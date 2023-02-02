const { DataTypes } = require("sequelize")

module.exports = (sequelize, Sequelize) => {
  const Heros = sequelize.define('Hero', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aliasName: {
      type: DataTypes.STRING,
    },
    quirk: {
      type: DataTypes.STRING,
    },
    affiliation: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    }
  })

  return Heros
}