let btns = document.querySelectorAll("button");

for (btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function() {    //when we move our curser on button it work as clicked a button
    //     console.log("you entered a button");
    // }
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function () {  //perforn on double click
        console.log("you dbl clicked me");
    });
}

// btn.onclick = function() {
//     alert("button was clicked");
// };

function sayHello(){
    alert("hello!");
}

function sayName(){
    console.log("welcome to apna collage");
}

// function sayCall(){
//     console.log("you call the head of apna collage")
// }


// <- EVENTLISTNER->
// button ke click hone pe multiple FUNCTION EXECUTE HO  



// let p = document.querySelector("p");

// p.addEventListener("click", function() {
//     console.log("para was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("mouse inside box");
// });


// This in event listener

// write event.preventDefalt(); ->ishh se action wale url pe hmm nhi jaiyenge

// let button = document.querySelector("button");
// button.addEventListener("click", function(){
//     console.log("button was clicked");
// });

// more events

// 1. change events -> inetial and final ke beech ke event ko track krta hai or lomng changes ke liye

// 2. choote choote changes bhe track krne ke liye hm input events ko track karte hi eg. a ko track b ko track krna
// omly character key is work non character key cannot work on it


// Event bubbling->nested element ko trigger krne pe wo aur ushka parent bhee output ke fom me aata hai

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// })

// ul.addEventListener("click", function(){
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click", function(){
//     console.log("li was clicked")
// })};

// Todo App

let button = document.querySelector("button");
let ul =  document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);

    console.log(input.value);
    input.value = "";
});


