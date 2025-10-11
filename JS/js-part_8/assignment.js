// Q-> check if all numbers in our array are multiple of 10 or not?
let arr = [10];
let arrvalue = arr.every((el)=>el % 10 == 0);
console.log(arrvalue);

// Q-> create a function to find the min number in an array?
let num = [10,9,8,7,5,3,2];
let min = num.reduce((min,el)=>{
    if(min>el){
        return el;
    }else{
        return min;
    }
});
console.log(min);

// Q->square and sum the array elements using the arrow functionand then find the average of the array?
let nums = [1,2,3,4];
const square = nums.map((num)=> num * num);
console.log(square);

let sum = square.reduce((acc,cur)=> acc+cur);
let avg = sum / nums.length;
console.log(avg);

// Q-> Create a new array using the map whose each element is equal to the original element plus 5 ?
let array = [1,2,3,4,5];
const element = array.map((el)=>el+5);
console.log(element);

// Q->create a new array whose elements are in uppercase of words present in the original array?
let strings = ["amar", "akbar","anthany"];
console.log(strings.map((string)=>string.toUpperCase()));

// Q->write a function called doubleAndReturnArgs which accept an array and a variable number of argument.
//    this function should return a new array with the original array value and all of the additional arguments doubled.
const doubleAndReturnArgs = (arr , ...args) =>[
    ...arr,
    ...args.map((el)=> el + 2),
]

doubleAndReturnArgs([1,2,3] ,4,4);
doubleAndReturnArgs([2],10,4);
console.log(arr);

// Q-5 Writw a functon called mergeObjects that accepts two object and returns a new object which
//     which contain all the key and value of the first object and second object
const mergeObjects = (obj1, obj2 ) => ({...obj1, ...obj2});
mergeObjects({a: 1, b:2} , {c: 3, d:4});