let displaytime = document.querySelector('.displaytimer');
let stoptime = document.getElementById("stop");
let starttime = document.getElementById("start");
let resettime = document.getElementById("reset");

let sec = 0;
let min = 0;
let hrs = 0;


let timer = null;

starttime.addEventListener('click',function(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(Starttimer,1000);
});

stoptime.addEventListener('click',function(){
    clearInterval(timer);

});

resettime.addEventListener('click',function(){
    clearInterval(timer);
    displaytime.innerHTML = `00:00:00`;
    sec=min=hrs=0; 
});

function Starttimer(){
    sec++;
    if(sec ==60){
        sec = 0;
        min++;
        if(min==60){
            min = 0;
            hrs++;
    
        }
    }
    let secString = sec< 10 ? `0${sec}`:sec;
    let minString = min< 10 ? `0${min}`:min;
    let hrsString = hrs< 10 ? `0${hrs}`:hrs;

    displaytime.innerHTML = `${hrsString} : ${minString} :${secString}`;
    
}
