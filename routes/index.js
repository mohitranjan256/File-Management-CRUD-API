const express=require('express');
const router=express.Router();
const upload = require('../middleware/upload')
router.get('/' ,(req,res) =>{

    res.send("Hello is a freindly backend server");

})

router.use('/upload',require("./fileupload"))
router.use('/getdetail',require('./filesdetail'))
router.use('/download', require('./filedownload'))
router.use('/update',require('./fileupdate'))
router.use('/delete',require('./filedelete'))

module.exports = router;