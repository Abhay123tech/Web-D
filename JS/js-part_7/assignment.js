// Q-1 Write an arrow function named arrayAverage that accept an average of numbers and returns the average of those number?
const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
        total += number;
    } 
    return total/arr.length;
};

let arr = [1,2,3,4,5,6];
console.log(arrayAverage(arr));

// Q-2 Write an array functionnamed isEven() that takes a single number as argument and return if it is even or not?
const isEven = (num) => {
    if(num % 2 == 0){
        console.log("even")
    }else{
        console.log("not even")
    }
}
isEven(4);