const express= require('express');
const { register,loginUser, resetPassword } = require('../controller/userController');



const router= express.Router();




router.route("/register").post(register);
router.route("/login").get(loginUser);
router.route("/resetpassword").get(resetPassword);




module.exports= router;