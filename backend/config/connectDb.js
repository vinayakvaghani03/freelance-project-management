const mongoose = require('mongoose');

const connectDb = async()=>{
    await mongoose.connect(process.env.DB_URL)
    .then(()=>console.log("connected to DB"));
}

module.exports= connectDb