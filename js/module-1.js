// мультипарадигменный
// кроссплатформенный
// кроссбраузерный
// ES5 - 2009 и ES6 - 2015 ECMAScript
// слабая типизация (динамическая)


// String
const userName = 'Dimon'
console.log(userName);

const dataString = 'hello'
console.log(dataString);
console.log(typeof dataString);

let itIsString = '228'
console.log(itIsString);
console.log(typeof itIsString);

// Number
// let number = 4
// console.log(number);

// let age
// console.log(age);

// age = 27
// console.log(age);

// const birthYear = 1994
// console.log(birthYear);
// console.log(typeof birthYear);

// number = NaN
// console.log(number);
// console.log(typeof number);

// number = Infinity
// console.log(number);
// console.log(typeof number);

// Boolean
let isOnline = true
console.log(isOnline);
console.log(typeof isOnline);

// Undefined
// let message
// console.log(message);
// console.log(typeof messages);

// Null
let user = null
console.log(user);
console.log(typeof user);


// ==== To String 
let value = 0
let toString = String(value);
console.log(`${value}, через конструктор String: `, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию: `, typeof toString);


value = Infinity;
toString = String(value);
console.log(`${value}, через конструктор String: `, toString);
console.log(`${value}, через конструктор String: `, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию: `, typeof toString);

value = true;
toString = String(value);
console.log(`${value}, через конструктор String: `, toString);
console.log(`${value}, через конструктор String: `, typeof toString);

toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`${value}, через конкатенацию: `, typeof toString);


// ==== To Number
let valueString = "Hello";
let toNumber = Number(valueString);
console.log(`${valueString}, через конструктор Number: `, toNumber);
console.log(`${valueString}, через конструктор Number: `, typeof toNumber);

toNumber = +valueString;
console.log(`${valueString}, через унарный +: `, toNumber);
console.log(`${valueString}, через унарный +: `, typeof toNumber);

valueString = "";
toNumber = Number(valueString);
console.log(`пустая строка ${valueString}, через конструктор Number: `, toNumber);
console.log(`пустая строка ${valueString}, через конструктор Number: `, typeof toNumber);

toNumber = +valueString;
console.log(`пустая строка ${valueString}, через унарный +: `, toNumber);
console.log(`пустая строка ${valueString}, через унарный +: `, typeof toNumber);

valueString = true;
toNumber = Number(valueString);
console.log(`${valueString}, через конструктор Number: `, toNumber);
console.log(`${valueString}, через конструктор Number: `, typeof toNumber);

toNumber = +valueString;
console.log(`${valueString}, через унарный +: `, toNumber);
console.log(`${valueString}, через унарный +: `, typeof toNumber);

valueString = false;
toNumber = Number(valueString);
console.log(`${valueString}, через конструктор Number: `, toNumber);
console.log(`${valueString}, через конструктор Number: `, typeof toNumber);

toNumber = +valueString;
console.log(`${valueString}, через унарный +: `, toNumber);
console.log(`${valueString}, через унарный +: `, typeof toNumber);


// ==== To Boolean
let valueBool = "Hello";
let toBoolean = Boolean(valueBool);
console.log(`${valueBool}, через конструктор Boolean: `, toBoolean);
console.log(`тип данных ${valueBool}, через конструктор Boolean: `, typeof toBoolean);

toBoolean = !!valueBool;
console.log(`${valueBool}, через !!: `, toBoolean);
console.log(`тип данных ${valueBool}, через !!: `, typeof toBoolean);



valueBool = " ";
toBoolean = Boolean(valueBool);
console.log(`${valueBool}, через конструктор Boolean: `, toBoolean);
console.log(`тип данных строка с пробелом ${valueBool}, через конструктор Boolean: `, typeof toBoolean);

toBoolean = !!valueBool;
console.log(`${valueBool}, через !!: `, toBoolean);
console.log(`тип данных строка с пробелом ${valueBool}, через !!: `, typeof toBoolean);

valueBool = "";
toBoolean = Boolean(valueBool);
console.log(`${valueBool}, через конструктор Boolean: `, toBoolean);
console.log(`тип данных пустой строки ${valueBool}, через конструктор Boolean: `, typeof toBoolean);

toBoolean = !!valueBool;
console.log(`${valueBool}, через !!: `, toBoolean);
console.log(`тип данных пустой строки ${valueBool}, через !!: `, typeof toBoolean);

valueBool = 0;
toBoolean = Boolean(valueBool);
console.log(`${valueBool}, через конструктор Boolean: `, toBoolean);
console.log(`тип данных ${valueBool}, через конструктор Boolean: `, typeof toBoolean);

toBoolean = !!valueBool;
console.log(`${valueBool}, через !!: `, toBoolean);
console.log(`тип данных ${valueBool}, через !!: `, typeof toBoolean);

valueBool = NaN;
toBoolean = Boolean(valueBool);
console.log(`${valueBool}, через конструктор Boolean: `, toBoolean);
console.log(`тип данных ${valueBool}, через конструктор Boolean:`, typeof toBoolean);

toBoolean = !!valueBool;
console.log(`${valueBool}, через !!:`, toBoolean);
console.log(`тип данных ${valueBool}, через !!:`, typeof toBoolean);

