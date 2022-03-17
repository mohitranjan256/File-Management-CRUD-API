const mongoose=require('mongoose');
const mongodb = require('mongodb')

const atlasURL =process.env.ATLAS_URL;
const connecttOMongo=async()=>{
    mongoose.connect(atlasURL,()=>{
        console.log("Connected to MongoDB");
    })
}
module.exports=connecttOMongo;
