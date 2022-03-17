const express = require('express')
const routes = express.Router()
const files = require('../model/fileschemma');
const path = require('path');
const fs = require('fs');
const upload = require('../middleware/upload');



routes.put('/:id',upload.single('fileImage'), async(req,res)=>{
    try{
        const downloadid = req.params.id
        const downloadfile = await files.findById(downloadid)
        const filepath = path.join(__dirname,"../Images",downloadfile.Filename)
        if(fs.existsSync(filepath) && req.file){
            const removefile = await fs.unlinkSync(filepath)
        }
        
        
            if(req.file){
            const filedetail = await files.findByIdAndUpdate( downloadid ,{$set :{Name : req.body.Name , File_Name : req.file.filename , File_Location : req.file.destination}},{new : true})
                    
            return res.send("File Updated successfully")
        }   else{
            return res.send("Please select file")
        }

    }
        catch(err){
            console.log(err)
           return res.send("File Cannot be Updated !! ")
            
        }
    })

module.exports = routes
