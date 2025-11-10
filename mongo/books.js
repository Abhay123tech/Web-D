const mongoose = require("mongoose");

//promise
// here we create the connection between javascript and monngodb
// process to establish connection
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err)=> console.log(err));

    async function main(){
        await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
    } 

    // new connection form krne se pahle hmee schema define krna parta h
    const bookSchema = new mongoose.Schema({
        title:{
            type: String,
            required: true,
        },
        author:{
            type: String,
        },
        price:{
            type:Number,
        },
    });


    // model name of books schema
    const Book =mongoose.model("Book", bookSchema);