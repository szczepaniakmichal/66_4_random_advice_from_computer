let advice = ['Nie poddawaj się!', 'Dasz radę!', 'Głowa do góry!', 'Idź spać, jutro będzie lepiej!', 'A może cukierka?'];

const input = document.querySelector('#advice');
const add_advice = document.querySelector('#add_advice');
const reset = document.querySelector('#reset');
const show_advice = document.querySelector('#show_advice');
const show_all_advice = document.querySelector('#show_all_advice');
const random_advice = document.querySelector('#random_advice');

const check_values = () => {
    if (input.value.length === 0) {
        return false;
    }
    advice.forEach(item => {
        if (item === input.value) {
            random_advice.textContent = `"${item}" Taka porada już istnieje. Nie możesz jej dodać.`;
            return false;
        }
    });
};

const f_add_advice = (e) => {
    e.preventDefault();
    random_advice.textContent = '';
    if (check_values()) {
        advice.push(input.value);
    }
};

const f_reset = (e) => {
    e.preventDefault();
    random_advice.textContent = '';
    while (advice.length > 5) {
        advice.pop();
    }
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

