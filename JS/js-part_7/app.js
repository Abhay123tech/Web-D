// use of this->keywords refers to an object that is executing the current piece of code

const student = {
    name: "Abhay jaiswal",
    age: 20,
    math:70,
    physic:80,
    chemistry:90,
    getAvg(){
        console.log();
        let avg = (this.chemistry+ this.math+ this.physic) / 3;
        console.log(`${this.name} get avg marks = ${avg}`);
    }
}
function getAvg(){
    console.log(this);
}

// Try and catch
console.log("hello");
console.log("hello2");
let a =4;                    //if we define a ->then it work normally ,if we not define a the try and catch statement is used
try {
    console.log(a);
}catch {
    console.log("caught an error... a is not defined");
}
console.log("hello3");


//Arrow Functions ->

const sum = (a,b) =>a + b;
// {
//     console.log(a+b);
// };

let cube = (n) =>{
    console.log(n*n*n);
};

const power = (a) =>{
    console.log(a**a);
};

//    Implict arrow function -> automatic return the outpput without need of console.log

    const mul = (a,b) => a * b;

// Set Timeout function-> (function,timeout) timeout is used to execute the particular function at that time
    console.log("hi there");
    setTimeout(()=>{
        console.log("Apna collage");
    },4000);                      //4000 is 4 second here time is always in millisecond
    console.log("Welcome to");

    // console.log("hi everyone");
    // setTimeout(()=>{
    //     console.log("i love with my baby doll whose name is kajju");
    // },5000);
    // console.log("today i want to annnounce that ");

// Setinterval
let id = setInterval(()=>{
    console.log("apna collage");
},2000);
console.log(id);
clearInterval(id);    //clear interval is use to stop the execution of the function

// this keyword with arrow function and normal function
//normal function ke liye this ushi ka object hota hai, jo call karta hai  whi hamraa this hota hai
//arrow function ke liye ushka object ushka parent pta hai ,  jo call  karta hai ushka this hamara this hota hai

let boy = {                           //object
    name:"Abhay jaiswal",
    marks: 80,
    prop : this,  //global scope
    getName: function(){            //calling object
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);     //arrow function ->parent scope
        return this.marks;
    },
    getInfo1: function(){
    setTimeout(()=>{             //parent of this info1 function is boy
        console.log(this);       //student
    },2000);
    },

    getInfo2: function(){
        setTimeout(function(){
            console.log(this);   //window object call
        },2000);
    },
};
