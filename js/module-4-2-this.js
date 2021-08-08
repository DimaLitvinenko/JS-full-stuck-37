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

