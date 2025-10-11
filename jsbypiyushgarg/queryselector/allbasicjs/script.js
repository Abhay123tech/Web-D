
// 1)function

// function sayHello(){
//     console.log("hello");
// }
// sayHello();

// //argument
// function add(num1 , num2){
//     console.log(num1+num2);
// }
// add(3,5);  //parameter

// function multiply(a,b){
//     return a*b;
// }
// let ans=multiply(10,9);
// console.log(ans);

// //unlimited argument accept
// function addNumber(){
//     let an =0;
//     for(let i=0; i<arguments.length; i++){
//         an=an+arguments[i];
//     }
//     return an;
// }
// let result = addNumber(10,20,30);
// console.log(result);

//hosting -> function ko phle he call kr shakte h whithout decleration
add(5,7);
function add(a,b){
    console.log(a+b);
}




//2)Arrow function
//syntax
const say =() => {
    console.log("hello");
}
say();

const sayy =(a,b)=>{
    return a+b;
}
console.log(sayy(3,4));

//write arrow function in one line no need of return statement and parenthesis
const sayyy =(a,b)=> a+b; 
console.log(sayyy(3,5));

//argument in arrow function  
// -> in arrow function argument keyword is not used like normal function we used spread 
const addNumbers = (...nums)=>{
    console.log(nums);
};
addNumbers(10,20,30,40);

//3)hosting-> not used in arrow function only used in normall function


// 4) this keyword

// Arrow function ka scope global hota h so, this key word not work, pure window ko refer krta h object ko nhi
//Normal function hamera object ko refer krta h so this key word is apply onto it

const obj ={  //obj yha object h
    value : 20,
    myFunction: function(){
        console.log(this); //this keyword is not word due to global in nature 
    },
};

obj.myFunction();

//  HIGH ORDER FUNCTION AND CALLBACK
// a function which can take a function as an arguments is callef high order function
// jiss function ko call kiya jata hai ushe call back function bolte h
    // function add(a,b,cb){
    //     let result=a+b; 
    //     // cb(result);  //pass calll back fuction as a function
    // }
    // add(2,4,(val)=> console.log(val));
    // add(400,4,(res)=> console.log(res));




