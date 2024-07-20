const express = require('express')
const users = express.Router()
const User = require('../models/user')

//Index GET
users.get('/', (req, res) => {
    User.find()
    .then(foundUsers => {
        res.json(foundUsers)
    })
    .catch(err => {
        res.status(500).json({ error: 'An error occurred while fetching users'})
    })
})

module.exports = users