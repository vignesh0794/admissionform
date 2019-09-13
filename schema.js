var mongoose=require('mongoose')
var student=mongoose.model('student1',{
    name:{
        type: String
    },
    email:{
        type: String,
    },
    gender:{
        type: String,
    },
    phoneNumber:{
        type: Number,
    },
    country:{
        type: String,
    },
    state:{
        type: String,
    },
    city:{
        type: String,
    },
    percentage:
    {
        type: Number,
    },
    physicsMark:
    {
        type:Number,
    },
    mathsMark:
    {
        type:Number,
    },
    chemistryMark:
    {
        type:Number,
    },
    computerSciencemark:
    {
        type:Number,
    }
})
module.exports={student};