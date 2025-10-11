// call stack

function hello() {
    console.log("inside hello fnnction");
    console.log("hello");
};

function demo(){
    console.log("calling hello function");
    hello();
}

// function wala phle execute nhi hote bcoz does not effect on js

console.log("calling demo function");
demo();

console.log("done, byy");

//visulization of the call stack

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}
three();   // output -> 3



// js in single threaded  ->js me ekk time pe ekk work only
setTimeout(() => {
    console.log("apna collage");
}, 2000);

// console.log("hello....");


// but browser is not single threaded it is multi threaded
setTimeout(() => {
    console.log("welcome to");
}, 2000);

setTimeout(() => {
    console.log("apna collage")
},2000)

console.log("hello....");

// synchronized->ekk he way me sare function execute hona
// Asynchronized->not in appropriate way randomaly changed the way of the execuion


    // CALLBACK HELL
h1 = document.querySelector("h1");

// setTimeout(()=> {
//     h1.style.color = "red"
// }, 1000);

// setTimeout(()=>{
//     h1.style.color = "brown"
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "blue"
// },3000)

// we right this 3 call hell by a function decleration

// function changeColor( color, delay){
//     setTimeout(()=>{
//         h1.style.color = color;
//     },delay);
// }
// changeColor("red",1000);
// changeColor("yellow",2000);
// changeColor("blue", 3000);


// CALLBACK HELL WITH NESTING

function changeColor( color, delay) {     //three parameter is passed ,nextcolorChange become deleted due to apply promises here
    return new Promise((resolve , reject ) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!")
        },delay);
    })
}

changeColor("red", 1000)
.then(()=> {
    console.log("red color was completed");
    return changeColor("blue",1000);
})
.then(()=> {
    console.log("blue colo was completed");
    return changeColor("green", 1000);
})

.then(()=> {
    console.log("green color was completed");
    return changeColor("orange",1000);
})

.then(()=>  {
    console.log("orange color was completed");
});

// not write CATCH PROMISE bcoz every time color is available and completed



//in it also a pending state after complete of pending time they will be executed

// changeColor("red", 1000, () => {
//     changeColor("blue", 1000, ()=> {
//         changeColor("green", 1000, () =>{
//             changeColor("orange", 1000);
//         });
//     });
// });


// PROMISES ->it is an object in it we have two thing resolve and reject(succes and failore) 

// function savetoDb(data) {
//     let internetSpeed = Math.floor(Math.random()*10) +  1;
//     if (internetSpeed > 4){
//         console.log("high connection your data was saved :", data);
//     }else {
//         console.log("weak connection your data was not saved");
//     }
// };

//     savetoDb("apna collage");

// function savetoDb(data){
//     return new Promise((success, failure) => {
//         let internetSpeed = Math.floor(Math.random * 10) + 1;
//         if(internetSpeed > 4){
//             success("success : data was saved");
//         }else{
//             failure("failure : weak connection");
//         }
//     });
// };

// // promises then() and catch()

// let request = savetoDb("apna collage");  //req = promise object
// request
//     .then(() => {
//     console.log("promise was resolve");
//     console.log(request);
// })
//     .catch(()=> {
//         console.log("promise was reject");
//         console.log(request);
//     });


    //PROMISES CHANING  we use various then and only one catch block
    // savetoDb("apna collage")
    // .then((result)=>{
    //     console.log("request was saved :",result);
    // })
    // .then((result)=> {
    //     console.log("request 2 was saved", r);
    // })
    // .catch((error)=> {
    //     console.log("request was not saved:" , error);
    // });


    //LET's  APPLY PROMISES TO OUR CALLBACK HELL
