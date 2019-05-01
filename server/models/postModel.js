const mongoose = require('mongoose')
const schema = mongoose.Schema
const userScheme = new schema({name: String, age: Number}, {versionKey: false});
module.exports = mongoose.model("User", userScheme);