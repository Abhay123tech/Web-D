let x = 4;
let y = 6;
let z = 10;

if (x > y) {
  if (x > z) console.log(`X is bigger ${x}`);
  else console.log(`Z is bigger ${y}`);
} else {
  if (y > z) console.log(`Y is bigger ${y}`);
  else console.log(`Z is bigger ${z}`);
}

let age = 19;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}

// let color = "red";
// if (color === "pink"){
//     console.log("invalid color");
// }else {
//     console.log("valid color");

// }

let color = "red";

if (color === "red") {
  console.log("danger");
} else if (color === "green") {
  console.log("go");
} else if (color === "yellow") {
  console.log("wait");
} else {
  console.log("traffic light is broken");
}

let size = "XL";
if (size === "XL") {
  console.log("price is Rs.250");
} else if (size === "L") {
  console.log("price is Rs.200");
} else if (size === "M") {
  console.log("price is Rs.100");
} else {
  console.log("price is Rs.50");
}

let marks = "45";
if (marks >= "33") {
  console.log("pass");
  if (marks >= "80") {
    console.log("Grade : A+");
  } else {
    console.log("Grade : 0");
  }
} else {
  console.log("better luck try next time");
}

console.log("this is a simple log");
console.error("this is an error message");

let firstName = prompt("please enter your name : ");
console.log(firstName);
