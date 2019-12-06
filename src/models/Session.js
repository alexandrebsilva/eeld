const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const SessionSchema = new mongoose.Schema({
    classTeam:{
        type:String,
        required:true
    },
    teacher:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    periodo_id:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

//registra o plugin de paginação
SessionSchema.plugin(mongoosePaginate);

mongoose.model('Session', SessionSchema)