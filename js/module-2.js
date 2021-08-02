// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
const array = [1, 2, 3, 4, 5];
const getArray = [array[0], array[array.length - 1]];

console.log(getArray);  // [1, 5] 


/* Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
** Объявлена функция calculateEngravingPrice(message, pricePerWord).
** Эта функция принимает строку, состоящую из слов разделённых только пробелами(параметр message) и цену гравировки одного слова(параметр pricePerWord).
** Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
*/
const message = "JavaScript is in my blood";
const pricePerWord = 10;

let summary = message.split(' ');
summary = summary.length;
const totalPrice = summary * pricePerWord;

console.log(totalPrice); // 50


/* Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
** Значением параметра title будут строки, слова которых разделены только пробелами
** Все символы slug должны быть в нижнем регистре
** Все слова slug должна быть разделены тире
*/
const title = "Top 10 benefits of React Framework";
// let linkTitle = title.toLowerCase();
// linkTitle = linkTitle.split(' ');
// const slugTitle = linkTitle.join('-');
// console.log(slugTitle);
const slug = title.toLowerCase().split(' ').join('-');

console.log(slug);  // top-10-benefits-of-react-framework

/* Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray.
** Параметр maxLength содержит максимально допустимую длину нового массива.
** Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
** В противном случае функция должна вернуть новый массив целиком.
** const makeArray = (firstArray, secondArray, maxLength);
*/
const firstArray = ["Mango", "Poly", "Houston"];
const secondArray = ["Ajax", "Chelsea"];
const maxLength = 4;
const newArray = firstArray.concat(secondArray);

console.log(newArray.slice(0, maxLength)); // ["Mango", "Poly", "Houston", "Ajax"]


/* Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа.
** Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
*/
const calculateTotal = 18;
let total = 0;

for (let i = 0; i <= calculateTotal; i += 1){
  total += i;
}

console.log(`Сумма чисел от 0 до ${calculateTotal}:`, total); // Сумма чисел от 0 до 18: 171

// *Последовательно логирует все элементы массива fruits.
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { 
  const fruit = fruits[i];
  
  console.log(fruit);
}

// *Последний елемент масива
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement); // banana

// Добавляем елементы в массив 
const stack = [];
stack.push(1);
console.log(stack); // [1]
stack.push(-1);
console.log(stack); // [1, -1]


const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clients.slice(1)); // ['Ajax', 'Poly', 'Kiwi']


// * Перебор (итерация) масивов
const friends = ['Mango', 'Joni', 'Poly', 'Alex'];
const lastIndex = friends.length - 1;

for (let i = 0; i <= lastIndex; i += 1) {
    console.log('Logining friends:', friends[i]);
}


// * С помощью цикла массив можно заполнить данными.
const numbers = [];

for (let i = 0; i < 3; i += 1) { 
  numbers.push(`label-${i}`);
}

console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']


//  Считает сумму чисел в массиве 
const card = [54, 63, 24, 27, 81, 152, 15, 256, 228, 13, 18]
let totalSum = 0;

for (let i = 0; i < card.length; i += 1) {
  totalSum += card[i];
}

console.log(`Сумма:`, totalSum); // Сумма: 931

// for (const value of card) {
//   totalSum += value;
// }
// console.log(`Сумма:`, totalSum); // Сумма: 931


// for (const cards of card) {
//   if (cards % 2 === 0)
//     console.log(`${cards}, - чётное!`);
//   totalSum += cards;
// }
// console.log(`Сумма:`, totalSum); // Сумма: 931



// == Скрипт поиска самой большой монетки
const coins = [60, 5, 15, 30, 88, 43, 93, 70, 16];
let biggerCoin = coins[0];

for (const coin of coins) {
  if (coin > biggerCoin) {
    biggerCoin = coin;
  }
}

console.log(`Из: ${coins} самое большое:`, biggerCoin); // Из: 60,5,15,30,88,43,93,70,16 самое большое: 93
 

