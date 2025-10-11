// Async function -> written before the function ->async function always return a promise

async function greet() {
    throw "some random error";
    return "hello";
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was!", reasult);
})
.catch((err)=>{
    console.log("promise was reject");
});



// await->it written after await function 
// function getNum(){
//     return new Promise((resolve,raject) =>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 10)+ 1;
//         console.log(num);
//         resolve();
//         }, 1000);
//     });
// };

// async function demo() {
//     await getNum();  //use await keyword to print number one by one after aone second
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// };



// WE MINIMIZE THIS PREVIOUS FOLDER CODE BY USING ASYNC AND AWAIT KEYWOARD

// changeColor("red", 1000)
// .then(()=> {
//     console.log("red color was completed");
//     return changeColor("blue",1000);
// })
// .then(()=> {
//     console.log("blue colo was completed");
//     return changeColor("green", 1000);
// })

// .then(()=> {
//     console.log("green color was completed");
//     return changeColor("orange",1000);
// })

// .then(()=>  {
//     console.log("orange color was completed");
// });



h1 = document.querySelector("h1");

function changeColor( color, delay) {     //three parameter is passed ,nextcolorChange become deleted due to apply promises here
    return new Promise((resolve , reject ) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() *5) +1;
            if(num>3){
                reject("promise rejected");
            }

            h1.style.color = color;
            console.log(`colorchange to ${color}`);
            resolve("color changed!")
        },delay);
    })
};

// handling rejection with await by using try and catch

async function deno() {
    try{
        await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("gren", 1000);
    await changeColor("orange", 1000);
    await changeColor("blue", 1000);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }

let a = 5;
console.log(a);
console.log("new number =" ,a + 3)
}
