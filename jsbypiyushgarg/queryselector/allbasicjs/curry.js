//curry->
function add(a){
    return function (b) {
        return function(c){
            return a+b+c;
        };
    };
}

// const add = (a) => (b) => (c) => a+b+c;
// console.log(add(1)(2)(3));


function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`Sending Email to ${to} with subject ${subject}: ${body}`)
        };
    };
}

console.log(add(2)(3)(4));//2 function return kr dega jo 3 me 2 ko add kr dega

let step1=sendAutoEmail('pyushgarg.dev@gmail.com'); //step1 ko khud se kiya 
let step2=step1("new order conformation"); //step2 ne step 1 ke help le

step2('hey piyush here is something for u');//step 2 ne next function ke help le
