const express = require ("express");
const app = express();
const path =require("path");

const port =8080;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username",(req,res)=>{
    let {username} =req.params;
    const instaData = require("./data.json");  //it require json data 
    const data=instaData[username];
    console.log(data);
    res.render("instagram.ejs", {data});  //best formate of rander of data is to send data which are come from database
});

app.get("/", (req, res)=>{
    res.render("home.ejs"); //express apne aap by default  view wale folder dhoondata h 
})

app.get("/hello", (req, res)=>{
    res.send("hello"); 
})

app.get("/rolldice", (req, res)=>{
    let diceVal =Math.floor(Math.random()*6) + 1 ; //a random value is come from database
    res.render("rolldice.ejs", {diceVal});//pass  2nd value as an object  
    // we render it and pass the same data
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})