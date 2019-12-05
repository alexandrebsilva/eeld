const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const PeriodSchema = new mongoose.Schema({
    order:{
        type:Number,
        required:true
    },

    beginTime:{
        type:String,
        required:true
    },

    finishTime:{
        type:String
    },

    classTeams:[
        {type:mongoose.Schema.Types.ObjectId, ref:'ClassTeam'}
    ],
    
    teacher:{type:mongoose.Schema.Types.ObjectId, ref:'Teacher'},

    subject:{type:mongoose.Schema.Types.ObjectId, ref:'Subject'},
    
    createdAt:{
        type:Date,
        default:Date.now
    }
})

//registra o plugin de paginação
PeriodSchema.plugin(mongoosePaginate);

mongoose.model('Period', PeriodSchema)