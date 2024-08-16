const express = require('express')
const app = express();
const fs = require('fs')
const data = require('./persons.js').persons;
const Port  = 5000;
var cors = require('cors')

console.log(data)
app.use(cors())


app.get('/api/v1/users/:username' , (req, res)=>{
        const username = req.params.username;
        console.log(username)
      const user =   data.filter(user=>user.username == username)
      if(user==[]){
            res.status(404).send({data:[] , message:"User does't exist "})
      }
        console.log("user" , user[0])
    res.status(200).send(user);




})
app.post('/api/v1/user/Authorization',(req, res)=>{

        console.log(req.body);
})
app.listen(Port,()=>{
    console.log(`app listening Port : ${Port}}`)
})