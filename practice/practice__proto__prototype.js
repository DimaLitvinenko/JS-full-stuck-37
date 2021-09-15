let a = { value: 18 };

let b = {
    age: a,
};

let c = b;

console.log(b);                     // { age: {value: 18} }

console.log(a === b.age);           // true
console.log(a === c);                   // false

b.age.value = 21;

console.log(a.value === 21);        // true
console.log(c.value === 21);            // false


/*     ❗ ❗ ❗
 * ⮚ __proto__ - это обьект. 
 *   при том разные __proto__ разных по 'типу' обьектов - 
 *   совершенно независимые разные обьекты. 
  
 * ⮚ У одинаковых по 'типу' обьектов __proto__ равны, 
 *   то есть это один и тот же обьект.
 
 * ⮚ Любой обьект создаеться с помощью класса 
 *   (функция создаеться с помощью класса new Function).
 
 * ⮚ У всех обьектов ЕСТЬ свойство __proto__.
 
 * ⮚ Чтобы понимать, что это за __proto__, 
 *   нужно ТОЧНО знать с помощью какой функции-конструктора
 *   (класса) создан данный обьект (new XXX()).
 
 * ⮚ prototype - это обьект.
  
 * ⮚ Каждый prototype - это независимый обьект, сам по себе,
 *   с определенным набором свойств и методов. 
  
 * ⮚ prototype ЕСТЬ у любого класса либо у функции обьявленой
 *   с помощью function.
 
 * ⮚ У стрелочной функции НЕТ prototype.

 * ⮚ __proto__ любого обьекта ссылается на prototype класса 
 *   (функии-конструктора), с помощью которой этот обьект был создан.
*/


// Обьект не равен обьекту (это ссылки):
console.log({} != {});                                       // true ✅

// А __proto__ обьектов равны между собой:  
console.log({}.__proto__ === {}.__proto__);                  // true ✅

// __proto__ ссылается на prototype класса с помощью которого был создан
let man = {};
console.log(man.__proto__ === Object.prototype);             // true ✅

let users = [];
console.log(users.__proto__ === Array.prototype);            // true ✅

let value = 27;
console.log(value.__proto__ === Number.prototype);           // true ✅

let youTube = 'it-kamasutra';
console.log(youTube.__proto__ === String.prototype);         // true ✅

const getSomething = function () { };
console.log(getSomething.__proto__ === Function.prototype);  // true ✅

class Samurai {
    constructor(name) {
        this.name = name
    }
    hello() {
        alert(this.name);
    }
};
console.log(Samurai.prototype);                                  // {constructor: ƒ, hello: ƒ}
console.log(Samurai.__proto__ === Function.prototype);        // true ✅

const shogun = new Samurai('Dimych');
console.log(shogun.prototype);                                   // undefined ✘
console.log(shogun.__proto__ === Samurai.prototype);          // true ✅  

const shogun2 = new Samurai('Viktor')
console.log(shogun.__proto__ === shogun2.__proto__);          // true ✅



console.log(({}).prototype);                                               // undefined ✘
console.log(({}).__proto__);                                            // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// 01 
console.log(({}).prototype === ({}).__proto__);                     // false ❌


function ITIncubator() { }
function ITKamasutra() { }
console.log(ITKamasutra.prototype);                                      // {constructor: ƒ}
console.log(ITKamasutra.__proto__);                                      // ƒ () { [native code] }

// 02 
console.log(ITKamasutra.prototype === ITKamasutra.__proto__);       // false ❌

// 03 
console.log(ITIncubator.__proto__ === ITKamasutra.__proto__);       // true ✅

// 04 
console.log(ITIncubator.prototype === ITKamasutra.prototype);       // false ❌


let Component = (props) => {
    return `<div>I don't know Prototype</div>`
}
console.log(Component.prototype);                                           // undefined ✘
console.log(Object.prototype);                                           // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// 05 🚩
console.log(Component.prototype === Object.prototype);              // false ❌


const count = 12;
console.log(count.__proto__);                                            // Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}

let age = 27;
console.log(age.__proto__);                                              // Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
console.log(age.prototype);                                                 // undefined ✘

console.log(Number.__proto__);                                              // ƒ () { [native code] }
console.log(Number.prototype);                                           // Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}

// 06 🚩
console.log(age.prototype === Number.prototype);                     // false ❌

// 07 🚩
console.log(age.__proto__ === Number.prototype);                     // true ✅

class Hacker { }
console.log(Hacker.__proto__);                                           // ƒ () { [native code] }
console.log(Hacker.prototype);                                           // {constructor: ƒ}

// 08 🚩
console.log(Hacker.__proto__ === Function.prototype);                // true ✅

// 09 🚩
console.log(ITIncubator.__proto__ === Function.prototype);           // true ✅

// 10 🚩
console.log(count.__proto__ === Number.prototype);                   // true ✅

