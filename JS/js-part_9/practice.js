// Q-1 a<p> with red text that say "hey i am red"?
let para1 = document.createElement("p");
para1.innerText = "hey i am red";
document.querySelector("body").append(para1);

para1.classList.add("red");

// Q-2 an<h3> with blue text that says "I am a blue h3"?
let heading = document.createElement("h3");
heading.innerText="I am blue h3";
document.querySelector("body").append(heading);

heading.classList.add("blue");

// Q-3 a <div> with a black border and pink background color with the folllowing elemnet inside of it:
// .another h1 that say" I am in div"
// a <p> that say "ME TOO"

let div1 = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText="I am in div";
para2.innerText="ME TOO";

div1.append(h1);
div1.append(para2);
div1.classList.add("box");
document.querySelector("body").append(div1);
