// Array Method

//forEach function->ekk ekk kar ke element pe apply karta hai
let arr = [1,2,3,4,5];

let print = function (el){
    console.log(el);
};
arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// });

// arr.forEach((el)=>{
//     console.log(el);
// });

//Map function -> jo value return hoti hai ushe ekk new variable me store krta hai
let num = [1,2,3,4];
let double = num.map((el)=>{
    return el * el;
});


// filter-> New array form ,it is depend upon callback function
//if it provide true-> element printed otherwise rejected
let nums = [1,2,3,4,5,6,8,9,12,34];
let ans = nums.filter((el)=>{
    // return el % 2 == 0 ;       //for ever its provide true, otherwise false
    return el % 2 != 0;
});

// Every function-> return true if every element of array return true for some function,if any false statement then return false.
let x = [2,4].every((el) =>(el%2 == 0));
    console.log(x);

// Reduce function -> reduce the array into a single value
let y = [1,2,3,4];
let finalVal = y.reduce((result,element)=> {
    console.log(result);
    return result + element         //result print the final completation value
});
    console.log(finalVal);

// Maximum in aarray by using reduce method

// by using loop concept
let array = [1,2,3,4,5,6,13,15];
let max = -1;
for (let i=0; i<array.length; i++) {
    if(max < array[i]){
        max = array[i];
    }
}
console.log(max);

// by using reduce concept
let arrays = [1,2,3,4,5,6,13,15,18];
let maximum = arrays.reduce((maximum,el) => {
    if(maximum  < el){
        return el;
    }else{
        return maximum;
    }
});
console.log(maximum);

// Default Parameters -> always assigned in order , we use default parameter always at the end
function sum (a , b=3){
    return a+b;
};
console.log(sum);

// spread->
let name = "apna collage"
console.log(..."apna collage");       //here three dot is spread

let a = [1,2,3,4,5,6,13,15];
console.log(Math.min(...a)
);

// spread with(array literals)-> koi exesting array hota hai aur hm ushki copy banane ke koshish krte hai
let b = [1,2,3,4,5,6,13];
let barray = [...b];
console.log(barray);

let odd = [1,3,5,7,9];
let even = [2,4,6,8];

let sums = [...odd, ...even];
console.log(sums);

// sprad with( object literals)
const data = {
    email : "ironman@gmail.com",
    passwword : "abcd"
};

const datacopy = {...data, id:123, contry: "India"};
console.log(datacopy);

let r = [1,2,3,4,5,6,13];     //only value required
let obj1 = {...r};            //object -> both key and value required

let obj2 = {..."hello"};
console.log(obj2);

// rest ->Allow a function to take an indefinite number of argument and bundle them into an array

function t(...args){         // arguments
    for(i=0; i<args.length; i++){
        console.log("you gave us", args[i]);
    }
}
console.log(t);

function u(...args){
    return args.reduce((u,el)=> u + el);
}

// Destructing -> storing value of array into multiple variables  ,value ko torna,we use square bracket
let names = ["abhay","amit","ravi","rohit","xyz","pyq"];
let[winner, runnerup, seconndrunnerup,...others] = names;

// destructing for (object), we use {} curley bracket for object in dstructured
let student = {
    name : "Abhay jaiswal",
    age : 20,
    class: "B-tech",
    username:"abhay@9090",
    password : "abcd",
};
let {username:user , password:secret} = student;        //username->kiss key ke lye search krna hi object me,  user->kiss variable me store karwana hai
console.log(user);
console.log(secret);