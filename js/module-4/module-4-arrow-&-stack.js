/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
*/

// 🚩 Явный возврат (explicit return):
const add = function (a, b, c) {
    console.log(arguments);                     // Arguments(3) [10, 15, 20, callee: (...), Symbol(Symbol.iterator): ƒ]
    return a + b + c;
};


const addArrow = (...args) => {
    console.log(args);                          // [10, 15, 20]
    // return a + b + c;
};

// const addArrow = (a, b, c) => a + b + c;

console.log(add(10, 15, 20));                   // 45
console.log(addArrow(10, 15, 20));              // 45


const fnA = function () {
    return {
        a: 5,
    };
};

console.log(fnA());                             // {a: 5} 


// 🚩 Неявный возврат (implicit return):
const arrowFnA = () => ({ arrow: 5 });

console.log(arrowFnA());                        // {arrow: 5}


// Фильтрация
const filter1 = (array, test) => {
    const filteredArray = [];

    for (const el of array) {
        // console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el)
        }
    };

    return filteredArray;
};

// const callback1 = value => value >= 3;

const r1 = filter1([1, 2, 3, 4, 5], value => value >= 3);
console.log(r1);                                                //  [3, 4, 5]

// const callback2 = value => value <= 4;

const r2 = filter1([1, 2, 3, 4, 5, 6, 7], value => value <= 4);
console.log(r2);                                                //  [1, 2, 3, 4]



// CALL STACK

// LIFO
// | 7 |
// | 6 |    Last In - First Out
// | 5 |
// | 4 |
// | 3 |
// | 2 |
// | 1 | functional execution context
// global/main  execution context

// first()

function first() {
  console.log(`this is 1 function STARTED`)
  second()
  console.log(`this is 1 function FINISHED`)
}
function second() {
  console.log(`this is 2 function STARTED`)
  third()
  console.log(`this is 2 function FINISHED`)
}
function third() {
  console.log(`this is 3 function STARTED`)
  fourth()
  console.log(`this is 3 function FINISHED`)
}
function fourth() {
  console.log(`this is 4 function STARTED`)
  fifth()
  console.log(`this is 4 function FINISHED`)
}
function fifth() {
  console.log(`this is 5 function STARTED`)
  sixth()
  console.log(`this is 5 function FINISHED`)
}
function sixth() {
  console.log(`this is 6 function STARTED`)
  console.log(`this is 6 function FINISHED`)
}