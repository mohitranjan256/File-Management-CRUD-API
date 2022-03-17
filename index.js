const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const connectionMongodb = require('./db');

connectionMongodb();

const app = express();
const PORT = 2929;

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use("/",require('./routes'))


app.listen(PORT, () => console.log('Server is Running on port '))
