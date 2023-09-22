const mongoose = require('mongoose');
const validator= require('validator');
const bcrypt = require('bcryptjs')


const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        validator:[validator.isEmail,"Please enter valid email"],
        unique:true
    },
    username:{lowercase: true,
        unique: true,
         required: true,
        //  match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        //  index: true,
        type:String,
        maxLength:[30, 'Name can not exceed more than 30'],
        minLength:[4, 'Name should less than 4 letter']
    },
    name:{
        type:String,
        required:true,
        maxLength:[30, 'Name can not exceed more than 30'],
        minLength:[4, 'Name should less than 4 letter']
    },
    password:{
        type:String,
        required:true,
        select:false,
        minLength:[4,"Password must greater than 4 character"]
    },
    role:{
        default:"user",
        type:String
    },
})


userSchema.pre('save', function(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, 10);
    }
    next();
  });

  userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
    }


module.exports= mongoose.model("User",userSchema)