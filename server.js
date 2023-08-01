//import libraries
require("dotenv").config()
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
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG)

// Events for when connection opens/disconnects/errors
mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("error", (error) => console.log(error))

app.use(express.json());
app.use(routes);