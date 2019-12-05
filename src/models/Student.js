const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    classTeams:[
        {type:mongoose.Types.ObjectId, ref:'ClassTeam'}
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

//registra o plugin de paginação
StudentSchema.plugin(mongoosePaginate);

mongoose.model('Student', StudentSchema)