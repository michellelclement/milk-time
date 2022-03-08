//Time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Stopwatch function
function timer (){

    seconds++;

    //Logic to determine when to increments next value
    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    //Display updated time values to user
    document.getElementById("time-display-left").innerHTML = hours + ":" + minutes + ":" + seconds;
}

window.setInterval(timer, 10);



