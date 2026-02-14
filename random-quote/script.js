const quoteText = document.getElementById("quote");


const author = document.getElementById("author");

const button = document.getElementById("btn");




const quotes = [
    { text: "Be yourself everyone else is already taken.", author: "Oscar wilde" },
    { text: "the only way to do great work is to love what you do.", author: "siva" },
    { text: "success is not final ,failure is not fail.", author: "siva shankar" },
    { text: "stay hungry , stay foolish", author: "ram" }
];


button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);



    quoteText.textContent = `${quotes[randomIndex].text}`
    author.textContent =`- ${quotes[randomIndex].author}`


})