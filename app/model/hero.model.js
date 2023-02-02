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
    Quirk: {
      type: DataTypes.STRING
    },
    Affiliation: {
      type: DataTypes.STRING,
    },
    Age: {
      type: DataTypes.INTEGER,
    }
  })

  return Heros
}