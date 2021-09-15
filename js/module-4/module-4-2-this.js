/*
*   Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
*/

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function() {} === function() {}: ',
//     function () {} === function () {},
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);



/*
*  КОНТЕКСТ (this)
*    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
*    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
*/

/*
*   Как метод объекта. В контексте объекта.
*/

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();


/*
*   Вызов без контекста
*   - В строгом режиме = undefined
*   - Не в строгом режиме = window
*/

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();


/*
*   Как метод объекта, но объявлена как внешняя функция.
*   В контексте объекта.
*/

// const showTag = function () {
//     console.log(`showTag -> this`, this);
//     console.log(`showTag -> this.tag`, this.tag);
// };

// // showTag();

// const user = {
//     tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log(`user`, user);

// user.showUserTag();


/*
* Контекст в callback-функциях
*/

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();       //  undefined
// };

// invokeAction(user.showTag);


/*
*    Тренируемся 5
*/
const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment);  // undefined
// updateCounter(5, counter.decrement);   // undefined

counter.increment(10);   // value: 10    
counter.increment(10);   // value: 20



'use strict'
/* console.log(this)
* this - local variable
* this - is a pronoun of object for his props & methods
* определяется объектом, в контексте которого
* вызывается функция (expr || decl) not for arrow

* arrow this ссылается на контекст объекта, в котором
* эта функция была объявлена
*/


/*    EXAMPLE 1 ======

* Привязка объекта с Call & Apply с мгновенным вызовом
* Пример: вы зарегистрировались, отправив форму
* Из формы создан объект пользователя
* в объекте есть поле с именем
* которое можно использовать в качестве приветствия
* на странице личного кабинета
* В качестве других параметров могут служить переменные
* именем закрепленного менеджера и номером группы
*/
const bestUser = {
    name: 'Alex',
    age: 55,
};

const newUser = {
    name: 'Dima',
    age: 27,
};

const toSayHello = function (manager, group) {
    // alert(
    // `Hello ${this.name}! We're glad to see you! I am your manager, you can call me ${manager}. Your group is ${group}.`
    // );
    console.log(
        `Hello ${this.name}! We're glad to see you! I am your manager, you can call me ${manager}. Your group is ${group}.`
    );
};

let manager = 'Simon';
let group = 37;
toSayHello.call(newUser, manager, group);   // Hello Dima! We're glad to see you! I am your manager, you can call me Simon. Your group is 37.

const data = [manager, group];
toSayHello.apply(bestUser, data);   // Hello Alex! We're glad to see you! I am your manager, you can call me Simon. Your group is 37.



/*    EXAMPLE 2 ======

*  this in CALLBACK - bind
*/
const product = {
    name: 'Banana',
    price: 25,
    changePrice(value) {
        return (this.price = value);
    },
};

const product1 = {
    name: 'Ananas',
    price: 50,
};

const showProduct = function (product, callback) {
    let price = callback();
    console.log(price);

    console.log(`The ${product} cost: ${price}kr now`);       
};

showProduct(product.name, product.changePrice.bind(product, 35));       // The Banana cost: 35kr now
showProduct(product1.name, product.changePrice.bind(product1, 99));     // The Ananas cost: 99kr now



/*
*  PRACTICE

*    1 and 2 
*/ 
const every = function (array, callback) {           //* ----- FUNCTION EXPRESSION *
    const results = [];

    for (let elem of array) {
        let condition = callback(elem);
        // console.log(condition);

        results.push(condition);
    };

    console.log(results);

    // if (results.includes(false)) {
    //     return false;
    // } else {
    //     return true;
    // };
    return results.includes(false) ? false : true;
};

const getLessThenTen = function (number) {
    // if (number < 10) {
    //     return true;
    // } else {
    //     return false;
    // };
    return number < 10 ? true : false;
};

const getMoreThenTen = function (number) {
    // if (number > 10) {
    //     return true;
    // } else {
    //     return false;
    // };
    return number > 10 ? true : false;
};

let result = every([1, 11, 2, 220, 3, 33], getLessThenTen);     // [true, false, true, false, true, false]
// console.log(result);                                      // false

result = every([1, 2, 3, 4, 5], getLessThenTen);      // [true, true, true, true, true]
// console.log(result);                            // true

result = every([1, 2, 3, 23, 5], getMoreThenTen);     // [false, false, false, true, false]
// console.log(result);                            // false

result = every([12, 45, 67, 11], getMoreThenTen);     // [true, true, true, true]
// console.log(result);                            // true


/*
*    3
*/
function compact(array, callback) {           //* ----- FUNCTION DECLARATION *
    const newArray = [];

    for (let value of array) {
        // console.log(Boolean(value));

        // if (Boolean(value)) newArray.push(value);
        callback(value, newArray);
    };

    return newArray;
};

function getFalsyValues(element, falsyValues) {
    if (!Boolean(element)) falsyValues.push(element);
};

function getTruthyValues(element, truthyValues) {
    if (Boolean(element)) truthyValues.push(element);
};

console.log(compact([1, 0, '', null, 'Hello'], getFalsyValues));                // [0, "", null]
console.log(compact([Infinity, ' ', {}, []], getFalsyValues));              // []   
console.log(compact(['', 0, NaN, null, undefined, false], getFalsyValues));       // ["", 0, NaN, null, undefined, false]   ===  SIX FALSY VALUES ***

console.log(compact([1, 0, '', null, 'Hello'], getTruthyValues));              // [1, "Hello"]
console.log(compact([Infinity, ' ', {}, []], getTruthyValues));            // [Infinity, " ", {…}, Array(0)]
console.log(compact(['', 0, NaN, null, undefined, false], getTruthyValues));      // []   ===  SIX FALSY VALUES ***


/*
*    4
*/
const ordersA = [
    { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
    { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
    { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
];

const ordersB = [
    { name: 'Phone', price: 12300, deliveryProgress: 45, type: 0 },
    { name: 'Tablet', price: 5000, deliveryProgress: undefined, type: 2 },
];

const showDeliveryStatus = function (array) {
    // let progress;
    let message;
    const results = [];

    for (let order of array) {
        // progress = order.deliveryProgress
        let { deliveryProgress: progress } = order;

        console.log(order);
        console.log(progress);

        if (progress === 100) {
            message = `Done`
            results.push(message);
        } else if (progress < 100 && progress >= 1) {
            message = `In progress`
            results.push(message);
        } else if (progress === null) {
            message = `Ready to delivery`
            results.push(message);
        } else {
            message = 'Not Ordered'
            results.push(message);
        };
    };
    
    return results.join(', ');
};

console.log(showDeliveryStatus(ordersA));       // In progress, Done, Ready to delivery

console.log(showDeliveryStatus(ordersB))        // In progress, Not Ordered