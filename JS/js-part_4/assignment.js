// Q-1
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
    for(let i=0; i<=arr.length; i++){
        if(arr[i] == num){
            arr.splice(i, 1);
        }
    }
    console.log(arr);

    // Q-2
let number = 287152;
let count = 0;
    let copy = number;

while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

// Q-3
let numbers = 287152;
let sum = 25;
    let x = numbers;

while(x > 0){
    digit = x % 10;
    sum+= digit;
    copy = Math.floor(copy/10);
}
console.log(sum);

// Q-4
let n = 5;
let factorial = 1;

for(let i=1; i<=n; i++){
    factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);

// Q-5
let array = [2,5,10,4,2,7,1,9];
let larget = 0;

for(let i=0; i<=array.length; i++){
    if(largest < array[i]){
        largest = array[i];
    }
}
console.log(largest);