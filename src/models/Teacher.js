const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TeacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

//registra o plugin de paginação
TeacherSchema.plugin(mongoosePaginate);

mongoose.model('Teacher', TeacherSchema)