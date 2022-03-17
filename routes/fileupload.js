const express = require('express');
const routes = express.Router();
const files = require('../model/fileschemma');
const upload = require('../middleware/upload');

routes.post("/",upload.single('fileImage') , async(req,res)=>{

        try {
            if(req.file){
                const filedetail = await files.create({Name : req.body.Name , File_Name : req.file.filename , File_Location : req.file.destination})

                res.send("File Uploaded successfully")
            }
        }
        catch(err) {
            res.send(err)
        }
      
}
)

module.exports = routes
