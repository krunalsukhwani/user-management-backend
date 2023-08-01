//import libraries
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var routes = require('./routes/routes');
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:4200"
}));

//start server
app.listen(4000, function check(error){
    if(error){
        console.log("Error");
    }else{
        console.log("Server Started");
    }
});

//connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://krunalsukhwani:FuMAiuIkmGPEpebP@cluster0.eshxs89.mongodb.net/incident",{useNewUrlParser: true, useUnifiedTopology: true}, 
function checkMongoDBConnection(error){
    if(error){
        console.log("Error in MongoDB Connection");
    }else{
        console.log("Connected to MongoDB");
    }
});

app.use(express.json());
app.use(routes);