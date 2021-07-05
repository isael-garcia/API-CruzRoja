const mongoose = require('mongoose');
const Schema = mongoose.Schema

const doctorSchema = new Schema({

    name: "String",
    age: Number,
    status: Boolean,
    },
    {
    spreciality: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'speciality'
    }]    
    },
    {
        timestamps:true,
    })

const doctorModel = mongoose.model('doctor', doctorSchema)
module.exports = {doctorModel, doctorSchema}