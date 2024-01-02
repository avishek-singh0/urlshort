const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

const userschema = new mongoose.Schema({

name:{
    type:String
},
email:{
    type:String,
    required: true,
    unique: true,
},
password:{
    type:String
}

},{timestamps:true});



userschema.pre('save',async function(next){

    //Only run this fun passwor is modifed
    if(!this.isModified('password')) return next();  //call nextt middleware ,pre-> in between the doc

//Hash the passord with cost of 12
    this.password = await bcrypt.hash(this.password,12)
//delet pasdconf 
    this.passwordConfirm = undefined;
    next();

})

userschema.methods.correctPassword =  async function(candidatePassword,userPassword) {
    return await bcrypt.compare(candidatePassword,userPassword);
}


userschema.methods.changedPasswordAfter = function(JWTTimestamp) {
    if (this.passwordChangedAt) {
      const changedTimestamp = parseInt(
        this.passwordChangedAt.getTime() / 1000,
        10
      );
  
      return JWTTimestamp < changedTimestamp;
    }
  
    // False means NOT changed
    return false;
  };


const User = mongoose.model('user',userschema);


module.exports = User
