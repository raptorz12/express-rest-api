const db = require('../model/model')
const Heroes = db.heroes
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

  //Create hero object to store body request
  const hero = {
    fullName : req.body.fullName,
    aliasName : req.body.aliasName,
    quirk : req.body.quirk,
    affiliation: req.body.affiliation,
    age: req.body.age
  }

  //Insert hero data into database
  Heroes.create(hero)
  .then(data => {
    res.status(200).send({
      message: 'Hero data successfully inserted!',
      data,
    })
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Hero data failed to be inserted!'
    })
  })
}

//Get all heroes data
const getAllHeroes = (req, res) => {
  Heroes.findAll()
  .then(data => {
    res.status(200).send({
      message: 'Heroes data found!', 
      data
    })
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Heroes data could not be retrieved!'
    })
  })
}

//Get hero data by id
const getHeroById = (req, res) => {
  //Get id from params
  const id = req.params.id

  //Find hero data based on id
  Heroes.findByPk(id)
  .then(data => {
    if (data) {
      res.status(200).send({
        message: 'Hero data found!',
        data
      })
    } else {
      res.status(404).send({
        message: `Hero data not found, no hero with id ${id}!`
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Hero data could not be retrieved!'
    })
  })
}

//Update hero data
const updateHero = (req, res) => {
  //Get id from params
  const id = req.params.id
  
  //Create hero object to store body request
  const hero = {
    fullName: req.body.fullName,
    aliasName: req.body.aliasName,
    quirk: req.body.quirk,
    affiliation: req.body.affiliation,
    age: req.body.age
  }

  Heroes.update(hero, {
    where: {id: id}})
  .then(data => {
    if(data == 1) {
      res.status(200).send({
        message: 'Hero data successfully updated!',
      })
    } else {
      res.status(404).send({
        message: `Hero data failed to be updated, no hero with id ${id}!`
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: err || 'Hero data failed to be updated!'
    })
  })
}

//Delete hero data
const deleteHero = (req, res) => {
  //Get id from params
  const id = req.params.id

  Heroes.destroy({where: {id: id}})
  .then(data => {
    if(data == 1) {
      res.status(200).send({
        message: 'Hero data successfully deleted!'
      })
    } else {
      res.status(404).send({
        message: `Hero data failed to be deleted, no hero with id ${id}!`
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: 'Hero data failed to be deleted!'
    })
  })
}

module.exports = {
  createHero,
  getAllHeroes,
  getHeroById,
  updateHero,
  deleteHero
}