const express = require('express');
const routes = express.Router();
const files = require('../model/fileschemma');

routes.get('/',async(req,res)=>{

    try{
        const filelist = await files.find({})
        res.send(filelist)

    }catch(err){
        res.send("Cannot get List of All files..!")
    }
})

module.exports = routes