let advice = ['Nie poddawaj się', 'Dasz radę'];

const input = document.querySelector('#advice');
const add_advice = document.querySelector('#add_advice');
const reset = document.querySelector('#reset');
const show_advice = document.querySelector('#show_advise');
const show_all_advice = document.querySelector('#show_all_advice');
let advice_lenght = advice.length;
console.log(advice_lenght);

const f_add_advice = (e) => {
    e.preventDefault();
    advice.push(input.value);
    console.log(advice);
};

const f_reset = (e) => {
    e.preventDefault();
    while (advice.length > 2) {
        advice.pop();
    }
    console.log(advice);
};


add_advice.addEventListener('click', f_add_advice);
reset.addEventListener('click', f_reset);

