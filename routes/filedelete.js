const express = require('express')
const routes = express.Router()
const files = require('../model/fileschemma');
const path = require('path');
const { unlinkSync } = require('fs');
const { findByIdAndDelete } = require('../model/fileschemma');
const fs = require('fs')


routes.get('/:id', async(req,res)=>{
    try{
        const downloadid = req.params.id
        const downloadfile = await files.findById(downloadid)
        const filepath = path.join(__dirname,"../Images",downloadfile.File_Name)
        if(fs.existsSync(filepath)){
            console.log("this point")
            const removefile = await fs.unlinkSync(filepath)
            const removeData = await files.findByIdAndDelete(downloadid)
            return res.send("File Deleted Successfully..")
        }
        

    }
        catch(err){
            console.log(err)
           return res.send("File Cannot be Updated !! ")
            
        }
    })


module.exports = routes
