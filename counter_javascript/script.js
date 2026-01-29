

let count = 0;

const display = document.getElementById('count');

const add = document.getElementById('add');

const sub = document.getElementById('sub');


const reset = document.getElementById('reset');

add.addEventListener('click', () => {
    count ++ ;
    display.textContent = count;
})


sub.addEventListener('click', () => {
    count --;
    display.textContent = count;
})

reset.addEventListener('click', () => {
    count = 0;
    display.textContent = count;
})
// dc
