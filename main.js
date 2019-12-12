let advice = ['Nie poddawaj się!', 'Dasz radę!', 'Głowa do góry!', 'Idź spać, jutro będzie lepiej!'];

const input = document.querySelector('#advice');
const add_advice = document.querySelector('#add_advice');
const reset = document.querySelector('#reset');
const show_advice = document.querySelector('#show_advice');
const show_all_advice = document.querySelector('#show_all_advice');
const random_advice = document.querySelector('#random_advice');
let advice_lenght = advice.length;
console.log(advice_lenght);

const f_add_advice = (e) => {
    e.preventDefault();
    random_advice.textContent = '';

    advice.push(input.value);
    console.log(advice);
};

const f_reset = (e) => {
    e.preventDefault();
    random_advice.textContent = '';
    while (advice.length > 4) {
        advice.pop();
    }
    console.log(advice);
};

const f_show_all_advice = (e) => {
    e.preventDefault();
    random_advice.textContent = '';
    advice.forEach(item => {
        console.log(`${item}, `);
        random_advice.textContent += `${item}, `;
    })
};

const f_show_advice = () => {
    const one_advise = Math.floor(Math.random() * advice.length);
    random_advice.textContent = advice[one_advise];
};


add_advice.addEventListener('click', f_add_advice);
reset.addEventListener('click', f_reset);
show_all_advice.addEventListener('click', f_show_all_advice);
show_advice.addEventListener('click', f_show_advice);

