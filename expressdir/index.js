// here express is act as a server

const express = require('express')
const app = express() //ye app hamera server site wali app create krne me help krta h//here app is object

console.dir(app);

let port=8080;

app.listen(port, () => {
    console.log(`port is listening on port ${port}`);
});


// path parameters
app.get("/", (req,res) => {
    res.send("you contacted root path");
});

app.get("/:username/:id", (req,res) => {
    let{ username, id} = req.params;
    res.send("you contacted root path");
});


//query String
app.get("/search", (req ,res) => {
    let {q}= req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>")
    }
    res.send(`these  are the search resut for query: ${q}`);
})


// //routing concept
// app.get("/", (req,res) => {
//     res.send("you contacted root path");
// });

// app.get("/apple", (req,res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req,res) => {
//     res.send("you contacted orange path");  
// });
  //at a time for same path pas only one response eg get



// app.use((req,res)=> {
//     // console.log(req);
//     console.log("req recived");  //those request which are come at port 8080 this can print here
//     // res.send("this is the basic response");

//     // res.send({
//     //     name:"apple",
//     //     color:"red",
//     // })
// // it</h1><ul><li>apple</li><li>banana</li></ul>";
// //     res.send(code);
// });