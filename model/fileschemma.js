const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config')
// const Schema = mongoose.schema

const filesschema = new mongoose.Schema ({

    Name : {
        type : String,
        required :  true
    },

    File_Name : {
        type : String,
        required : true
    },
    File_Location:{
        type : String
    }
},{Timestamp: true})

const files = mongoose.model('Files',filesschema)
module.exports = files

