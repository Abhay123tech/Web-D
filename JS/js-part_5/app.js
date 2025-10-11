// object literals->used to store keyed collections and complex entities
const student = {
    name: "karan",
    age: "25",
    marks: "90%"
};
console.log(student);

const item = {
    price: 100,
    color: ["red","pink"],
    discount: "20%"
};
console.log(item);

// Thread
const post = {
    username: "abhayjaiswal",
    content: "blogging",
    like: "900k",
    repost: 10,
    tags: ["#apnacollage","#delta"]
};
console.log(post);

// get value simply write -> object["key"] or object.key
let students = {
    name : "rohit",
    marks : 94,
};
console.log(students["name"]);
console.log(students.marks);

// conversion in get value -> apne aap variabl ko string me convert kr detta hai, dot  operator can not convert it into a string

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e",
};
console.log(obj.true);
console.log(obj["1"]);

// Add update value ,change the name of place
const boy = {
    name: "Rohit",
    age: 21,
    marks: 84.4,
    city: "ropadandi",
};
console.log(boy);
    boy.city="lucknow";
    console.log(boy.city);
    console.log(boy["city"]);

    boy.age = "30";
    console.log(boy.age);

// Nested object -> object ke andar object
    const classinfo = {
        anuj : {
            grade: "A++",
            city: "noida",
        },
        Abhishek : {
            grade : "A",
            city: "roberstganj",
        },
        Abhay : {
            grade: "A+",
            city: "sonebhadra",
        }
    };
    console.log(classinfo);
    console.log(classinfo.Abhay);
    console.log(classinfo.Abhay.city);

    classinfo.Abhay.city="obra",
    console.log(classinfo.Abhay.city);

    // Array of object
    const Classinfo = [
        {
            name : "ashish",
            grade: "A++",
            city: "noida",
        },
        {
            name : "aman",
            grade : "A",
            city: "roberstganj",
        },  
        {
            name : "ashu",
            grade: "A+",
            city: "sonebhadra",
        },
    ]
    console.log(Classinfo);
    console.log(Classinfo[2].name);

    Classinfo[0].grade = "B++"
    console.log(Classinfo[0].grade);

    // maths object  
    let step1 = Math.abs(12)
    console.log(step1);

    let step2 = Math.pow(2,5)  //pow means power here
    console.log(step2);

    let step3 = Math.floor(3.5) //floor means nearest low
    console.log(step3);

    let step4 = Math.ceil(3.2)  //ceil means nearest bigger
    console.log(step4);

    let step5 = Math.random() //print any random value b/w 0 to 1
    console.log(step5);

    // Random integer from 1 to 10 range
    
    let num = Math.random();
    console.log(num);

    num = num * 10;  //bcoz between 1 to 10 
    console.log(num);

    num = Math.floor(num);
    console.log(num);

    let x = Math.floor(Math.random() * 100);  //merge above 3 variable in a single variable bcoz of 100  reasult is varry b/w 10 to 100
    console.log(x);

    num = num + 1 ;
    console.log(num);

    // Gaming
    const max = prompt("enter the max number");

    const random = Math.floor(Math.random() * max) + 1;
    
    let guess = prompt("guess the number");

    while(true) {
        if(guess == "quit");{
        console.log("user quit");
            break;
        }
        if(guess == random) {
        console.log("congrates your random selection is true");
            break;
        } else if (guess < random) {
            guess = prompt("your gussing was to small please try again");
        }else {
            guess = prompt("your gussing was too large please try again");
        }
    }

