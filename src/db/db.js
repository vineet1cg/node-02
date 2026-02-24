const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
async function connectDB (){

    if(await mongoose.connect(uri)){
        console.log("MongoDB Connected");
    }
}
module.exports = connectDB;