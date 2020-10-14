const express = require('express')
const http = require('http')
const app = express();
const fs = require('fs')

/********************/

app.get('/',(req,res)=>{

    res.send("welcome to node..")

})

app.get('/aboutus',(req,res)=>{

    res.send({
        "name":"samir",
        "email":"samir@gmail.com"
    })
})

app.get('/users',(req,res)=>{

    res.send([1,3,4,5,7,8])
})
app.get('/userdata',(req,res)=>{
    res.send([
    {
        "name":"jay",
        "email":"jay@gmail.com",
        "age":20
    },
    {
        "name":"jay",
        "email":"jay@gmail.com",
        "age":20
    },
    {
        "name":"jay",
        "email":"jay@gmail.com",
        "age":20
    }
])
})


/**
 * @getmapping(value "/") 
 * public String home(){
 *  
 * return "welcomw to spring.."
 * }
 * 
 */ 
const dataBuffer = fs.readFileSync('user.json') //json array..


app.get('/jsonuser',(req,res)=>{

    res.send(JSON.parse(dataBuffer))
})





var port = 3000;
app.set('port',port);
var server = http.createServer(app);
 /* app.listen(3000,()=>{
    console.log("server is up on port 3000")
})  */

server.listen(port,()=>{
    console.log("server is running on port ",port)
})