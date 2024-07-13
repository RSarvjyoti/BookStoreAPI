const express = require('express');
const connectMongo = require('./configs/mongodb');
const mysqldb = require('./configs/mysqldb');

require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 9080
const MONGO_URL = process.env.MONGO_URL

app.get('/', (req, res) =>{
    res.send('This is home route');
})

app.listen(PORT, async () =>{
    try{
        await connectMongo(MONGO_URL);
        await mysqldb();
        console.log("Mongo connected successfully!");
        console.log(`Server is runing at port http://localhost:${PORT}`);
    }catch(err){
        console.log(err);
    }
})
