// selective element
//1getElementByIdname
//2 getelementsByClassName (of selecive name)->return element as an html collection{link}

// let smallImages = document.getElementsByClassName("oldImg");

// for (let i =0; i<smallImages.length; i++){
//     smallImages[i].src = "/js/js-part_8/spiderman_img.png";
//     console.log('value of image no. $(i) is changed.');       //i->image ,src->imagelink
// }

//3 getElementByTagName->return element as an html collection of{paragraph,list tag}


// Query Selectors-> similar to csss selector ,allow us to use any csss selector

console.dir(document.querySelector("p"));    //selector for 1st p element, single value

console.dir(document.querySelector("#description"));  //for id selector

console.dir(document.querySelector(".oldImg"));   //for class selector

console.dir(document.querySelectorAll("div a"));   //query selector all is used to select all paragragh present in html

// Setting content in object ->three types , 1-innertext ,2->textContent,3->innerHTML
let para = document.querySelector("p");
console.dir(para);

console.dir(para.innerText);   //normal text 
console.dir(para.textContent);   // also include hidden text
console.dir(para.innerHTML);    //html tag also included

// manipulation attribute , 1->obj.getAttribute(attr), 2-> obj.setAttribute(attr,val)

let img = document.querySelector("img");
console.dir(img);
console.dir(img.getAttribute("id"));
console.dir(img.setAttribute("id","spidermanImg"));

// Manipulation Style
console.dir(img.style);

// let heading = document.querySelector("h1");
// console.dir(heading.style.color = "purple");


// classList property-> object.classList.add() or remove, or contain ,or toggle

let heading = document.querySelector("h1");
    console.dir(heading.classList.add("green"));
    // console.dir(heading.classList.remove("green"));

    console.dir(heading.classList.contains("underline"));  // containList check class is exist in list or not
    console.dir(heading.classList.contains("green"));

// toggle-> In simple word we say that toggle work just opposite ,
// if class is exist in class list it return false & if class doesnot exist in class it return true value
    console.dir(heading.classList.toggle("green"));   //use add & remove,just opposite   eg->switch
    console.dir(heading.classList.toggle("underline")); 

// let box = document.querySelector(".box");
// console.dir(box.classList.add("redbg"));

// Navigation->transfr from one place to another , type->1-parentElement ,2-children,
//  3-previous/nextElementSiblings

let h4 = document.querySelector("h4");
    console.dir(h4.parentElement);
    console.dir(h4.children);

let div = document.querySelector("div");
    console.dir(div.children);

let ul = document.querySelector("ul");
    console.dir(ul.children);

// Aaddiing Element 1->appendChild ,2->apppend add in last, 3->prepand for add in start
// 4->insertAdjacent->(where,element)->khaa add krna chate hai , kiss element ko add krna chate hai

let newp = document.createElement("p");
console.dir(document.createElement("p"));
console.dir(newp);
newp.innnerText="hi i am abhay jaiswal";
console.dir(newp.innnerText);
    
let box = document.querySelector('.box');
    box.appendChild(newp);


let btn = document.createElement('button');
console.dir(btn.innerHTML = "NEW BUTTON");

let p = document.querySelector("p");
console.dir(p);
console.dir(btn);
p.insertAdjacentElement("beforebegin",btn);   //paragraph suru hone ke phle

p.insertAdjacentElement("afterbegin",btn); //paragraph suru hone ke just bad ,in paragraph
p.insertAdjacentElement("beforeend",btn);  // paragraph ke andar khatam hone ke phle
p.insertAdjacentElement("afterend",btn);   //after paragraph khatam hone ke bad

// remove element ->work just opposite as apppend child and append
// 1->removeChild(element) , 2->remove(element)

let body = document.querySelector("body");
body.removeChild(btn);     //remove the button
// body.remove()   ->remove the whole body content 




