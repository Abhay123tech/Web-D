let num = "50";
if (num % 10 == 0){
    console.log("good");
}
else {
    console.log("bad");
}


let Name = prompt("please enter your name");
console.log(Name);
let age = prompt("enter your age");
console.log(age);
alert(`${Name} is ${age} years old`);


let quarter = 3;
switch (quarter) {
    case 1 : console.log( "January, February, March");
    break;
    case 2 : console.log("april,may,june");
    break;
    case 3 : console.log("july,august,september");
    break;
    case 4 : console.log("october,november,december");
    break;
    default : console.log("invalid input");
}