// == Возвращает самое длинное слово в этой строке.
const string = "The quick brown fox jumped over the lazy dog";
let arrayWord = string.split(' ');
let longestWord = arrayWord[0];
  
for (const word of arrayWord) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log(longestWord); // jumped


// == Возвращает массив всех целых чисел от значения min до max.
const min = 14;
const max = 17
const numberS = [];

for (let i = min; i <= max; i += 1) {
  numberS.push(i)
}

console.log(numberS); // [14, 15, 16, 17]

/* == Переберает массив и возвращает новый массив, 
** в котором будут только те элементы массива Numbers,
**   которые больше чем значение параметра Value(число).
*/
const Numbers = [12, 24, 3, 41, 76];
const Value = 20;
const Array = [];

for (const number of Numbers) {
  if (number > Value) {
    Array.push(number)
  }
}
// for (let i = 0; i < Numbers.length; i += 1) {
//   const number = Numbers[i];
//   if (number > Value) {
//     Array.push(number);
//   }
// }
console.log(Array); // [24, 41, 76]

// == Возвращает массив состоящий из елементов которые присутствуют в обоих массивах.
const array1 = [24, 12, 27, 3];
const array2 = [12, 8, 3, 36, 27];
const arr = [];

for (const array of array1) {
  console.log(array);
  if (array2.includes(array)) {
    arr.push(array);
  }
}
  
console.log(arr);


// Цикл логирует все целые числа в диапазоне от start до end включительно.
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { 
  console.log(i); 
}


// ** Метод splice (удаление, добавление, замена)
const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];
console.table(cards);

// Удаление
const cardToRemove = cards.splice(2, 1);
console.table(cards);

// Добавление 
const cardToInsert = cards.splice(3, 0, 'Java', 'Script', 228);
console.table(cards);

// Замена 
const cardToUpdate = 228;
const index = cards.indexOf(cardToUpdate);
console.log(index);

cards.splice(index, 1, 'NEwElement');
console.table(cards);


// Остаток от деления 
const a = 3 % 3; // 0
const b = 4 % 3; // 1
const c = 11 % 8; // 3
const d = 12 % 7; // 5
const e = 8 % 6; // 2

// ==Возвращает массив чётных чисел в диапазоне от Start до End 
const Start = 3;
const End = 11;
const evenNumbers = [];

for (let i = Start; i <= End; i += 1) {
  const number = i;
  if (number % 2 === 0) {
    console.log(`чётное:`, number); // 4, 6, 8, 10

    evenNumbers.push(number);
  } 
}

console.log(evenNumbers); // [4, 6, 8, 10]



/*  Функции 
      
*/
    // FUNCTION EXPRESSION
//                      ***   myFunc() // * Нельзя вызывать до объявления
const myFunc = function (param1, param2) {
  // перечисляем действия - инструкции, которые должны выполниться
  console.log(
    `Это функциональное выражение с параметрами ${param1} & ${param2}`,
  )
  //   console.log(param1, param2)
}
    // FUNCTION DECLARATION
//                     ***   myFuncDecl() // * Можно вызвать до объявления
function myFuncDecl(param) {
  console.log(`Это декларативное объявление`)
}

    // ARROW FUNCTION - ES6
//                    ***   myArrowFunc() // * Нельзя вызывать до объявления
const myArrowFunc = (param1) => {
  // перечисляем действия - инструкции, которые должны выполниться
  console.log(`Это стрелочная функция`)
}

// const getTotal = (a, b) => {
//   return a + b;
// }

const getTotal = (a, b) => a + b;

console.log(getTotal(2, 7));   //  9


/*   Псевдомассив - arguments
*/
const sum = function () {
  let total = 0;

  for (const argument of arguments) {
    total += argument;
  }

  return total;
};

console.log(sum(1, 2, 3));       //  6
console.log(sum(1, 2, 3, 4));    //  10
console.log(sum(1, 2, 3, 4, 5)); //  15


