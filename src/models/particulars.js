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


module.exports = model('particulars', particularsSchema)