/* Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
*/
const fnA = function (parameter) {
    const innerVariable = 'значение внутренней переменной функции fnA';

    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Это вызов innerFunction');
    };

    return innerFunction;
};

// const fnB = fnA(555);

// fnB();

// console.log(fnB);


/*
*     Поварёнок
*/
const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name}, is cooking: ${dish}`);   // Mango, is cooking: apple pie  // Mango, is cooking: coffee  // Poly, is cooking: pancakes  // Poly, is cooking: eggs and bacon
    };

    return makeDish;
};

const mango = makeSheff('Mango');

mango('apple pie');
mango('coffee');

console.dir(mango);   // ƒ makeDish(dish)

const poly = makeSheff('Poly');

poly('pancakes');
poly('eggs and bacon');

console.dir(poly);    // ƒ makeDish(dish)


/*
*    Округлятор 🤷‍♂️
*/
const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint); // 3
const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46


// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.14567, 2));    // 3.15
// console.log(rounder(3.8567, 3));     // 3.857
// console.log(rounder(5.1234, 2));     // 5.12
// console.log(rounder(3.4567, 3));     // 3.457

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

const rounder1 = rounder(2);
const rounder2 = rounder(3);

// console.log(rounder1(3.14567));  // 3.15
// console.log(rounder2(3.8567));   // 3.857
// console.log(rounder1(5.1234));   // 5.12
// console.log(rounder2(3.4567));   // 3.457


/*
 * Приватные данные и функции - скрытие реализации, интерфейс
*/
const myLibFactory = function () {
    let value = 0;

    const add = function (num) {
        value += num;
    };

    return {
        add: add,
        getValue() {
            return value;
        },
    };
};

const myLib = myLibFactory();

console.log(myLib);                // {add: ƒ, getValue: ƒ}
console.log(myLib.getValue());     // 0

myLib.add(10);
console.log(myLib.getValue());     // 10


const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    // const changeBy = function (amount) {
    //     salary += amount;
    // };
    return {
        raise(amount) {
            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current() {
            return `Текущая зарплата ${employeeName} - ${salary}kr`;
        },
    };
};

const salaryManager = salaryManagerFactory('Dimon', 26900);

console.log(salaryManager.current());       // Текущая зарплата Dimon - 26900kr