const display = document.getElementById("d");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval = null;

// START
start.addEventListener("click", function () {
    if (timeInterval) return;

    startTime = Date.now() - elapsedTime;

    timeInterval = setInterval(function () {
        elapsedTime = Date.now() - startTime;
        updateDisplay(elapsedTime);
    }, 10);
});

// STOP (pause)
stop.addEventListener("click", function () {
    clearInterval(timeInterval);
    timeInterval = null;
});

// RESET
reset.addEventListener("click", function () {
    clearInterval(timeInterval);
    timeInterval = null;
    elapsedTime = 0;
    display.textContent = "00:00:00";
});

// DISPLAY FUNCTION
function updateDisplay(time) {
    let milliseconds = Math.floor((time % 1000) / 10);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);

    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}
