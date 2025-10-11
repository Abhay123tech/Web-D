let penprice = 30;
let pencilprice = 70;
let output = "the total price is :" + (pencilprice + penprice) +"rupees"  //we append her pen and pencil price 
console.log(output);

console.log(`the total price is ${penprice + pencilprice} rupees`);

let a = 10;
let b = 2;
// console.log(++b);//3
// console.log(b++);//first print 3 then increment which is 4
// console.log(b++);// first print 4 then increment value which is 5  whiwho
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);              //concept of uniary operator
// console.log(a/b);
// console.log(a%b);
// console.log(a**b)
// console.log(a++); //10 print then increment whose value is 11 it is stored 
// console.log(++a); // first increment in privious value in 11 and  print 12 here 

b = a ;
console.log(a);
console.log(b);

// let marks = 60;

// if(marks == 100){
//     console.log("topper");
// }else if( marks == 90 ){
//     console.log("2nd topper");
// }else if(marks ==80){
//     console.log("3rd topper");
// }else if(marks == 70){
//     console.log("no rank in class");
// }else{
//     console.log("fail in particular classs");
// }

let marks = 70;

if(marks >= 33){
    console.log("you are pass");
    if(marks >= 80){
        console.log("topper of the class");
    }else{
        console.log("middle in the class");
    }
}else{
    console.log("better luck for next time");
}

let string = "apple"
let x = (string[0] === 'a') && (string.length>3)

console.log(x);

// let password = prompt("write your password");
// console.log(password.trim());

let students = ["abhay ", "amit","rahul"];
students[0] = "anant"
console.log(students);

let students1 = ["abhay ", "amit","rahul"];
let students2 = ["abhijeet ", "abhinav","aman"];
let p = students1.concat(students2);
console.log(p);

let q = students1.reverse();
console.log(q);


let color = ["red","yellow","blue","orange","pink","white"];

let r = color.slice();  //slice method value is temperory stored
console.log(r);

let s = color.slice(2);
console.log(s);

let t = color.slice(3,4);   // last 4 in not included due to slicing method property
console.log(t);

let u = color.slice(-2);
console.log(u)

//splice methds  (start ,deletCount,item0..itemN)
let e = color.splice(4)  //worl as slice
console.log(e)   
console.log(color);  //in splice value is permanent stored 

let f = color.splice(0,1);
console.log(f);
console.log(color);

let g = color.splice(0,1, 'black' , 'grey');
console.log(g);

console.log(color);

//sort method is always used when we have character and string method
let h = color.sort();
console.log(h);

let chars = ['a','b','r','s','m','s','t','p'];
let i = chars.sort();
console.log(i);

let months = ['january','july','march','august'];
let j = months.splice(0,2,"july","june");
console.log(j);
console.log(months);

//Array refrences ->address in memory

// let arr = ['a','b','c'];
// let arrCopy= arr;
// console.log(arrCopy);
// console.log(arr);
// let y = arrCopy.pop();
// console.log(y);
// console.log(arrCopy);

let arr = ['a','b','c'];
let arrCopy= ['a','b','c'];

let z = arr.pop();
console.log(z)

let Z = arrCopy.push("d");
console.log(Z);

// let n = prompt("write your number");
// n =parseInt(n);

// for(let i=n; i<=n*10; i=i+n){
//     console.log(i)
// }


//nested loop with nested array

// let heroes = [["amar", "akbar", "anthany"] ,["abhay", "rahul","amit"]];
// for (let i=0; i<=heroes.length; i++){
//     console.log(i,heroes[i],heroes[i].length);
//     for(let j= 0; j<=heroes[i].length; j++){
//         console.log(`j =${j}, ${heroes[i][j]}`);
//     }
// }

// for of loop

// let names = ["abhay","aman","amit","rahul","sonu"];

// for(n of names){
//     console.log(n);
// }

// for(char of "apnacollage"){
//     console.log(char);
// }

let names = [["abhay","aman","amit"],["rahul","sonu"]];

for(list of names){
    for(n of list){
        console.log(n);
    }
}


