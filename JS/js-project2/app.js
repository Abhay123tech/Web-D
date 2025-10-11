console.log("Welcome to Tic tac Toe")
let music = new Audio("gamesong.mp3")
let audioturn = new Audio("turn.mp3")
let gameover = new Audio("gamelost.mp3")
let turn = "X"

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

// Functionn to check for a win
const checkWin = () =>{
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ]
}

//Game logic
let boxes = document.getElementsByClassName("box");  //apply event listner on each box//
Array.from(boxes).forEach(element => {   //array bna ke forEach use krte h//
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
        }
    })
})