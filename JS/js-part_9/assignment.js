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


// Q-4 Create a new input and button element on the page using javaScript only.
//  Set the text of button to click me?

let input = document.createElement("input");
let button = document.createElement("button");
button.innerText= "click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Q-5 Add following attribute to the element:
// -change placeholder value of input to "username"
// -change the id of button to "btn"

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

// Q-6 Access the button using the querySelector and button id.
// change the button background color to blue and text colow white?
let btn = document.querySelector("#btn");
btn.classList.add("btn");

// Q-7 Create an h1 element on the page  and set its text to "DOM Practice"Underline
//  change ts color to purple?

let h1 = document.createElement("h1");
h1.innerHTML = "<ul>DOM Practice<ul/>";

document.querySelector("body").append(h1);
h1.classList.add("h1");

// Q-8 create a p tag  on the page and set its text to "apna collage delta practice",where delta is bold?
let p = document.createElement("p");
p.innerHTML= "Apna collage <b> Delta </b> Practice"

document.querySelector("body").append(p);
