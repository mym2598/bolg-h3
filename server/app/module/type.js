const mongoose = require('./db')

let TypeSchema = mongoose.Schema({
    _id:Number,
    name:String
})

let Type = mongoose.model('Type',TypeSchema,'Type')
module.exports = Type
