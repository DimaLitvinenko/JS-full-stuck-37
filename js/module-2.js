// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
const array = [1, 2, 3, 4, 5];
const getArray = [array[0], array[array.length - 1]];
console.log(getArray); // [1, 5] first and last


// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Эта функция принимает строку, состоящую из слов разделённых только пробелами(параметр message) и цену гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
// const message = "JavaScript is in my blood";
// const pricePerWord = 10;

// let summary = message.split(' ');
// summary = summary.length;
// const totalPrice = summary * pricePerWord;
// console.log(totalPrice);


// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире
const title = "Top 10 benefits of React Framework";
// let linkTitle = title.toLowerCase();
// linkTitle = linkTitle.split(' ');
// const slugTitle = linkTitle.join('-');
// console.log(slugTitle);

const slug = title.toLowerCase().split(' ').join('-');
console.log(slug);

// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray.
// Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.
// const makeArray = (firstArray, secondArray, maxLength);
const firstArray = ["Mango", "Poly", "Houston"];
const secondArray = ["Ajax", "Chelsea"];
const maxLength = 4;
const newArray = firstArray.concat(secondArray);
console.log(newArray.slice(0, maxLength));


// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
const calculateTotal = 18;
let total = 0;
for (let i = 0; i <= calculateTotal; i += 1){
  console.log(i);
  total += i;
}
console.log(total);

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
    console.log('Logining friends: ', friends[i]);
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
  console.log(card[i]);
  totalSum += card[i];
}
console.log(`Сумма:`, totalSum);


// * = Циклы for...of
// for (const value of card) {
//   totalSum += value;
// }
// console.log(`Сумма:`, totalSum);


// for (const cards of card) {
//   if (cards % 2 === 0)
//     console.log(`${cards}, - чётное!`);
//   totalSum += cards;
// }
// console.log(`Сумма:`, totalSum);

// == Скрипт поиска логина
const logins = ['m4angoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3n4'];
const loginToFind = 'poly1scute';

const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден.` : `Пользователь ${loginToFind} не найден.`;
console.log(message);


// == Скрипт поиска самой большой монетки
const coins = [60, 5, 15, 30, 88, 43, 93, 70, 16];
let biggerCoin = coins[0];

for (const coin of coins) {
  if (coin > biggerCoin) {
    biggerCoin = coin;
  }
}
console.log(`Из: ${coins} самое большое:`, biggerCoin);
 

// == Возвращает самое длинное слово в этой строке.
const string = "The quick brown fox jumped over the lazy dog";
let arrayWord = string.split(' ');
let longestWord = arrayWord[0];
  console.log(longestWord);
for (const word of arrayWord) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}
console.log(longestWord);


// == Возвращает массив всех целых чисел от значения min до max.
const min = 14;
const max = 17
const numberS = [];
for (let i = min; i <= max; i += 1) {
  numberS.push(i)
}
console.log(numberS);

// == Переберает массив и возвращает новый массив, 
// в котором будут только те элементы массива Numbers,
//   которые больше чем значение параметра Value(число).
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
console.log(Array);

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
    evenNumbers.push(number)
    } 
}
console.log(evenNumbers); // [4, 6, 8, 10]


// ==Аналог метода includes. Проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
const fullArray = [1, 2, 3, 4, 5];
const newValue = 5;
let messageArray;
for (let i = 0; i <= fullArray.length; i += 1){
  const value = fullArray[i];
  console.log(value);

  if (value === newValue) {
    messageArray = true;
    break;
  }
  messageArray = false;
}
console.log(messageArray);

// for (const array of fullArray) {
//   if (array === newValue) {
//     messageArray = true;
//     break;
//   }
//   messageArray = false;
// }
// console.log(messageArray);

