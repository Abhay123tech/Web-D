export const sum =(a,b) => a+b;
export const mul = (a,b) => a*b;
export const g = 9.8;
export const PI = 3.14;


// //module.export ek object he hoti h
// module.exports = 123;

// case in which math.js can't export any value then then in node script.js output is {} curley bracket 

// let obj = {
//     sum:sum,
//     mul:mul,
//     g:g,
//     PI: PI,
// };
// module.exports = obj;

// we also write the module.exports
// module.exports.sum=(a,b) => a+b;  //also work and give same output


//direct object bhee de shakte h
// module.exports= {
//     sum:sum,
//     mul:mul,
//     g:g,
//     PI: PI,
// };