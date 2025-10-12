
//fail bcoz of dis-Advantage many copy create in memory
// function personMaker(name, age){
//     const person = {
//         name: name,
//         age:age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     }
//     return person;
// }

// Constructor- does not return anything & start with  capital  ->copy nhi banti
// function Person(name, age){
//     this.name=name;
//     this.age=age;
//     console.log(this);  //yha likhne se window create hota h
// }

// Person.prototype.talk = function(){
//     console.log(`Hi , my name is  ${this.name}`);
// };



class Person {
    constructor(name,age){  //contructor khali object banata h ushke andar value ko initiallize krta jata h
        this.name =name;
        this.age=age;
    }
    talk(){
        console.log(`hi , my name is ${this.name}`);
    }
}

let p1 = new Person("adam",25); //p1.talk === pe.talk return true due to prototype
let p2 = new Person("adm",25);



// let p1 = personMaker("adam",25);  //yha memory me alag alag rhte h so return false
// let p2 = personMaker("adm",25);