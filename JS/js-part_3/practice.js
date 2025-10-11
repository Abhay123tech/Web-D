let msg = "hello!";
let p = msg.trim().toUpperCase();
console.log(p);

let name = "ApnaCollege";
let q = name.slice(4, 9);
console.log(q);
let r = name.indexOf("na");
console.log(r);
let t = name.replace("Apna","Our");
console.log(t);

let u = name.slice(4).replace("l","t");
console.log(u);

let months = ["january","july","march","august"];
months[0]= "july";
months[1]= "june";
console.log(months)

let month = ["january","july","march","august"];
month.shift();
month.shift();
console.log(month);
month.unshift("june");
console.log(month);
month.unshift("july");
console.log(month);

let a = ["january","july","march","august"];
let b = a.splice(0,2,"july","june"); 
console.log(b);
console.log(a);

let lang = ["c","c++","html","javascript","python","java","c#","sql"];
let d = lang.reverse().indexOf("javascript");
console.log(d);

let array = [["x",null,"0"],[null,"x","null"],["0",null,"x"]];
let y = array;
console.log(y);



