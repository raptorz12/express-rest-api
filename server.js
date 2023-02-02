const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())

const db = require('./app/model/model')
db.sequelize.sync()
  .then(() => {
    console.log('Database synced successfully')
  }).catch((err) => {
    console.log('Error', err)
  })

app.listen(PORT, () => {
  console.log(`App is listening in port ${PORT}`);
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})
