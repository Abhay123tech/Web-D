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
        await mongoose.connect("mongodb://127.0.0.1:27017/test");
    }

        // schema
    const userSchema = new mongoose.Schema({
        name:String,
        email:String,
        age:Number,
    });

    // models->mongoose ke model hamere js ke classes hote h
const User = mongoose.model("User", userSchema);
// const employee = mongoose.model("employee", userSchema);


// DELETE
User.deleteOne({age: 48}).then((res) => {
    console.log(res);
});

User.deletemany({age: 48}).then((res) => {
    console.log(res);
});

User.findByIdAndDelete("691074871a16e038011eb4b5").then((res) => {
    console.log(res);
});


User.findOneAndDelete( "tony@gmail.com").then((res) => {
    console.log(res);
});




//UPDATE
User.updateOne({name: "bruce"}, {age: 49}).then((res)=>{//bruce name ke age ko update kr dega
    console.log(res);
}).catch((err)=>{
    console.log(err)
});


// // FIND
// User.find({_id: "691074871a16e038011eb4b4"})  //we apply condition here
// .then((res)=>{
//     console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// })


// Insert multiple->in case of rear we use it other wise we use insert one
// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50 },
//     {name: "peter", email: "peter@gmail.com", age: 30 },
//     {name: "bruce", email: "bruce@gmail.com", age: 47 }, //ye insertmany function call hmee promise return krega
// ]).then((res)=>{
//     console.log(res);
// });


// insert one
// const user1= new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48,
// });

// const user2= new User({
//     name: "eve",
//     email: "eve@yahoo.in",
//     age: 48,
// });

// user1.save();//ishh se cheeje save ho jati h (id)


// // promise
// user2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
