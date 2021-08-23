/* ** Модуль 1. 
 ✔️ ★  ▶  ➫  ➢  ➣  ➤  ✅   🚀   🚀  📞  ℡ @  📲  📱   📪   📧  ☝   👑   🚨   🚩  🎭   🚬   🙋  🙍   🚶  🏃  🎇  ☕  🔥  
 
 💙  💚  💛  💜  💢  ⌛  ⌚  ✌  💋  🌏  👣  🍀  🐾  ⚓  🏆  ⛄  🏂  😉  🤑  😴  🧐  😎  🚫  ⛔   🚏  🚦  🚧  🚥

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
const getMathResult = function () {
  let num1 = prompt(`Enter the first number`);
  let num2 = prompt(`Enter the second number`);
  let symbol = prompt(`Enter the symbol`);
  let total = 0;
  console.log(num1, num2, symbol);

  switch (symbol) {
    case '+':
      total = Number(num1) + Number(num2);
      break;
    
    case '-':
      total = num1 - num2;
      break;
    
    case '*':
      total = num1 * num2;
      break;
    
    case '/':
      total = num1 / num2;
      break;
    
    default:
      console.error(`ERROR`);
  }
  return total;
}
console.log(`result:`, getMathResult());
