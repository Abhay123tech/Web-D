let div = document.querySelector("div");

div.addEventListener("mouseout",() => {
    console.log("mouse is out of div");
} );

let inp = document.querySelector("input");
inp.addEventListener("keypress",()=>{
    console.log("key was pressed");
});

let user = document.querySelector(".user");
let p = document.querySelector("p");
p.addEventListener("input", ()=>{
    console.log(user.value);
    p.innerText= user.value;
});

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    btn.style.backgroundColor = "green";
    console.log("button is clicked");
});
