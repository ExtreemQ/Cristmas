



// counter start

const christmas = " 16 Dec 2022"

const daysDiv = document.getElementById("days")
const hoursDiv = document.getElementById("hours")
const minsDiv = document.getElementById("mins")
const secondsDiv = document.getElementById("seconds")


function countdown(){
    const cristmasday = new Date(christmas)
    const currentday = new Date();

    const totaltime = (cristmasday- currentday)/1000;
    const days = Math.floor(totaltime / 3600 /24);

    const hours = Math.floor(totaltime /3600) % 24;

    const mins = Math.floor(totaltime / 60) % 60;

    const seconds = Math.floor(totaltime) % 60;

    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minsDiv.innerHTML = mins;
    secondsDiv.innerHTML = seconds;

    console.log(totaltime);
}
countdown();
setInterval(countdown, 1000);

  // counter end

