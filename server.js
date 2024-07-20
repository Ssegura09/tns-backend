const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to mongo:', process.env.MONGO_URI);
  })
  .catch((error) => {
    console.error('Error connecting to mongo:', error);
  });

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())


// ROOT
app.get('/', (req, res) => res.json({ message: 'Hello World' }))

// CONTROLLERS
const usersController = require('./controllers/users_controller')
app.use('/users', usersController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})
