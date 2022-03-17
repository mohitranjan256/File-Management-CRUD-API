const express = require('express')
const routes = express.Router()
const files = require('../model/fileschemma');
const path = require('path')

routes.get('/:id', async(req,res)=>{
    
    try{
        const downloadid = req.params.id
        const downloadfile = await files.findById(downloadid)
        const filepath = path.join(__dirname,"../Images",downloadfile.File_Name)
        res.download(filepath)
        // console.log(downloadfile)

    }
    catch(err){
        res.send("File Cannot be Downloaded !! ")
    }
})

module.exports = routes
