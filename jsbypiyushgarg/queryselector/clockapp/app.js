            //use of setTime and setInterval

button = document.getElementById('stop-btn');

function showTime(){
    const currentTime=new Date();//currentTimeis inbuilt in js
    // console.log(currentTime);
    const time = `${currentTime.getHours()} :${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    document.getElementById('time').innerText=time;
}

// showTime();
setTimeout(()=> console.log("hi"), 2000); //at one time
// setInterval(()=> console.log("hi"), 2000); //after

let interval=setInterval(showTime 1000);

button.addEventListener("click" , () => {
    clearInterval(interval);//inbuild function hota h to clear 
});
