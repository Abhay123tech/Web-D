// keyboard events -> keydown ,keyup..etc
// btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event)
//     console.log("button clicked");
// });

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("dblclick")
// });



// let inpu = document.querySelector("input");
// inpu.addEventListener("keydown", function(event){  //keydown
//     // console.log(event)
//     // console.log("key =", event.key);     //event object
    
//     console.log("key was pressed");       //ArrowUp, ArrowDoun, ArrowLeft, ArrowRight 
    
//     console.log("code =",event.code);
//     if(event.code=="ArrrowUp"){
//         console.log("character moves forward");
//     }else if(event.code=="ArrowDown"){
//         console.log("character moves backword");
//     }else if(event.code=="ArrowLeft"){
//         console.log("character move left");
//     }else if(event.code=="ArrowRight"){
//         console.log("character move right");
//     }else 
//     console.log("character can not move");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keyup", function(){     //keyup
//     console.log("key was released");
// });

// form event ->we use event.preventDefalt()

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();      //prevent from default
//     console.log("form registered");
// });

// Extracting Form data
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.dir(form);   //for direct acces with the help of formobject
//     //we use this.element[0] for direct access
// // let user = document.querySelector("#user");
// // let pass = document.querySelector("#pass");

// // console.log(user.value);
// // console.log(pass.value);  //for input innerText we use value

// // alert(`Hi ${user.value},your password is safe to ${pass.value}`)
// });


//More events
let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
});
let user = document.querySelector("#user");

user.addEventListener("change",function(){  //change is used to trace b/w inetial to final state eg. press button
    console.log("change event");
    console.log("final value = ", user.value);
});

user.addEventListener("change",function(){  
    console.log("input event");                 //input event used for single event changes ,eg ->a,b
    console.log("final value = ", user.value);
})

