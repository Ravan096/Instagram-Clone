const express= require('express');
const { register,loginUser, resetPassword,getUser } = require('../controller/userController');



const router= express.Router();




router.route("/register").post(register);
router.route("/login").get(loginUser);
router.route("/resetpassword").get(resetPassword);
router.route("/user/:id").get(getUser);
  




module.exports= router;