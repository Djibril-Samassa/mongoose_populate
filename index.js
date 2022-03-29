const express = require("express");
const mongoose = require("mongoose");
const Student =  require("./models/studentModel");
const Adress = require("./models/adressModel");

const app = express();
app.use(express.json())

mongoose
    .connect("mongodb+srv://Djibril:Ds02072001@cluster0.qzfvb.mongodb.net/mongoose_populate?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    })
    .then(() =>{
        console.log("conncted to MongoDB");
})


