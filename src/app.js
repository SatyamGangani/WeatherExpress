const express = require("express");
const app = express();
const requests = require("requests");
const path = require("path");
const hbs = require("hbs");
const viewsPath = (path.join(__dirname,"../public/views"))
const partialsPath = (path.join(__dirname,"../public/partials"))
const staticPath = (path.join(__dirname,"../"));
app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",viewsPath);
hbs.registerPartials(partialsPath);
app.get('/',(req,res)=>{
    res.render("index");
})
app.get('/weather',(req,res)=>{
    requests("http://api.weatherapi.com/v1/current.json?key=5927a041178f4636acd135258222606&q=London&aqi=yes").on("data",(chunk)=>{
        console.log(JSON.parse(chunk));
        res.send(chunk)
    })
    // res.send("Hey...")
})
app.get("*",(req,res)=>{
    res.render('errorPage');
})

app.listen(5500,()=>{
    console.log("listening on 5500");
})
