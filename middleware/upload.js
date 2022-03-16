const path = require('path')

const multer = require('multer');
const filelocation = path.join(__dirname,'../Images')
var storage = multer.diskStorage({
    
    destination : function(req,file,cb){
        cb(null,filelocation)       
    },
    filename : function(req,file,cb){
        console.log(file)
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + '--' + file.originalname)
    }

})

var upload = multer({
    storage : storage,
    limits : {
        fieldSize : 1024 * 1024 * 1024
    }
    
})

module.exports = upload