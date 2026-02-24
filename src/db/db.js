const mongoose = require('mongoose');
const uri =
  "mongodb+srv://vineetprajapaticg_db_user:iGf5gzfcE0DLpSRn@cluster0.ogsbpzm.mongodb.net/mern";
async function connectDB (){

    if(await mongoose.connect(uri)){
        console.log("MongoDB Connected");
    }
}
module.exports = connectDB;