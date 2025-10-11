// let currentPlayer = "X";  //global variable

// let arr =Array(9).fill(null);  //arr starting me null h and work as a grid here
// // console.log(arr);

// function checkWinner(){
//     if(
//       (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||  // Row 1
//         (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||  // Row 2
//         (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||  // Row 3
//         (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||  // Col 1
//         (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||  // Col 2
//         (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||  // Col 3
//         (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||  // Diag 1
//         (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])     // Diag 2
//     ){
//     document.write(`Winner is ${currentPlayer}`);
//     }
// }

// function handleClick(el){
//     const id = Number(el.id);  //return the number of box in which  we clicked
//     arr[id]= currentPlayer;
//     el.innerText= currentPlayer;

//     //with the help of this if else do player one y one moove kr paiyenge
//     currentPlayer=currentPlayer === 'X' ? '0' :'X'//short if else 
        
//     // console.log(arr);
// }

let currentPlayer = "X";  
let arr = Array(9).fill(null);  

function checkWinner() {
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||  // Row 1
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||  // Row 2
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||  // Row 3
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||  // Col 1
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||  // Col 2
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||  // Col 3
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||  // Diag 1
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])     // Diag 2
    ) {
    document.write(`Winner is ${currentPlayer}`);
    }

    if(!arr.some((e)=>e === null)){
        document.write(`Draw!!`);
        return;
    }
}

function handleClick(el) {
    const id = Number(el.id);
    
  // Prevent overwriting a filled cell
    if (arr[id] !== null) return;

    arr[id] = currentPlayer;
    el.innerText = currentPlayer;

  checkWinner();  // <-- ✅ check winner after each move

  currentPlayer = currentPlayer === "X" ? "O" : "X"; // alternate player
}
