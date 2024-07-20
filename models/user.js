// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const userSchema = new Schema({
    name: { type: String, required: true }
})

// model and export 
const User = mongoose.model('User', userSchema)
module.exports = User