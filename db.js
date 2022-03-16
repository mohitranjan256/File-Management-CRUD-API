const mongoose=require('mongoose');
const mongodb = require('mongodb')
const mongoURI="mongodb://localhost:27017/file-management?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connecttOMongo=async()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to MongoDB");
    })
}
module.exports=connecttOMongo;