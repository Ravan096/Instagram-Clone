const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const sendMail = require('../utils/sendMail');







exports.register = async (req,res,next)=>{
    const {email,username,name,password,role}= req.body;
    const newuser= await User.create(
        {
        email,
        username,
        name,
        password,
        role
    });
     res.status(201).json({
        success:true,
        newuser
     })
}



exports.loginUser = async(req, res, next)=>{
    const {email,password}= req.body;
    if(!email || !password){
        return next("invalid email or password")
    }

    const user= await User.findOne({email}).select(+password);
    if(!user){
        return next(res.status(400).json({
            success:false,
            message:"invalid user or password"
        }))
    }
    const ispasswordMatched= user.comparePassword(password);
    if(!ispasswordMatched){
        return next(cre)
    }
    res.status(201).json({
        success:true,
        user
    })
}

exports.resetPassword = async (req,res,next)=>{
    const {email}= req.body;
    if(!email){
        res.status(400).json({
            success:false,
            message:"email not found"
        })
    }
    const user =await User.findOne({email});
    if(!user){
        res.status(404).json({
            success:false,
            message:"invalid user"
        })
    }
    await sendMail({
        email:user.email,
        subject:`Reset your password `,
        message:`Dear ${user.name} We have received your request to reset your password for your account.`
    });

    res.status(200).json({
        success:true,
        message:`mail send successfully to ${user.name} on ${user.email}`
    })
}










// exports.register = async (req,res,next)=>{
//     const {email,username,name,password,role}= req.body;
    // var hashx = await bcrypt.hash(password, 12).then(function(hash) {
    //     console.log(hash);
    //     return hash
    // });
    // password=hashx;

//     const newuser= await User.create(
//         {
//         email,
//         username,
//         name,
//         password,
//         role
//     });
//      res.status(201).json({
//         success:true,
//         newuser
//      })
// }


 

