// Dom Events , 1->on click  , 2->onmouseenter

// let btn = document.querySelector("button");
// console.log(btn);

// btn.onclick= function() {
//     alert("button was clicked");
// }

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     btn.onclick = sayhello;     //not use of paranthesis() here bcoz we can not execute this function here
//     btn.onmouseenter = function(){    //apne curser pe le ke jate hai khud print ho jaa hai
//         console.log("you enter a button");
//     }
// }

// function sayhello(){
//     alert("Hello");
// }

// 2-> Event Listners->Execute multiple event
let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick=sayHello;
    // btn.onclick=sayName;
    
    btn.addEventListener("click" ,sayHello);
    btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        // console.log("you double click the button")
    });
}

function sayHello(){
    alert("hello");
}
function sayName(){
    alert("Apna Collage");
}

// event listner for multiple elements

let p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("button was clicked");
});

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function(){
    console.log("mouse inside box");
});

