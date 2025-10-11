
let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let start = false
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(start == false){
        console.log("game is start");
        start = true;
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

// flash button & level
function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(math.random() * 3);
    let randColor = btns[randIdx];
    btnFlash();
}