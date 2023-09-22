
const dotenv= require('dotenv');
const app= require('./app');
const connectDatabase = require('./config/connectDatabase');

// dotnet env config

dotenv.config({path:'./backend/config/config.env'})
// connect database
connectDatabase();




app.listen(process.env.Port, ()=>{
    console.log(`server is running on http://localhost:${process.env.Port}`);
})