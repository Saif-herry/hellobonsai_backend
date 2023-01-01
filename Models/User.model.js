const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:{type:String,required:true},
    fullname:{type:String,required:true},
    password:{type:String,required:true},
    country:{type:String,required:true},
    currency:{type:String,required:true}
})

const UserModel = mongoose.model('user',UserSchema)

module.exports = UserModel