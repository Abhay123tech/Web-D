// use of this->use for specific element which is create by event hander

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log(this);   //here this = button
    console.log(this.innerText);  //innertext of button is printrd
    this.style.backgroundColor = "pink"
})

let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changecolor(){
    console.log(this.innerText);
    this.style.backgroundColor = "red"
}

h1.addEventListener("click", changecolor);
h3.addEventListener("click", changecolor);
p.addEventListener("click", changecolor);

//