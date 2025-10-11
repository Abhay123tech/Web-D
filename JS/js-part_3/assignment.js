// Q-1
let arr= [7,9,0,-2];
let n = 3;
let p = arr.slice(0, n);
console.log(p);
// Q-2
let arra = [7,9,0,-2];
let q = 3;
let r = arra.slice(-q);
console.log(r);
// Q-3
let str = prompt("please enter a string");
if(str.length == 0) {
    console.log("string is empty");
} else{
    console.log("string is not empty");
}
// Q-4
let string = "SRMceMCOLagE";
let y = 3;

if(string[y] == string[y].toLowerCase()) {
    console.log("character is lowercase");
} else{
    console.log("character is not lower case");
}
// Q-5
let stri = prompt("pleas enter a step");
console.log(`orignal string = ${stri}`);
console.log(`string without spaces = ${stri.trim()}`);
// Q-6
let array = ["hello", 2,56, 67, 84, 99];
let item = 84;
if(array.indexOf(item) != -1){
    console.log("element exist in array");
} else {
    console.log("element does't exist in array");
}
