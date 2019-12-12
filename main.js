let advice = ['Nie poddawaj się!', 'Dasz radę!', 'Głowa do góry!', 'Idź spać, jutro będzie lepiej!', 'A może cukierka?', 'a'];

const input = document.querySelector('#advice');
const add_advice = document.querySelector('#add_advice');
const reset = document.querySelector('#reset');
const show_advice = document.querySelector('#show_advice');
const show_all_advice = document.querySelector('#show_all_advice');
const random_advice = document.querySelector('#random_advice');

const f_add_advice = (e) => {
    e.preventDefault();
    random_advice.textContent = '';
    advice.push(input.value);
};

const f_reset = (e) => {
    e.preventDefault();
    random_advice.textContent = '';
    while (advice.length > 6) {
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
    console.log(advice);
    const old_advice = random_advice.textContent;
    console.log(`Poprzednie słowo: ${old_advice}`);
    const new_advise = Math.floor(Math.random() * advice.length);
    console.log(`Nowe słowo: ${advice[new_advise]}`);
    if (old_advice === advice[new_advise]) {
        console.log('powtórka');
        f_show_advice();
        return false;
    }
    random_advice.textContent = advice[new_advise];
};


add_advice.addEventListener('click', f_add_advice);
reset.addEventListener('click', f_reset);
show_all_advice.addEventListener('click', f_show_all_advice);
show_advice.addEventListener('click', f_show_advice);