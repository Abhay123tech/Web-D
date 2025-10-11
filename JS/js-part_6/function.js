// Function

function hello(){
    console.log("hello");
}
hello();   //for execution
hello(); 
hello(); 
hello(); 

function printname(){
    console.log("apna collage");
    console.log("abhay jaiswal");
}

function print1to5(){
    for (let i=0; i<=5; i++){
        console.log(i);
    }
}

function isadult(){
    let age = 18;
    if(age>=18){
        console.log("write to vote");
    }else {
        console.log("not right to vote");
    }
}
printname();
print1to5();
isadult();

// function with arguments-> value we pass to a function
function printname(name,age){
    console.log(`${name}'s age is ${age},`);  //the dollar sign ( $ ) is just another character that can be used in variable names.
}
printname("Abhay",21);
printname("jassi",24);
printname("rohit");      //order is maintain so name get printed and age is not defined
printname(22);           //not possible bcoz order is very important in js (age is come at place of name)order get break 

// function for sum
    function sum(a,b){
        console.log(a+b);
    }
        sum(2,5);
        sum(9,5);

        // Return keyword -> after return statement nothing is executed
    function sum (a,b){
        return a+b;
    }
    let s = sum(5,9);
    console.log(s);


    function prod (a,b){
        return a*b;
    }
    // let t = prod(5,9);  without using this variable ,direct put in console.log
    console.log(prod(5,9));

    // for sum of three number with other method
    function sum(a, b) {
        return a+b;
    }
    let y= sum(sum(5,9), 4);
    console.log(y);

    // for product of three number
    function product(a, b) {
        return a*b;
    }
    console.log( product(product(5,9), 4));

