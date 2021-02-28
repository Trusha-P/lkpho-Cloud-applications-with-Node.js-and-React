const express = require('express');
const app = new express();

let loginDetails = [];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

const months = ["January", "February", "March"];
app.get("/fetch/:num",(req,res)=>{
    mon= parseInt(req.params.num);
    if(mon < 1 || mon > 3) {
        res.send("Error: Enter value between 1 and 3")
    } else {
        res.send(months[mon-1])
    }
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

