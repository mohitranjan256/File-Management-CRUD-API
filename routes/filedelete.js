const express = require('express')
const routes = express.Router()
const files = require('../model/fileschemma');
const path = require('path');
const { unlinkSync } = require('fs');


routes.get('/:id', async(req,res)=>{
    const downloadid = req.params.id
    try{
        const downloadfile = await files.findById(downloadid)
        const filepath = path.join(__dirname,"../Images",downloadfile.Filename)
        if(!filepath){
            res.send("There is no such file to Delete..")
        }
        else{
            const removefile = await unlinkSync(filepath)
            res.send("File Deleted Succesfully..")

        }

    }
    catch(err){
        res.send("File Cannot be Deleted !! ")
    }
})

module.exports = routes