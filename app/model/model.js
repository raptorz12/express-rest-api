const config = require('../config/index')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  pool: {
    min: config.pool.min,
    max: config.pool.max,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  }
})

const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.heroes = require('./hero.model')(sequelize, Sequelize)

module.exports = db