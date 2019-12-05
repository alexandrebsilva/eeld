const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const ClassTeamSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    students:[
        {type:mongoose.Types.ObjectId, ref:'Student'}
    ],

    teacher:{type:mongoose.Types.ObjectId, ref:'Teacher'},

    createdAt:{
        type:Date,
        default:Date.now
    }

})

//registra o plugin de paginação
ClassTeamSchema.plugin(mongoosePaginate);

mongoose.model('ClassTeam', ClassTeamSchema)