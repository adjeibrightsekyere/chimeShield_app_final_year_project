const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirmPassword: String
})

const EmployeeModel = mongoose.model("signup", EmployeeSchema)
module.exports = EmployeeModel