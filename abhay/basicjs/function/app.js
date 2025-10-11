function name(){
    console.log("hello");
};

name();  //calling a function to print hello
name();

function printName(){
    console.log("apna collage");
    console.log("abhay jaiswal");
};

printName();  //calling a function


function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
};

print1to5();

function isAdult(){
    let age = 15;
    if(age<18){
        console.log("not adult");
    }else{
        console.log("adult");
    }
};

isAdult();

// let random = Math.floor(Math.random()*6)+1;
// console.log(random);

function rollDice(){ 
let random = Math.floor(Math.random()*6)+1;
console.log(random);
};

rollDice();

function printName(name){
    console.log(name);
}

printName("abhay");

function infoName(name, age){
    console.log(`${name}'s age is ${age}.`);
};

infoName("abhay jaiswal" , 21);
infoName("rahul jaiswa;" , 41);
infoName(14);





function sumOf(a, b){
    console.log(a+b);
}
sumOf( 3, 9);




function printTable(n){
    for(let i=n; i<=n*10; i+=n ){
        console.log(i);
    }
};


// printTable(5);average of 3 number 

function takeAvg(a,b,c){
    console.log((a+b+c)/3);
}

takeAvg(5,6,7);


// multiplication table of a number

function tableMul(n){
    for(let i=n; i<=n*10; i+=n ){
        console.log(i);
    };
} ;

tableMul(5);




// return keyword

function sum(a, b){
    return a+b;
};
let a = sum(9,8);  //1st mehod in which we declare with another variable
console.log(a);

console.log(sum(9,8));


// after return if we are pass any argument to print it can not executed
function isAdult(age){
    if(age>=18){
        console.log("you are adult");
        return "adult"
    }else {
        console.log("byy byy")
        return "not adult"

    }
}
console.log(isAdult(17));

function sum(a,b) {
    return(a+b)
}
let s = sum( 9, 8);
console.log(s);

console.log(sum(sum(7,8),9))


// function to print sum from 1 to n

function getSum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum+=i
    }
    return sum;
}


let str = ["hi", "hello","byy"] ;

function concate(str) {
    let reasult;

    for(let i=0; i<=str.length; i++){
        reasult += str[i];
    }
    return reasult;
};

// scope

let sums = 78; //Global scope

// function scope
function putSum(a,b){
    let sum = a+b;
    console.log(sum)
};

putSum(9,6);
console.log(sums)//Global scope because it is available outside the function


// Block scope-> block ke andar use kr shakte hai only
{
    let k = 23;   //if we use var keyword then it is work outside the block scope
    console.log(k)
};

// lexical scope->function jo decllare hue hi un se phle unko use lr pana possible hota hi

function outerFunc(){
    let x=4;
    let y=5;
    function innerFunc(){
    console.log(x);
    console.log(y);
    }
    innerFunc();
};

// methods

const calculator = {
    add(a,b){
        return a+b;
    },
    mul(a,b){
        return a*b;
    }
};

// this keyword

const student = {
    name: "abhay",
    math : 69,
    science : 65,
    english : 67,
    getAvg(){   //method call
        let avg = (this.math + this.science + this.english)/3;
        console.log(avg);
        console.log(`${this.name} got the avg marks = ${avg}`);
        console.log(this);
    }
};

// try and catch 

console.log("hello guys");
console.log("hello guys");
try {
    console.log(b);   //b is not define that's why catch is executed
} catch (err){
    console.log("caught an error.. b is not defined");
    console.log(err);
}
console.log("hello guys");
console.log("hello guys");

// miscellinious 
//Arrow function

const multiplication = (a,b) => {
    console.log(a*b);    //pass a,b and get product of them
};

// cube function
let cube = (n) => {
    console.log(n*n*n);
};

// power function

const pow = (a,b) => {
    return a ** b;
};

// setTimeout function

console.log("hello there");

setTimeout(()=>{
    console.log("Apna Collage");
}, 2000);

console.log("welcome to");

// setInterval
console.log("hi there");

setInterval(()=>{   //it is used to print srmcem multiple time
    // console.log("srmcem");
},2000);

console.log("welcome to");


// for nonmal functon this means calling object function
// for arrow function this means parents scope function window object

const squar = (n) =>{
    return(n*n);
};

setTimeout(()=>{
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
},2000);

