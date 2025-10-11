//closer-> function ke andar jo function hota hai ushe closer bolte h
const myName=document.getElementById("my-name");
const btn = document.getElementById("my-btn");

function makeTextSizer(size){
    function changeSize(){
        myName.style.fontSize=`${size}px`;
    }
    return changeSize;
}

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size52 = makeTextSizer(52);
const size5 = makeTextSizer(5);
const size70 = makeTextSizer(70);


btn.addEventListener("click" , size20); //click krne pe button ka size 20 ho jai







// function adder(num){
//     function add(b){   //closer
//         console.log(num+b);
//     }
//     return add;
// }

// const addTo5 = adder(5);//outer function pe 5 pass kr diya
// const addTo10 = adder(10);
// addTo5(2);
// addTo5(10);

// addTo10(2);