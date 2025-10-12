const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static( path.join(__dirname, "public")));

let posts = [
    {
        id: "1a",
        username : "apnacollage",
        content : "i love coding",
    },
    {
        id: "2b",
        username : "shraddhakhapra",
        content : "hard work is important to achive success",
    },
    {
        id: "3c",
        username : "Abhay jaiswal",
        content : "Consestency is a key which is open any door of success",
    },
]

app.get("/posts", (req, res)=> {
    res.render("index.ejs", {posts});  //here posts is array
});

app.get("/posts/new", (req, res) =>{ //get request me paremeter or querry ke andar information aati h
    res.render("new.ejs");
});

app.post("/posts", (req, res) =>{  //post me body ke andar information aati hai
    let {username, content}= req.body;
    posts.push({username, content})
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) =>{  
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.send("request working");
});

app.listen(port, ()=> {
    console.log("listening to port : 8080");
});