// 6 falsy values
console.log('false', "")
console.log('false', 0)
console.log('false', NaN)
console.log('false', null)
console.log('false', undefined)
console.log('false', false)

// * Логическое И (оператор &&)
// * Запинается на лжи
// * Возвращает то, на чем запнулось или последний операнд
console.log(true && true && 'hello'); 
console.log(false && true && 'hello');

// * Логическое ИЛИ (оператор ||)
// * Запинается на правде
// * Возвращает то, на чем запнулось или последний операнд
console.log(5 || 7 || 8 || 10);
console.log(false || 0 || 7 || 10);

// * Логическое НЕ (оператор !)
// * Делает инверсию 
console.log(!true);
console.log(!false);

let enterPrompt = null

if (!enterPrompt) {
    console.log('Пользователь нажал ОТМЕНА')
}

console.log(!!0);
console.log(!!1);
// - Операторы ветвления 

// * if
// let online = 5;
// const subscribers = 10;

// if (online > subscribers) {
//     console.log(`Поздравляем подписчиков было = ${subscribers}, сейчас =`, online);
// }

// * if...else
let online = 5;
const subscribers = 10;

if (online > subscribers) {
    console.log(`Поздравляем подписчиков было = ${subscribers}, сейчас =`, online);
} else {
    console.log(`Мало подписчиков было = ${subscribers}, сейчас =`, online);
}

// * else...if
let cost = 50;
const subscribtion = "pro";

if (subscribtion === "free") {
    cost = 0;
    console.log(`You have free subscribtion price =`, cost);
} else if (subscribtion === "pro") {
    cost = 150;
    console.log(`You have pro subscribtion price =`, cost);
} else if (subscribtion === "premium") {
    cost = 500;
    console.log(`You have premium subscribtion price =`, cost);
} else {
    console.log(`Invalid subscribtion type`);
}

// * Тернарный оператор

const balance = 1000;

if (balance >= 0) {
    console.log(`Позитивный баланс`);
} else {
    console.log(`Негативный баланс`);
}

// * Цыклы 
// -While
let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

// -Do...while
// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

// -for
// Посчитаем сумму чисел до определенного значения.
const target = 8;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);

// Вспомним про операцию a % b и выведем остаток от деления используя цикл.
const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

// *Break - полностью прекращает выполнение цикла и передаёт управление на строку за его телом.
// Специально прервем цикл на 5-й итерации.
for (let i = 0; i < 10; i += 1) {
  if (i === 5) {
    console.log('Дошли до 5-й итерации, прерываем цикл!');
    break;
  }
}

for (let i = 0; i <= 10; i += 2) {
  if (i % 2 === 0) {
    console.log(` break ${i}`)
      break;;
  }
}

// *Continue
// Используем цикл для вывода только нечетных чисел.
//  * Для чётных i срабатывает continue, выполнение тела прекращается
//   и управление передаётся на следующую итерацию.
const number = 10;
for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}

for (let i = 0; i <= 10; i += 1) {
  if (i % 2 === 0) {
    console.log(`continue ${i}`)
      continue;
  }
}

// **Примеры функцый
// const message = balance >= 0 ? `Позитивный баланс` : `Негативный баланс`;
// console.log(message);

// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// };


// function makeOrderMessage (orderedQuantity, pricePerDroid, deliveryFee) {
// const totalPrice = (2 * 100 + 50);
//   const message = `You ordered droids worth ${totalPrice}, credits. Delivery (${deliveryFee} credits) is include in total price.`
//   return message;
// }


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
// const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//   message = `Insufficient funds!`;
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }
//   return message;
// }

// * Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток.
// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end.
// То есть число должно быть больше либо равно start и меньше либо равно end.
// Результатом выражения проверки будет буль true или false.

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; 
//   return isInRange;
// }


// * Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег(параметр totalSpent) в магазине за всё время(партнёрская программа).
// Скидка записывается в переменную discount и возвращается из функции как результат её работы.
// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//
// if (totalSpent >= 50000) {
// 	discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000 && totalSpent < 50000) {
// 	discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000 && totalSpent < 20000) {
// 	discount = BRONZE_DISCOUNT;
// } else {
// 	discount = BASE_DISCOUNT;
// }
//   return discount;
// }

//  * Функция сравнивает пароли с паролем Админа

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
// 	switch (password) {
//       case null:
//         message = "Canceled by user!";
//         break;

//       case ADMIN_PASSWORD:
//         message = "Welcome!";
//         break;

//       default:
//         message = "Access denied, wrong password!";
//     }
//   return message;
// }

let getSubstring = "Repair droid"
console.log(getSubstring.slice(0, 3));

// * Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.
// Дополни код функции так, что если длина строки:
// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.

// function formatMessage(message, maxLength) {
//   let result;

// if (message.length <= maxLength) {
// 	result = message;
// } else {
// 	result = `${message.slice(0, maxLength)}...`;
// }

//   return result;
// }

// * Функция checkForSpam(message) принимает строку(параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки.
// Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.
// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

// function checkForSpam(message) {
//   let result;

//  message = message.toLowerCase();
// if (message.includes('spam')) {
//   result = true;
// } else if (message.includes('sale')) {
// 	result = true;
// } else {
//   result = false;
// }

//   return result;
// }

 