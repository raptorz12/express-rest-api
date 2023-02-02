const db = require('../model/model')
const Heros = db.heros
const Op = db.Sequelize.Op

//Create hero data
const createHero = (req, res) => {
  //Validate request
  if (!req.body.fullName) {
    res.status(400).send({ 
      message: 'Full name cannot be empty!' 
    })
    return
  }

  //Create hero object based on request
  const hero = {
    fullName : req.body.fullName,
    aliasName : req.body.aliasName,
    quirk : req.body.quirk,
    affiliation: req.body.affiliation,
    age: req.body.age
  }

  //Insert hero data into database
  Heros.create(hero)
  .then(data => {
    res.status(200).send({
      message: 'Hero data inserted',
      data,
    })
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Hero data failed to inserted'
    })
  })
}

//Get all heros data
const getAllHeros = (req, res) => {
  Heros.findAll()
  .then(data => {
    res.status(200).send({
      message: 'Heros data found', 
      data
    })
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Heros data could not be retrieved'
    })
  })
}

//Get hero data by id
const getHeroById = (req, res) => {
  const id = req.params.id

  Heros.findByPk(id)
  .then(data => {
    if (data) {
      res.status(200).send({
        message: 'Hero data found',
        data
      })
    } else {
      res.status(404).send({
        message: 'Hero data not found'
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: err || 'Error retrieving hero data'
    })
  })
}

const updateHero = (req, res) => {
  const id = req.params.id
  
  const hero = {
    fullName: req.body.fullName,
    aliasName: req.body.aliasName,
    quirk: req.body.quirk,
    affiliation: req.body.affiliation,
    age: req.body.age
  }

  Heros.update(hero, {
    where: {id: id}})
  .then(data => {
    if(data == 1) {
      res.status(200).send({
        message: 'Hero data updated',
      })
    } else {
      res.status(404).send({
        message: 'Hero data failed to be updated'
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: err || 'Failed updating hero data'
    })
  })
}

const deleteHero = (req, res) => {
  const id = req.params.id

  Heros.destroy({where: {id: id}})
  .then(data => {
    if(data == 1) {
      res.status(200).send({
        message: 'Hero data deleted successfully'
      })
    } else {
      res.status(404).send({
        message: 'Hero data failed to be deleted'
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: 'Hero data failed to be deleted'
    })
  })
}

module.exports = {
  createHero,
  getAllHeros,
  getHeroById,
  updateHero,
  deleteHero
}