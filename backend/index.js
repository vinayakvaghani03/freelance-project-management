const express = require ('express');
const app = express();
const dotenv= require('dotenv').config()
const connectDb = require ('./config/connectDb')
const cors = require('cors')
const projectRoute = require ('./routes/project')

const PORT = process.env.PORT || 8080;
connectDb();

app.use(cors());
app.use(express.json());


app.use('/api', projectRoute);


app.listen(PORT , (err)=>{
    console.log(`app is running on ${PORT}`);
})