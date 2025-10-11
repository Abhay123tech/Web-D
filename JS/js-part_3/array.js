// array->linear collection of things

// let student1 = "Abhay";
// let student2 = "Amit";
// let student3 = "Rahul";

let students = ["abhay","amit","rahul"]
console.log(students);

// creating array
let marks = [99, 85,93,73,62];
let name = ["adam","bob","catlyn"];
let info = ["aman", 25, 6.1]
console.log(name.length);
console.log(marks.length);
console.log(info[0]);

console.log(name [0][0]);
console.log(name[2]);


empArr = [];
console.log(empArr.length);


// array are mutable 
let Name = ["rohit" , "abhay", "abhishek"];
Name[0] = "amit";
console.log(Name);

// Array methods  unshift->addition of elements in front, shift->for deletion

// let cars = ['audi','bmw','mercidies'];
// cars.push=['fortuner'];
// console.log(cars);

// let cars = ['audi','bmw','mercidies','fortuner']
// cars.pop=['fortoner'];
// console.log(cars);

// 
let cars = ['audi','bmw','mercidies','fortuner'];
cars.shift=['audi'];
console.log(cars);

// array methods ->index same like string, includes->search for a value
// let primary = ["red","yellow","blue"];
// primary.includes("red");
// console.log(primary);
// primary.includes("green");


//concation and reverse means merge two array 
let primary= ["red" ,"orange" ,"green" , "yellow"];
let secondary = ["voilet", "indigo","blue"];
primary.concat(secondary);
let vibgyor = primary.concat(secondary)
console.log(vibgyor);

// array slice -> copies a portions of an array
let c = ["red","yellow,","pink","blue","orange"];
c.slice();
console.log(c);
let d = c.slice(3);
console.log(d);
let e = c.slice(2);
console.log(e);

// splice: -> remove, replace, add element in place splice ( start, delet count, item 0)
// splice: changes in original array
let a = ["red","yellow,","pink","blue","orange"];
a.splice();
let f = a.splice(3);
console.log(a);

// Array references->address in memory

let arr = ["a","b","c"];
let arrcopy = arr;
arr == arrcopy;
console.log("arrcopy");

// constant array->array ko completely array me change krta hai
const array = [1,2,3];
array.push(4);
console.log(array);