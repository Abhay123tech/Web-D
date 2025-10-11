// let n=5;
// for(let i=0; i<n; i++) {
//     console.log("hello", i);
// }
// console.log("bye");


// let args = process.argv;

// for(let i=2; i<args.length; i++){ //we ignore two value 1st executable path of node , 2) path of current file
//     console.log("hello to", args[i]);
// }



//if script.js want to used some value of math.js then it is used to write require keyword
// const someValue = require("./math");  //script.js folder acquire math.js folder  
// console.log(someValue);


//jb math.js kuch bhee export na kre aur hm unhe require kr lete h to {} output detta h


// const math =require("./math");

// console.log(math);
// console.log(math.sum(2,2));
// console.log(math.PI);



// //to acquire directory /folder  whose name is fruit we used in script.js file
// const info = require("./fruits");  //pure folder ko require kr rhe whose name is fruit

// console.log(info[0].name);


import {sum ,PI} from "./math.js";
import {generate} from "random-words";

console.log(generate());


// console.log(sum(1,2));
// console.log(PI);