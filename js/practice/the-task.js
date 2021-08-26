/* 
  ⭐ ⮚ ⮙ ⮛ ⮘  ➫  ➢  ➣  ➤  ➰ ✘  ⛌  ☠  ❓ ❗ ❌ ⛔ ❎  ✔ ✔️ ✅  🚀  📞 ℡ @  📱  📪  📧  ☝   👑   🚨   🚩  🎭  🚬  🙋  🙍   🚶  🏃  🎇  ☕  🔥  
 
 💙  💚  💛  💜  💢  ⌛  ⌚  ✌  💋  🌏  👣  🍀  🐾  ⚓  🏆  ⛄  🏂  😉  🤑  😴  🧐  😎  🚫  🚏  🚦  🚧  🚥
 

💢  МОДУЛЬ 1. 

*   Задание 1.
*/
// const dateOfBirth = prompt(`Введите год рождения`);
// const leapYear = [1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020];
// const notLeapYear = [1994, 1998, 2002, 2006, 2010, 2014, 2018];
// let messageYear = 'Ваш ${dateOfBirth} год обыкновенный год!';

// for (const year1 of leapYear) {
//   if (year1 === Number(dateOfBirth)) {
//     console.log(`Ваш ${dateOfBirth} год - високосный!`);
//     break;
//   }
//   for (const year2 of notLeapYear) {
//     if (year2 === Number(dateOfBirth)) {
//       console.log(`Ваш ${dateOfBirth} год - не високосний!`);
//       break;
//     }
//   }
//   console.log(messageYear);
// }

const checkYear = function (year) {
  let condition = year % 4 === 0;
  if (condition) return `${year} високосный`;
  return `${year} не високосный`
}
console.log(checkYear(2010));


/*
*   Задание 2 
*/
// const game = function () {
//   let comp = Math.ceil(Math.random() * (10 - 1) + 1);
//   let user = prompt(`Введите число от 1 до 10.`);
//   console.log(comp, user);

//   if (comp == user) return `You are win!`;
//   return `You are lose.`;
// }
// console.log(game());


/*
*   Задание 3
*/
// const getMathResult = function () {
//   let num1 = prompt(`Enter the first number`);
//   let num2 = prompt(`Enter the second number`);
//   let symbol = prompt(`Enter the symbol`);
//   let total = 0;
//   console.log(num1, num2, symbol);

//   switch (symbol) {
//     case '+':
//       total = Number(num1) + Number(num2);
//       break;
    
//     case '-':
//       total = num1 - num2;
//       break;
    
//     case '*':
//       total = num1 * num2;
//       break;
    
//     case '/':
//       total = num1 / num2;
//       break;
    
//     default:
//       console.error(`ERROR`);
//   }
//   return total;
// }
// console.log(`result:`, getMathResult());



/*   
  💢 МОДУЛЬ 6
 */
const arr = [
{ name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
{ name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
{ name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
{ name: 'Pierre', surname: 'Curie', born: 1859, dead: 1934, id: 4 },
{ name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 5 },
{ name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 6 },
{ name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 7 },
{ name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 8 },
{ name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 9 },
{ name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 10 },
{ name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 11 },
{ name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 12 },
{ name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 13 }
];

//  1
// const condition = obj.born >= 1800 && obj.born < 1900;
let result = arr.filter((obj) => obj.born >= 1800 && obj.born < 1900);
console.log(result);                         //  [{name: "Albert", …}, {name: "Pierre", …}, {name: "Marie", …}, {name: "Max", …}, {name: "Katherine", …}, {name: "Ada", …}, {name: "Sarah E.", …}, {name: "Lise", …}, {name: "Hanna", …}]


// 2
// const age = obj.dead - obj.born;
result = arr.reduce((acc, obj) => acc + (obj.dead - obj.born), 0);
console.log(`Сумма прожитых лет:`, result);                            //  Сумма прожитых лет: 861


// 3
// result = [...arr].sort((a, b) => a.name.localeCompare(b.name));
result = [...arr].sort((a, b) => (a.surname + ' ' + a.name).localeCompare(b.surname + ' ' + b.name));
console.log(`Сортировка по имени и фамилии:`, result);


// 4
result = [...arr].sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
console.log(`Сорт по кол-ву прожитых лет:`, result);

// result.forEach(el => console.log(el.dead - el.born));


// 5
result = arr.filter(obj => !(obj.born >= 1400 && obj.born < 1700));
console.log(`Родились не в 15-17 столетии:`, result);                    //  Родились не в 15-17 столетии: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]


// 6
result = [...arr].sort((a, b) => a.born - b.born)[arr.length - 1];
console.log(`Родился позже всех:`, result);                               //  Родился позже всех: { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 9 }


// 7
// result = arr.find(obj => (obj.name + ' ' + obj.surname) === 'Albert Einstein').born;

result = arr.reduce((acc, obj) => {
  if (obj.name + ' ' + obj.surname === 'Albert Einstein') {
    acc = obj.born
  };
  return acc;
}, 0)
console.log(`Год рождения Albert Einstein:`, result);                     //  Год рождения Albert Einstein: 1879


// 8
result = arr.filter(obj => obj.surname[0] === 'C');
console.log(result);                                                      //  [{name: 'Pierre', surname: 'Curie', ...}, {name: "Marie", surname: "Curie", ...}, {name: "Nicolaus", surname: "Copernicus", ...}]


// 9
result = arr.filter(obj => obj.name[0] !== 'A');
console.log(`name = !'A'`, result);


// 10
result = [...arr].sort((a, b) => (a.dead - a.born) - (b.dead - b.born));

let dieYoungest = result[0];
let dieOldest = result.reverse()[0];

console.log(dieYoungest);                                                 //  { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 10 }
console.log(dieOldest);                                                   //  { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 12 }


// 11
result = arr.filter(obj => obj.name[0] === obj.surname[0]);
console.log(result);                                                      //  [{ name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 }, { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 13 }]


// 12
// obj.born >= 1800 && obj.dead < 1900
result = arr.every(obj => obj.born >= 1800 && obj.dead < 1900);
console.log(result);                                                      //  false