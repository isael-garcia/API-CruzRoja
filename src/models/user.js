const { Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new Schema({
    name: {type:String, required:true},
    email:{type:String, required:true, index:{unique:true}},
    password:{type:String, required:true},
},{
    timestamps:true,
})

userSchema.methods.encryptPassword = async password => {
   const salt =  await bcrypt.genSalt(10)
   return await bcrypt.hash(password, salt)
}

userSchema.metods.matchPassword = function(password){
    return await bcrypt.compare(password, this.password)
}

const userModel = mongoose.model('user', userSchema)
module.exports = {userSchema, userModel}