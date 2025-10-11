// todo is a type of list  we implemented it in form of array
let todo = [];

let req = prompt("please enter your request");

    while(true){
        if(req == "quit"){
            console.log("quitting app");
            break;
        }
        
        if(req == "list"){
            console.log("-----------");
            for(let i=0; i< todo.length; i++){
                console.log(i+1,todo[i]);
            }
            console.log("-----------");
        }else if (req == "add"){
            let task = prompt("please enter the task which you want to add");
            todo.push(task);
            console.log("task added");
        }
        else if(req == "delete"){
            let idx = prompt("Please enter the task index you want to be deleted from todo.")
            todo.splice(idx,1);
        }
        else{
            req = prompt("Wrong reques ! Pleasse enter valid valid request.")
        }
        req = prompt("please enter your request");
    }
