const mongoose = require('mongose');

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    images:[
        {
            type:String,
            required:true
        }
    ],
    color:{
        type:String,
        required:true
    }
})

exports.Category = mongoose.model('Category', categorySchema);