

const randomNumber = Math.floor(Math.random() * 100) + 1;



const input = document.getElementById("guessInput");
const button = document.getElementById("checkbtn");

const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");


let attempts = 0;

button.addEventListener("click", () => {
    const guess = Number(input.value);

    attempts++;

    if (guess < 1 || guess > 100) {
        message.textContent = "Enter number between 1 and 100";
        return;
    }

    if (guess === randomNumber) {
        message.textContent = "Correct you guess";
    }
    else if (guess < randomNumber) {
        message.textContent = "To low";
    }
    else {
        message.textContent="Too high"
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;

})