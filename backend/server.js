
const dotenv= require('dotenv');
const app= require('./app');
const connectDatabase = require('./config/connectDatabase');
const cloudinaryconnect=require('./config/cloudinary');


process.on("uncaughtException",(err)=>{
    console.log(`error:${err.message}`);
    console.log(`server is shutting down due to uncaught error`);
    process.exit(1);
})

// dotnet env config

dotenv.config({path:'./backend/config/config.env'})
// connect database
connectDatabase();
// connect cloudinary
cloudinaryconnect();




const server =app.listen(process.env.Port, ()=>{
    console.log(`server is running on http://localhost:${process.env.Port}`);
})


process.on("unhandledRejection",(err)=>{
    console.log(`error: ${err.message}`);
    console.log(`server is shutting down due to unhandled rejection`)
    server.close(()=>{
        process.exit(1)
    })
})