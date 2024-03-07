const cloudinary= require('cloudinary');

 const cloudinaryconnect =()=>{
              cloudinary.config({ 
              cloud_name: 'djcni3ioh', 
              api_key: '162662936138583', 
              api_secret: 'dZtGgc4bEZF-BXXxas5R8jaiUWM' 
            });
 }

module.exports= cloudinaryconnect;