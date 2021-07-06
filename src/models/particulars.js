const {Schema, model} = require('mongoose')

 const particularsSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    age: {
        type:Number,
        required:true,
    },
    sex: {
        type:String,
        required:true,
    },
    },{
        //created at, updated at
       timestamps: true, 
    })

const particularsModel = mongoose.model('particulars', particularsSchema)
module.exports = {particularsSchema, particularsModel }