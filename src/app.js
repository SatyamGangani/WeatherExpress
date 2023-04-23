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
app.get("*",(req,res)=>{
    res.render('errorPage');
})

app.listen(process.env.PORT ||5500,()=>{
    console.log("listening on 5500");
})
