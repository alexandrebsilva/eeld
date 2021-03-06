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

    sessions:[
        {type:mongoose.Schema.Types.ObjectId, ref:'SessionSchema'}
    ],
    
    createdAt:{
        type:Date,
        default:Date.now
    }
})

//registra o plugin de paginação
PeriodSchema.plugin(mongoosePaginate);

mongoose.model('Period', PeriodSchema)