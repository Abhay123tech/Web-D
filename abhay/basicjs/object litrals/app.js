const student = {
    name :"abhay",
    age : 21,
    address :"sonebhadra",
    state: "Up",
};

let student2 = ["abhay",21,"sonebhadra"]; 

// get value

const post = {
    name: "abhay",
    content: "this is my first post",
    value: 4,
    likes : 100,
};

// object of objects

const studentInfo = {
    abhay : {
        grade: "A++",
        address: "sonebhadra",
    },
    aman : {
        grade:" A+",
        address: "sultanpur",
    }
};

// array of object

let classInfo = [
    {
        name: "abhay",
        rollno:" 002",
        city: "sonebhadra"
    },
    {
        name: "aman",
        grade:" A+",
        address: "sultanpur",
    },
];

// Random integer

// let num = Math.random(7);
// console.log(num);

// num = num * 10;
// console.log(num);

// num = Math.floor(num);
// console.log(num);

// num = num + 1;
// console.log(num);

// let x =Math.floor(Math.random()*1000)+1;
// console.log(x);

// let y = Math.floor(Math.random()*5)+1;
// console.log(y)

// let z = Math.floor(Math.random()*10)+50;//number between 10 to 60
// console.log(z);

// 

// Gussing Game

let max = prompt("please enter the maximum number");

let random = Math.floor(Math.random()*max)+ 1;

let guess = prompt("guess the number")

while(true) {
    if(guess == "quit"){
        console.log("user quit")
        break;
    }
    if(guess == random) {
        console.log("congratulation you are right !! random number was",random);
        break;
    }else if(guess < random){
        guess = prompt(" hint: your guess was too small please try again");
    }else{
        guess = prompt("hint: your guess was too large please try again");
    }
};