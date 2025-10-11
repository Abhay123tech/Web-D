// Q-1 create a function to write a poem

    function poem(){
        console.log("Johnny, Johnny Yes, Papa? Eating sugar?No, Papa.Telling lies?No, Papa.Open your mouth.Ha-ha-ha!")
    }
        poem();

// Q-2 create a function to roll a dice & always display the value of the dice.

    function rolldice() {
        let dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice);
    };
    rolldice();

// Q-3 create a function that gives us a average of 3 numbers.

    function printaverage(a,b,c){
        console.log((a+b+c)/3);
    }
        printaverage(6,7,8);
        printaverage(80,90,100);

// Q-4create a function that print the multiplication table of a number.

    function printtable(n){
        for (let i=n; i<=n*10; i+=n){
            console.log(i);
        }
    }
        printtable(2);
        printtable(15);

// Q-5 create a function that return the sum of number from 1 to n

    function printsum(n){
        let sum = 0;
            for (let i=1; i<=n; i++){
            sum = sum + i;
        }
        return sum;
    }

// Q-6 create a function that returns the concatenation(add all the string and return the larger string) of all the string into array.   

let str = ["hi","hello","byy","dear"];

    function concat(str) {
        let result ="";

            for(let i=0; i<str.length; i++){
                result += str[i];
            }
            return result;
    }
        console.log(concat(str));
