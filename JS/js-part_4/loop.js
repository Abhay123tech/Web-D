for(let i=1; i<=10; i++){
    console.log(i);
}

// for (let i=10; i>=1; i--){
//     console.log(i);
// }

// for(let i=10; i>=1; i=i-3){
//     console.log(i);
// }

// for odd
// for(let i=1; i<=10; i=i+2){
//     console.log(i);
// }

// for odd reverse
// for(let j=15; j>=1; j= j-2){
//     console.log(j);
// }

// for even
// for(let k=2; k<=15; k=k+2){
//     console.log(k);
// }

// multiplication of 5
// for(i=5; i<=50; i=i+5){
//     console.log(i);
// }

// for any table
// let n = prompt("write your number");
// n = parseInt(n);
// for(i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// let n = prompt("enter your table");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// Nested loop
// for(let i=1; i<=2; i++){
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }


// while loop
// let i= 1;
// while( i<=5){
//     console.log(i);
//     i++;
// }

// let j =2;
// while(j<=20){
//     console.log(j);
// j=j+2;
// }

// let k =2;
// while(k<=20){
//     console.log(k);
// k=k+2;
// }

// favorite movie with while loop
// let favmovie ="Animal";
// let guess = prompt("guess my favorite movie");
// while((guess != favmovie)&&("guess != quit")){
//     guess = prompt("please try again later");
// }
// if(guess==favmovie){
//     console.log("congratulation");
// }

// let favmovie ="xyz";
// let guess = prompt("please guess my favmovie");
//     while(guess != favmovie){
//     if("guess !=exit"){
//         console.log("you exit");
//         break;
//     }

//         guess = prompt("plzz try again later");
// }
// if(guess==favmovie){
//     console.log("congrates");
// }

// break keyword_>stop the loop
let i =1;
while(i<=5){
if(i==3){
        break;
    }
    console.log(i);
    i++;
}

let j =2;
while(j<=20){
    if(j==18){
        break;
    }
    console.log(j);
    j=j+2;
}

// loop with array
let fruits = ["mango","banana","apple","papaya","grapes"];
    // for(let i=0; i<fruits.length; i++){
    //     console.log(i, fruits[i]);
    // }
for(let i=fruits.length-1; i>=0; i--){
    console.log(i, fruits[i]);
}

// nested array
let heroes =[
    ["ironman","superman","thor"],
    ["superman","wonder women","flash"]
];

for(let i=0; i<heroes.length; i++){
    console.log(i,heroes[i], heroes[i].length);
    for( let j=0; j<heroes[i].length; j++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}

let student = [["Abhay",80],["Ashish",70],["Alok",90]];
    for(i=0; i<student.length; i++){
        console.log(`Info of student #${i}`);
        for(j=0; j<student[i].length; j++){
            console.log(student[i][j]);
        }
    }

    // for of loop (element of collection), where collection is array or string

let fruit = ["mango","banana","apple","papaya","grapes"];
    for(fruit of fruit){
        console.log(fruit);
    }
for(j of "apnacollage"){
console.log(j);
}

// nested for of loop

let hero = [["ironman","superman","thor"],["superman","wonder women","flash"]]; 
    for( list of hero){
        for(h of list){
            console.log(h);
        }
    }
