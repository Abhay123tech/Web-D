// TODO APP

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = ""; //for automatic delet from input
});

// let delBtns = document.querySelectorAll(".delet");  //.is used for acces of calss

// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         // console.log("button was deleted");
//         let par = this.parentElement;
//         // console.log(par);
//         par.remove();
//     })
// }

// event Degletion->it is used to apply same concept in new form element
// bubling is used here

ul.addEventListener("click", function (event) {
  //bubbling concept is used here
  console.log(event.target.nodeName); //used to trigger the event name
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    // console.log(listItem);
    listItem.remove();
    console.log("deleted");
  }
});
