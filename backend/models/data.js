const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    id: String,
    date: String,
    time: String,
    item: String,   
    duration: String,
    imageurl: String
    
})

const DataModel = mongoose.model("users", DataSchema)
module.exports = DataModel;