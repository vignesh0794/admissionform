const express=require('express')
var mongoose=require('mongoose')
var bodyParser=require('body-parser')
var cors = require('cors')
const app=express();
var {student}=require('./schema.js');
mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost:27017/student',{ useNewUrlParser: true });
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.post('/studentdata',function(req,res){
    console.log(req.body)
    var studentData=req.body
    var student1= new student(studentData)
    student1.save().then(function(data){
        res.json({
            message:"success"
        })
    }).catch(function(err){
        res.status(500).json({
            message:"Error"
        })
    })
})
app.put('/updatestudentdata/:id',function(req,res)
{
    student.findById(req.params.id).then(function(studentData)
    {
        console.log(studentData)
        studentData.name="snake Babu"
        studentData.save().then(function(savedstudentData)
        {
            console.log("success")
            res.json(studentData)
        })
        
    }).catch(function(err)
    {
        console.log(error)
    })
})
app.get('/studentdata',function(req,res){
    student.find().then(function(studentData){
        res.json(studentData)
        console.log(studentData)
    }).catch(function(err){
        res.status(500).json({
            message:"error"
        })
    })
}
)
app.listen(3000)