// compose -> ye dheer sari function ko compose krta h

function add(a,b){
    return a+b;
}

function multiply(...args){ //accept unlimited arguments
    return args[0]*args[1];
}

function square(val){
    return val*val;
}

function composeTwoFunction(fun1, fun2){
    return function(a,b){
        return fun2(fun1(a,b));
    }
}

//functn composition with the help of that we can pass various function
function compose(...fns){  //various fun get composed
    return function(...values){
        return fun.reduceRight((a,b)=> b(a) , values);
    };
}

const composeAll =(...fun) => (...val) =>fun.reduceRight((a,b)=> b(a) , values);



//function in modern js
const c2f= (fun1, fun2)=> (a,b) =>fun2(fun1(a,b));


const task = c2f(add,square);
console.log(task(4,3));

// const task = composeTwoFunction(add,square);
// console.log(task(2,3));