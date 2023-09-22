const mongoose = require('mongoose');


const connetDatabase= ()=>{
mongoose.connect(process.env.DataUri, { useNewUrlParser: true, useUnifiedTopology: true, family:4 })
.then((data) => console.log(`MongoDb is connect with server: ${data.connection.host}`))
  .catch(err => console.log('MongoDB connection error:', err));

}


module.exports = connetDatabase;