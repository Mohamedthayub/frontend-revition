const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const ampm = document.querySelector('.ampm');

function time() {
    let now = new Date();
    let hours = now.getHours();
    let minutes  = now.getMinutes();
    let seconds = now.getSeconds();
    if(hours > 12){
        hours =  hours - 12;
        hour.textContent = hours;
    }
   
}

setInterval(time,1000);


