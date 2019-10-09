//importing modules
var express = require('express'); 
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
var server=require('http').createServer(app);


//adding middleware
app.use(cors());
//body-parser
app.use(bodyparser.json());




const route=require('./app/routes');
app.use('/api',route);



//connector to mongodb
mongoose.connect('mongodb://localhost:27017/Nexential');
//on connection
mongoose.connection.on('connected',()=>{
console.log("mongo db connected at port 27017");
})
//on connection error
mongoose.connection.on('error',(err)=>{
console.log(err);
})
//declaring the port number
const PORT = 1552;
app.get('/',(req,res)=>{
res.send("working");
})
server.listen(PORT,()=>{
console.log("Server has been started at post: "+PORT);
})