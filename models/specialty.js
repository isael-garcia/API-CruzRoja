const mongoose = require('mongoose');
const Schema = mongoose.Schema

const specialitySchema = new Schema ({
    name: String,
    description: String,
    status: Boolean,
},{
    timestamps: true
}
) 
 const specialityModel = mongoose.model('speciality', specialitySchema)
 module.exports = {specialitySchema, specialityModel}