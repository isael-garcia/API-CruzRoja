const mongoose = require('mongoose');
const Schema = mongoose.Schema

const patientSchema = new Schema({
    name: String,
    edad: Number,
    sexo: String,},
    {
        timestamps:true
    })

const patientModel = mongoose.model('patient', patientSchema)
module.exports = {patientSchema, patientModel}