//  Преобразование псевдомассива в полноценный массив 
//   (Array.from() и ...args )
const fna = function () {
  const args = Array.from(arguments);
};

const fnb = function (...args) {
};

// Преобразование в стрелочной функции (...rest)
const getArrayRes = (...allParams) => {
}
getArrayRes(1, 2, 3, 4);


// Функция считает сумму
const calculateTotalPrice = function (items) {
  console.log(`items внутри функции: `, items);
  let total = 0;

  for (const item of items) {
    total += item;
  }
  return total;
}

console.log(calculateTotalPrice([1, 2, 3]));       // 6
console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice([100, 200, 300])); // 600


// == Скрипт поиска логина
const logins = ['m4angoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3n4'];
// const loginToFind = 'poly1scute';
// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден.` : `Пользователь ${loginToFind} не найден.`;
// console.log(message);

const findToLogin = function (allLogins, loginToFind) {
  // for (const login of allLogins) {
  //   if (login === loginToFind) {
  //     return `Пользователь ${loginToFind} найден.`;
  //   }
  // }
  // return `Пользователь ${loginToFind} не найден.`;

  return allLogins.includes(loginToFind) ? `Пользователь ${loginToFind} найден.` : `Пользователь ${loginToFind} не найден.`;
}

console.log(findToLogin(logins, 'avocad3r'));   // Пользователь avocad3r не найден.
console.log(findToLogin(logins, 'k1widab3st')); // Пользователь k1widab3st найден.
console.log(findToLogin(logins, 'jam4l'));      // Пользователь jam4l не найден.
console.log(findToLogin(logins, 'aj4xth3n4'));  // Пользователь aj4xth3n4 найден.


// == Аналог метода includes. Проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// const allArray = [1, 2, 3, 4, 5];
// const newValue = 5;
// let messageArray;

// = Способ 1 =
// for (let i = 0; i <= fullArray.length; i += 1){
//   const value = fullArray[i];
//   console.log(value);
//   if (value === newValue) {
//     messageArray = true;
//     break;
//   }
//   messageArray = false;
// }
// console.log(messageArray);

// = Способ 2 =
// for (const array of fullArray) {
//   if (array === newValue) {
//     messageArray = true;
//     break;
//   }
//   messageArray = false;
// }
// console.log(messageArray);

const checkValue = function (allArray, value) {

  for (const array of allArray) {
    if (array === value) {
      return true;
    }
  }
  return false;
}

console.log(checkValue([1, 2, 3, 4, 5,], 5));                              // true
console.log(checkValue(['mango', 'kiwi', 'banana', 'citrus'], 'apple'));   // false
console.log(checkValue(['Dima', 'Alex', 'Peater', 'Anna'], 'Dima'));       // true
console.log(checkValue(['mango', 'kiwi', 'banana', 'citrus'], 'apelsin')); // false


// Инвентирует строку с нижнего регистра в верхний и наоборот
const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
}

console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo'));  // MaNgO
console.log(changeCase('AjAx'));   // aJaX


/* Функция для сложения произвольного кол-ва аргументов
** - Операция ...(rest)
*/
const add = function (...args) {
  console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
}

console.log(add(1, 2, 3));           // 6
console.log(add(1, 2, 3, 4, 5, 6));  // 21
console.log(add(2, 20, 200, 2000));  // 2222


/* Функция возвращает новый массив, в котором только те аргументы, 
*   для которых есть аналог в оригинальном массиве.
*/
const filterNumbers = function (array, ...args) {
  console.log(`array: `, array);
  console.log(`args: `, args);
  const uniqueElements = [];

  for (const element of array) {
    if (args.includes(element)) {
      uniqueElements.push(element);

      console.log(`${element} - есть везде!`); 
    }
  }

  return uniqueElements;
}

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 8, 3));           // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));           // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));  // [200]


