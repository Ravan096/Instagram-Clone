import { Strategy as LocalStretegy } from 'passport-local';
const User= require('../models/userModel')




exports.initializingPassport = (passport)=>{
  passport.use(new LocalStretegy(
    function async(username, password, done) {
     try {
      const user= User.findOne({ username: username });
       if(!user){
        return done(null, false)
       }
       if(user.password !== password){
        return done(null, false)
       }
       return done(null, user)
     } catch (error) {
      return done (error,false)
     }
    }
  ));
  
  passport.serializeUser((user,done) =>{
    done(null,user.id)
  });

  passport.desirializeUser( async (id,done)=>{
    try {
      const user= await User.findById(id);
      done(null,user)
    } catch (error) {
      done(error,false)
    }
  })
}


