const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./app/model/model')

//Sync db
db.sequelize.sync()
  .then(() => {
    console.log('Database synced successfully')
  }).catch((err) => {
    console.log('Error', err)
  })

app.get('/', (req, res) => {
  res.send({ message: 'Hello World' })
})

const router = require('./app/routes/routes')
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`App is listening in port ${PORT}`);
});