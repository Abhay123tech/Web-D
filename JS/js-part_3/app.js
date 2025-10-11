// let msg = prompt ("hello plese enter the pass")
// console.log(msg.trim());

// let Name ="    abhay jaiswal";
// Name.trim();
// console.log(Name.trim().toUpperCase());

// let msg ="ILoveYou";

// chaining

// let msg = "   hello abhay "
// let newMsg = msg.trim();
// console.log("after trim : ",newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after uppercase : ",newMsg);

let msg = "    Hello Abhay "
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

// slice -> tukara
let Msg = "helloworld";
console.log(Msg.slice(0 , 5));
console.log(Msg.slice(5, 10));
console.log(Msg.slice(-5));  //length-number  10-5

// replace->search a value in string & returned a new string with a value placed.
// kishi value ko delet krke ushke place pe dushre value ko replace krna

let p = "ILoveCoading";
console.log(p);
let q = p.replace("Love", "want");
console.log(q);
let r = p.replace("C", "X");
console.log(r);

// repeat-> it means copy or repeat n no of timing

let s = "I Love You ";
console.log(s);
let t = s.repeat(3);
console.log(t);
