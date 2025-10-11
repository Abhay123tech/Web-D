// scope-> kiss variabe ko khaa use kiya jata hai , 1-function, 2-block, 3-lexical, 4-global

// 1-function scope->variable define inside a function only ,not accessible outside the function

let sum = 77; //global scope


function calsum(a,b){
    let sum = a+b;     //function scope ,kewal andar ka variable exist hota hai
    console.log(sum);
}
    calsum(1,2);

    console.log(sum);  //globar scope is used bcoz it is in outer


        // Block Scope ->variable declared inside a {} curley brases only, can not accessable outside the block

    {
        let a = 25;
        console.log(a); //block scope which work only under the {}
    }

    for(let i=0; i<=7; i++){
        console.log(i);      //block scope
    }

        // console.log(i);    it is not defined in block scope bcoz out of {} ,and show error

    let age = 20;
    if(age>=18) {
        let str = "adult";
        console.log(str);
    }


        // Lexical scope->used nested function concept
        // bhar wale variable ko andar wala function use kr shakta hai ,but andar wala bhar wale ko nhi

        function outerFun(){
            let x =5;
            let y =20;
                function innerFun() {
                    console.log(y);
                }
                innerFun();
        }
        console.log(outerFun);

//   higher order function      
        
        function multipleGreet(func,Count){   //higher order function
            for(let i=1; i<=Count; i++){
                func();
            }
        }
        let greet = function(){
            console.log("hello");
        }
        multipleGreet(greet,9);

        //higher order function part- 2

        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        odd();
        
        let even = function(n) {
            console.log((n%2==0));
        }
        even();



        function oddOrEvenFactory(request){
            if(request == "odd"){
                    let odd = function(n){
                        console.log(!(n%2 == 0));
                    }
                    return odd;

                }else if(request == "even"){
                    let even = function(n) {
                        console.log((n%2==0));
                    }

                    return ever;
                }else{
                    console.log("wrong request");
                }
        }        
    let request="odd";

           // methods-> action that can performed on an object

        const calculator= {
            add: function(a,b){
                return a + b;
            },
            sub: function(a,b){
                return a-b;
            },
            mul: function(a,b){
                return a*b;
            }
        };


        console.log(calculator.sub(5, 6));  // 5-6 =-1

        // method shorthand
        const calculators = {
            add(a,b){
                return a+b;
            },
            sub(a,b){
                return a-b;
            }
        };