const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SubjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    period:{type:mongoose.Types.ObjectId, ref:'Period'},
    
    classTeams:[
        {type:mongoose.Types.ObjectId, ref:'ClassTeam'}
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

//registra o plugin de paginação
SubjectSchema.plugin(mongoosePaginate);

mongoose.model('Subject', SubjectSchema)