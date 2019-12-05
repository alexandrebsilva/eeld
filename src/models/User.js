const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const UserSchema = new mongoose.Schema({
    login:{
        type:String,
        required:true
    },
    senha:{
        type:String,
        required:true
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

})

mongoose.model('User', UserSchema)