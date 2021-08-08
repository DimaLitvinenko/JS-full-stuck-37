// const counter = {
//     value: 0,
//     increment() {
//         console.log(`increment -> this`, this);
//         this.value += 1;
//     },
//     decrement() {
//         console.log(`decrement -> this`, this);
//         this.value -= 1;
//     },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// console.log(decrementBtn);      // ссылка на кнопку decrementBtn
// console.log(incrementBtn);      // ссылка на кнопку incrementBtn
// console.log(valueEl);           // ссылка на текст value

// decrementBtn.addEventListener('click', function () {
//     console.log(`Кликнули на декремент`);

//     counter.decrement();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function () {
//     console.log(`Кликнули на инкремент`);

//     counter.increment();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });


// closures
document.getElementById('dec').addEventListener('click', () => {
    let count = productCounter.decrement(1);
    console.log(count);

    document.getElementById('count').textContent = count;
});

document.getElementById('inc').addEventListener('click', () => {
    let count = productCounter.increment(1);
    console.log(count);

    document.getElementById('count').textContent = count;
});

const productCounter = createCounter();

function createCounter() {
    let current = 0;

    function increment(value) {
        return (current += value);
    };
    
    function decrement(value) {
        if (current <= 0) return
        return (current -= value);
    };

    return { increment, decrement };
};