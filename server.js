const express = require('express');
const app = express();

// used to parse req.body in express -> PUT,POST
const bodyParser = require('body-parser');

// specifically parse JSON data & add it to the req.body object
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myNewDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connection successful");
})
.catch((error)=>{console.log("Received an error")});

//creating the route
app.get('/',(req,res)=>{
    res.send(`Hello! Jee Kaise Ho Saare...`);
});


// to send new data from the client to server
app.post('/api/cars',(req,res)=>{
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send(`data received succesfully!`);
})



// start the server
app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`);
});