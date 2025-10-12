const express = require("express");  //require the express
const app = express();
const port = 8080;

app.use(express.urlencoded({external: true }));//kishi bhe express ke andar agar urlencoder data aata h to express ushe pasre kr ke samjh lega

app.get("/register",(req,res)=> {
    let {user, password}= req.query;
    res.send(`Standard get response.welcome ${user}!`);
})

app.post("/register",(req,res)=> {
let {user, password}= req.body;
    res.send(`Standard post response.welcome ${user}!`);
})

app.listen(port,() =>{
    console.log(`listening to port ${port}`);
});