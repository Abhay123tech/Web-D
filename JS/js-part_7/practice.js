//Q-write an arrow function that returns a square of a number 'n'.
const square=(n) => n*n;
    console.log(square(25));

// Q-2write a function  that print "Hello World" 5 times at a intervals of 2s each
let id = setInterval(()=>{
    console.log("Hello World");
    },2000);
setTimeout(()=>{
    clearInterval(id);
},10000);

