const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const connectionMongodb = require('./db');
const PORT = process.env.PORT || 5000
connectionMongodb();

const app = express();


app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use("/",require('./routes'))


app.listen(PORT, () => console.log('Server is Running on port '))
