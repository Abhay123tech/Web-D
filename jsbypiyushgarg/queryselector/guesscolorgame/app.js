// const colorCodeContainer =  document.getElementById("color-code");
// const optionContainer = document.getElementById("option-container");
// const scoreContainer = document.getElementById("score");
// let randomColor=null; //phle null h
// let score =0; 

// function generateRandomNumberBetween(min, max) {
//     // formula to generate numbr between two number
//     return min + Math.floor(Math.random() * (max-min + 1));
// }

// function generaterandomColorRGB(){
//     const red = generateRandomNumberBetween(0,255);  //return random value between 0 to 255
//     const green = generateRandomNumberBetween(0,255);
//     const blue = generateRandomNumberBetween(0,255);
//     return `rgb(${red}, ${green}, ${blue})`;
// }

// // console.log(generateRandomNumberBetween(0, 255));
// // console.log(generaterandomColorRGB());  //print on console


// function incrementScore(){
//     score+=1;
//     // document.getElementById('score').innerText=score;
//     scoreContainer.innerText=score;
// }

// function validateResult(el){
//     // console.log(el.target);
//     const selectedColor = el.target.style.backgroundColor;
// if(selectedColor === randomColor){
//     incrementScore();
//     }else{
//         score=0;
//     }
//     window.localStorage.setItem("score", score)
// }


// function startGame(){   //make a function to start the game

//     score=window.localStorage.getItem('score') ?? 0;
//     scoreContainer.innerText=score;

//     optionContainer.innerHTML=null; //option container ko khali he krna h

//     randomColor=generaterandomColorRGB();  //generate a randomized computer color
//     colorCodeContainer.innerText=randomColor;  //inner text me de diye

//     // in 6 element me se 1 to answer hona he chaiye
//     const ansIndex = generateRandomNumberBetween(0,5);

//     for(let i=0; i<6; i++){
//         const div=document.createElement('div');
//         div.addEventListener('click',validateResult)
//         div.style.backgroundColor=
//         i === ansIndex ? randomColor : generaterandomColorRGB();  //sb random h but ekk answer to h he
//         optionContainer.append(div);
//     }
// }

// window.addEventListener("load",  ()=> startGame())//rgb show on window




const colorCodeContainer = document.getElementById("color-code");
const optionContainer = document.getElementById("option-container");
const scoreContainer = document.getElementById("score");
let randomColor = null;
let score = 0;

function generateRandomNumberBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function generaterandomColorRGB() {
    const red = generateRandomNumberBetween(0, 255);
    const green = generateRandomNumberBetween(0, 255);
    const blue = generateRandomNumberBetween(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function incrementScore() {
    score += 1;
    scoreContainer.innerText = score;
}

function validateResult(el) {
    const selectedColor = el.target.style.backgroundColor;
    if (selectedColor === randomColor) {
    incrementScore();
    } else {
    score = 0;
    }
    window.localStorage.setItem("score", score);
    startGame(); // restart after selection
}

function startGame() {
    score = window.localStorage.getItem("score") ?? 0;
    scoreContainer.innerText = score;

    optionContainer.innerHTML = null;

    randomColor = generaterandomColorRGB();
    colorCodeContainer.innerText = randomColor;

    const ansIndex = generateRandomNumberBetween(0, 5);

    for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);
    div.style.backgroundColor =
        i === ansIndex ? randomColor : generaterandomColorRGB();
    optionContainer.append(div);
    }
}

window.addEventListener("load", () => startGame());
