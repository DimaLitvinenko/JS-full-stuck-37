/*  1 -------------------------------------------- FOREACH ------------------------------------------------------
*      ✔️ ★ Array.prototype.forEach(callback(element, index, array), thisArg)

*   ➢ Поэлементно перебирает оригинальный массив
*   ➢ Может изменять
*   ➢ Ничего не возвращает
*   ➢ Заменяет классический for и for..of, если не нужно прерывать цикл
*/
const numbers = [5, 10, 15, 20, 25];
    // for (let i = 0; i < numbers.length; i += 1) {
    //   console.log(`Индекс ${i}, значение ${numbers[i]}`);
    // }

// ★ Анонимная стрелочная функция:
numbers.forEach(number => {
    console.log(`number:`, number);
});

// ★ Объявление функции:
    // numbers.forEach(function (number) {
    //     console.log(`number:`, number);
    // });
console.log(numbers);                                                   //  [5, 10, 15, 20, 25]


//  =======
const newArr = []
const forEachResult = numbers.forEach((num) => newArr.push(num + 1));
    // const forEachResult = numbers.forEach((num) => {
    //     newArr.push(num + 1)
    //     // return num // все-равно ничего не возвращает
    // });
console.log(forEachResult);                                              //  undefined
console.log(newArr);                                                     //  [6, 11, 16, 21, 26] 



/*  2 --------------------------------------------- MAP -------------------------------------------------------
*      ✔️ ★ Array.prototype.map(callback[currentValue, index, array])

*   ➢  Используется для трансформации массива
*   ➢ Поэлементно перебирает оригинальный массив
*   ➢ Не изменяет оригинальный массив
*   ➢ Возвращает новый массив такой же длины 
*/
const numbers2 = [5, 10, 15, 20, 25];

const doubledNums = numbers2.map(number => {
    // console.log(`number:`, number);
    return number * 2;
});
    // const doubledNums = numbers2.map(function (number) {
    //     console.log(`number:`, number);
    //     return number * 2;
    // });
console.log(`numbers2`, numbers2);                                      //  numbers2 [5, 10, 15, 20, 25]
console.log(`doubledNums`, doubledNums);                                //  doubledNums [10, 20, 30, 40, 50]


//  =======
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
console.table(players);

//   Получаем массив имён всех игроков:

const playerNames = players.map(player => player.name);
    // const playerNames = players.map(player => {
    //     console.log(player);

    //     return player.name;
    // });
console.log(`playerNames:`, playerNames);                               //  playerNames: ["Mango", "Poly", "Kiwi", "Ajax", "Chelsy"]


//   Получаем массив айдишников всех игроков:

const playerIds = players.map(player => player.id);
console.log(`playerIds:`, playerIds);                                   //  playerIds: ["player-1", "player-2", "player-3", "player-4", "player-5"]


//   Получаем массив обьектов с именами и онлайном всех игроков:

const res = players.map(player => {
    return {
        name: player.name,
        online: player.online,
    };
});
console.log(`res:`, res);            //  res: [{ name: "Mango", online: false }, { name: "Poly", online: true }, { name: "Kiwi", online: true }, { name: "Ajax", online: false }, { name: "Chelsy", online: true }]


//   Увеличиваем кол-во поинтов каждого игрока на 10%:

const updatePlayers = players.map(player => {
    return {
        ...player,
        points: player.points * 1.1,
    };
});
console.log(`updatePlayers:`, updatePlayers);           //  updatePlayers: [{…}, {…}, {…}, {…}, {…}]
/*  0: {id: "player-1", name: "Mango", timePlayed: 310, points: 59.400000000000006, online: false}
*   1: {id: "player-2", name: "Poly", timePlayed: 470, points: 101.2, online: true}
*   2: {id: "player-3", name: "Kiwi", timePlayed: 230, points: 52.800000000000004, online: true}
*   3: {id: "player-4", name: "Ajax", timePlayed: 150, points: 78.10000000000001, online: false}
*   4: {id: "player-5", name: "Chelsy", timePlayed: 80, points: 52.800000000000004, online: true}
*/


//   Увеличиваем кол-во часов игрока по id:

const playerIdToUpdate = 'player-4';

const updatedPlayers = players.map(player =>
    playerIdToUpdate === player.id
        ? { ...player, timePlayed: player.timePlayed + 100 }
        : player,
);
    // const updatedPlayers = players.map(player => {
    //     console.log(player.id);
    //     if (playerIdToUpdate === player.id) {
    //         return {
    //             ...player,
    //             timePlayed: player.timePlayed + 100,
    //         };
    //     }
    //     return player;
    // });
console.table(updatedPlayers);
/*(index)       id:          name:      timePlayed:   points:      online:
    0	    "player-1"	    "Mango"	        310	        54	        false
    1	    "player-2"	    "Poly"	        470	        92	        true
    2	    "player-3"	    "Kiwi"	        230	        48	        true
    3	    "player-4"	    "Ajax"	        250	        71	        false
    4	    "player-5"	    "Chelsy"        80	        48	        true
*/



/*  3 ------------------------------------------- FLATMAP -------------------------------------------------------
*      ✔️ ★ Array.prototype.flatMap(callback(element, index, array))

*   ➢  Аналогичен методу map()
*   ➢ Применяется в случаях, когда результат это многомерный массив который необходимо «разгладить».
*   ➢ Результат разглаженный массив
*/
const students3 = [
  { name: 'Манго', courses: ['математика', 'физика'] },
  { name: 'Поли', courses: ['информатика', 'математика'] },
  { name: 'Киви', courses: ['физика', 'биология'] },
];

const getmap = students3.map((student) => student.courses);
console.log(`map:`,getmap);                                                     //  map: [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]


const flat = students3.flatMap((student) => student.courses);
console.log(`flatMap:`, flat);                                                  //  flatMap: ["математика", "физика", "информатика", "математика", "физика", "биология"]                

const stats = flat.reduce((acc, course) => {
    return {
        ...acc,
        [course]: acc[course] ? acc[course] + 1 : 1,
    };
}, {});
console.log(stats);                                                             //  { математика: 2, физика: 2, информатика: 1, биология: 1 }



/*  ✔️ ★ Array.prototype.flat(depth)

*  ➢ Разглаживает массив до указанной глубины
*  ➢ По умолчанию глубина 1
*/
const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(array.flat(3));                                                     //  [1, 2, 4, 5, 6, 7, 8, 9]




/*  4 -------------------------------------------- FILTER --------------------------------------------------------
*      ✔️ ★ Array.prototype.filter(callback[currentValue, index, array])

*   ➢ Поэлементно перебирает оригинальный массив
*   ➢ Возвращает новый массив с элементами (или пустой массив)  =>  []
*   ➢ Добавляет в возвращаемый массив элементы которые удовлетворяют условиe коллбек-функции
*      ➣ если коллбек вернул true элемент добавляется в возвращаемый массив
*      ➣ если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
*/
const numbers3 = [5, 10, 15, 20, 25];

const filteredNumbers = numbers3.filter((number) => number < 10 || number > 20);
    // const filteredNumbers = numbers3.filter(number => {
    //     console.log(number);
    //     return number < 10 || number > 20;
    // });
console.log(`filteredNumbers:`, filteredNumbers);                                //  filteredNumbers: [5, 25]


//  =======
const players3 = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

//   Получаем массив всех онлайн игроков:

const onlinePlayers = players3.filter(player => player.online);
console.log(onlinePlayers);     //  [{ id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true }, { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true }, { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true }]


//   Получаем массив всех оффлайн игроков:

const offlinePlayers = players3.filter(player => !player.online);
console.log(offlinePlayers);    //  [{ id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false }, { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false }]


//   Получаем список хардкорных игроков с временем больше 250:

const hardcorePlayers = players3.filter(player => player.timePlayed > 250);
console.log(hardcorePlayers);   //  [{ id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false }, { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true }, { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true }]



/*  5 --------------------------------------------- FIND -------------------------------------------------------
*      ✔️ ★ Array.prototype.find(callback[currentValue, index, array])

*   ➢ Поэлементно перебирает оригинальный массив
*   ➢ Возвращает первый элемент удовлетворяющий условие (или undefined)  =>  undefined
*/
const numbers4 = [5, 10, 13, 15, 20, 25];

const findNumber = numbers4.find(number => number > 10);
console.log(`findNumber:`, findNumber);                                         //  findNumber: 13


//   =======
const players4 = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

//   Ищем игрока по id:

const playerIdToFind = 'player-3';

const playerWithId = players4.find(({ id }) => id === playerIdToFind);
// const playerWithId = players4.find(player => player.id === playerIdToFind);
console.log(`playerWithId:`, playerWithId);                                     //  playerWithId: { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true }


//   ======
const findPlayerById = (allPlayers, playerId) => {
    return allPlayers.find(player => player.id === playerId);
};
console.log(findPlayerById(players4, 'player-3'));                              //  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true }
console.log(findPlayerById(players4, 'player-5'));                              //  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true }


//   Ищем игрока по имени:

const playerNameToFind = 'Poly';

const playerWithName = players4.find(player => player.name === playerNameToFind);
console.log(`playerWithName:`, playerWithName);                                 //  playerWithName: { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true }



/*  6 --------------------------------------------- EVERY ------------------------------------------------------
*      ✔️ ★ Array.prototype.every(callback[currentValue, index, array])  =>  true || false  (&&)

*   ➢ Поэлементно перебирает оригинальный массив
*   ➢ Возвращает true если все элементы массива удовлетворяют условие
*/
const isAllOnline = players4.every(player => player.online);
console.log(`isAllOnline:`, isAllOnline);                                       //  isAllOnline: false


//   ======
const everyResult = numbers4.every((elem) => {
    // console.log(elem);
    return elem > 15;
});
console.log(`everyResult:`, everyResult);                                       //  everyResult: false



/*  7 --------------------------------------------- SOME ------------------------------------------------------
*       Array.prototype.some(callback[(currentValue, index, array)])  =>  true || false   (||)

*   ➢ Поэлементно перебирает оригинальный массив
*   ➢ Возвращает true если хотя бы один элемент массива удовлетворяет условие
*/
const isAnyOnline = players4.some(player => player.online);
console.log(`isAnyOnline:`, isAnyOnline);                                       //  isAnyOnline: true


const anyHardcorePlayers = players4.some(player => player.timePlayed);
console.log(`anyHardcorePlayers:`, anyHardcorePlayers);                         //  anyHardcorePlayers: true


//   =======
const someResult = numbers4.some((elem) => {
    // console.log(elem);
    return elem < 20;
});
console.log(`someResult:`, someResult);                                         //  someResult: true



/*  8 ------------------------------------------- REDUCE --------------------------------------------------------
*      ✔️ ★ Array.prototype.reduce(сallback[(previousValue, currentItem, index, array)], initialValue)  

*   ➢ Поэлементно перебирает оригинальный массив
*   ➢ Возвращает что угодно  🤯   =>  ({}, [], 0, "")
*   ➢ Заменяет всё на свете, но использовать нужно с умом
*/
const totalSum = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(totalSum); // 32

// ✍
// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0
// 
// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 :> previousValue = 0 ➫ number = 2 ➫ return 0 + 2 ➫ return 2
// Итерация 2 :> previousValue = 2 ➫ number = 7 ➫ return 2 + 7 ➫ return 9
// Итерация 3 :> previousValue = 9 ➫ number = 3 ➫ return 9 + 3 ➫ return 12
// Итерация 4 :> previousValue = 12 ➫ number = 14 ➫ return 12 + 14 ➫ return 26
// Итерация 5 :> previousValue = 26 ➫ number = 6 ➫ return 26 + 6 ➫ return 32
 
// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
// Результат - 32 ☝


const numbers7 = [5, 10, 15, 20, 25];

const total = numbers7.reduce((accumulator, number) => accumulator + number, 0);
    // const total = numbers7.reduce((accumulator, number) => {
    //     console.log(`accumulator:`, accumulator);
    //     console.log(`number:`, number);

    //     return accumulator + number;
    // }, 0);
console.log(`total:`, total);                                                    //  total: 75

// ✍
// 1 итерация:> accumulator = 0 ➫ number = 5 ➫ return 0 + 5
// 2 итерация:> accumulator = 5 ➫ number = 10 ➫ return 5 + 10
// 3 итерация:> accumulator = 15 ➫ number = 15 ➫ return 15 + 15
// 4 итерация:> accumulator = 30 ➫ number = 20 ➫ return 30 + 20
// 5 итерация:> accumulator = 50 ➫ number = 25 ➫ return 50 + 25


//   =======
const reduceResultObject = numbers7.reduce((newObject, number) => {
    // console.log(newObject, number);
    newObject[number] = number;

    return newObject;
}, {});
console.log(`reduceResultObject:`, reduceResultObject);                         //  reduceResultObject: { 5: 5, 10: 10, 15: 15, 20: 20, 25: 25 }


//   Считаем общую зарплату:

const salary = {
  Simon: 100,
  Din: 50,
  Alex: 150,
};
console.log(Object.values(salary));                                             //  [100, 50, 150]

const totalSalary = Object.values(salary).reduce(
    (total, value) => total + value,
    0,
);
console.log(`totalSalary:`, totalSalary);                                       //  totalSalary: 300


//   Считаем общее количество часов:

const players7 = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players7.reduce(
    (totalTime, player) => totalTime + player.timePlayed,
    0,
);
    // const totalTimePlayed = players7.reduce((totalTime, player) => {
    //     return totalTime + player.timePlayed;
    // }, 0);
console.log(`totalTimePlayed:`, totalTimePlayed);                                //  totalTimePlayed: 1240


//    Считаем общую сумму корзины товаров:

const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0,
);
    // const totalAmount = cart.reduce((total, item) => {
    //     return total + item.price * item.quantity;
    // }, 0);
console.log(`totalAmount:`, totalAmount);                                        //  totalAmount: 840


//    Собираем все теги из твитов:

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
    // const allTags = tweets.reduce((acc, tweet) => {
        // tags.push(...tweet.tags);
            // console.log(...acc);
        // return acc;
    // }, []);
console.log(allTags);                                                            //  ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"]

// ✍
// 1 итерация:> acc = [] ➫ tweet.tags = ['js', 'nodejs'] ➫ return [...[], ...['js', 'nodejs']];
// 2 итерация:> acc = ['js', 'nodejs'] ➫ tweet.tags = ['html', 'css'] ➫ return  [...['js', 'nodejs'], ...['html', 'css']];
// 3 итерация:> acc = ['js', 'nodejs', 'html', 'css'] ➫ tweet.tags = ['html', 'js', 'nodejs'] ➫ return [...['js', 'nodejs', 'html', 'css'], ...['html', 'js', 'nodejs']];
// 4 итерация:> acc = ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs'] ➫ tweet.tags = ['css', 'react'] ➫ return [...['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs'], ...['css', 'react']];
// 5 итерация:> acc = ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react'] ➫ tweet.tags = ['js', 'nodejs', 'react'] ➫ return [...['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react'], ...['js', 'nodejs', 'react']]


//    Ведём статистику тегов:

//*  если свойство с ключом tag есть. увеличить его значение на 1
//*  если свойствоства нет с таким ключом что в tag, сделать и записать 1

    // const tagsStats = allTags.reduce((acc, tag) => {
    //     console.log(acc);
    //     if (acc[tag]) {
    //         acc[tag] += 1;
    //         return acc;
    //     }
    //     acc[tag] = 1;
    //     return acc;
    // }, {});

const tagsStats = allTags.reduce(
    (acc, tag) => ({
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {},
);
    // const tagsStats = allTags.reduce((acc, tag) => {
    //     console.log(acc);
    //         // if (acc[tag]) {
    //         //     return {
    //         //         ...acc,
    //         //         [tag]: acc.tag + 1,
    //         //     } 
    //         // }
    //         // return {
    //         //     ...acc,
    //         //     [tag]: 1,
    //         // }
    //     return {
    //         ...acc,
    //         [tag]: acc[tag] ? acc[tag] + 1 : 1,
    //     };
    // }, {});
console.log(`tagsStats:`, tagsStats);                                                  //  tagsStats: { js: 3, nodejs: 3, html: 2, css: 2, react: 2 }



/*  9 -------------------------------------------- SORT -------------------------------------------------------       
*      ✔️ ★  Array.prototype.sort(callback(currentEl, nextEl), {})

*   ➢ Сортирует и ИЗМЕНЯЕТ оригинальный массив
*   ➢ По умолчанию:
*      ➣ сортирует по возрастанию
*      ➣ приводит элементы к строке и сортирует по [Unicode] (https://unicode-table.com/en/)
*/

const clients = ['Mango', 'Alex', 'Rey', 'Poly', 'Henry', 'Chelsey', 'Anna', 'Simon'];

const sortClients = clients.sort().reverse();
console.log(`sortClients:`, sortClients);                                               //  sortClients: ["Alex", "Anna", "Chelsey", "Henry", "Mango", "Poly", "Rey", "Simon"]
console.log(`clients:`, clients);                                                       //  clients: ["Alex", "Anna", "Chelsey", "Henry", "Mango", "Poly", "Rey", "Simon"]
console.log(clients === sortClients);                                                   //  true


//    Отсортируем по возростанию (по умолчанию сортирует посимвольтно -> [Unicode]):

const numbers8 = [12, 1, 38, 4, 45, 3, 15, 2, 5, 24];

const sortNumbers = numbers8.sort();
console.log(`sortNumbers:`, sortNumbers);                                                //  sortNumbers: [1, 12, 15, 2, 24, 3, 38, 4, 45, 5]                                           


/*  ★
 *  compareFunction - функция сравнения (callback)
 *  Элементы массива сортируются в соответствии с её возвращаемым значением
 *   -> eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *   -> если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *   -> если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
*/
numbers8.sort((curEl, nextEl) => {
    return curEl - nextEl;
});
console.log(numbers8);                                                                   //  [1, 2, 3, 4, 5, 12, 15, 24, 38, 45]


/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция ...spread
*/
const descSortedNumbers = [...numbers8].sort((a, b) => b - a);
const ascSortedNumbers = [...numbers8].sort((a, b) => a - b);
console.log(`descSortedNumbers:`, descSortedNumbers);                                    //  descSortedNumbers: [45, 38, 24, 15, 12, 5, 4, 3, 2, 1]
console.log(`ascSortedNumbers:`, ascSortedNumbers);                                      //  ascSortedNumbers: [1, 2, 3, 4, 5, 12, 15, 24, 38, 45]


/*
*    Сортировка сложных типов (обьект)
*/
const players1 = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];
const sortedByBestPlayers = [...players1].sort(
    (prevPlayer, nextPleyer) => prevPlayer.timePlayed - nextPleyer.timePlayed,
);
console.table(sortedByBestPlayers);


const byName = [...players1].sort((a, b) => {
    const result = a.name[0] > b.name[0];

    if (result) {
        return 1;
    }
    if (!result) {
        return -1;
    }
});
console.table(byName);


//    Сортировка по времени в игре: 

const bytime = players1.sort((a, b) => a.timePlayed - b.timePlayed)[0];
console.log(`Меньше всех в игре:`, bytime);                                             //  Меньше всех в игре: { id: "player-5", name: "Chelsey", timePlayed: 80, online: true }

const bytime1 = players1.sort((a, b) => b.timePlayed - a.timePlayed)[0];
console.log(`Дольше всех в игре:`, bytime1);                                            //  Дольше всех в игре: { id: "player-2", name: "Poly", timePlayed: 470, online: true }


//    Отсортируем температуру от меньшей к большей:

const temperature = [54, 32, 19, 85, 100, -22, -3, 8, 3, 27];

const sortTemp = temperature.sort((min, max) => {
    // return max - min;
    return min - max;
});
console.log(`temperature:`, sortTemp);                                                  //  temperature: [-22, -3, 3, 8, 19, 27, 32, 54, 85, 100]


//    Отсортируем массив пользователей по возрастанию дней онлайн активности:

const users = [
  { name: 'Mango', daysActive: 15 },
  { name: 'Poly', daysActive: 4 },
  { name: 'Ajax', daysActive: 27 },
  { name: 'Chelsey', daysActive: 2 },
];
const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;
console.log(users.sort(sortByActiveDays));                          //  [{ name: 'Chelsey', daysActive: 2 }, { name: 'Poly', daysActive: 4 }, { name: 'Mango', daysActive: 15 }, { name: 'Ajax', daysActive: 27 }]



/*  ✔️ ★ firstString.localeCompare(secondString)   
*   ➢ Используется для сортировки строк в алфавитном порядке, по возрастанию или убыванию
*/
'a'.localeCompare('b'); // -1
'b'.localeCompare('a'); // 1
'a'.localeCompare('a'); // 0
'b'.localeCompare('b'); // 0

const students1 = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

const inAlphabetOrder = [...students1].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder);                                               // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

const inReversedOrder = [...students1].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder);                                               // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']



/*
*  ------------------------------------ ✔️ ★ Цепочки вызовов - chaining ★ ---------------------------------------
*/
const arrNumbers = [1, 5, 2, 4, 3];
// const greaterThenTwo = arrNumbers.filter(num => num > 2);
// console.log(greaterThenTwo);                                                          //  [5, 4, 3]
// const multByThree = greaterThenTwo.map(num => num * 3);
// console.log(multByThree);                                                             //  [15, 12, 9]
// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);                                                                  //  [9, 12, 15]

// ☝ Цепочка предыдущих трёх 
const sorted = arrNumbers
    .filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);
console.log(sorted);                                                                     //  [9, 12, 15]


const students = [
    { name: 'Phillip', age: 21, gender: 'male' },
    { name: 'Margo', age: 27, gender: 'female' },
    { name: 'Ann', age: 29, gender: 'female' },
    { name: 'Edward', age: 41, gender: 'male' },
    { name: 'Bill', age: 35, gender: 'male' },
];

const result1 = students
    .filter((student) => student.gender === 'female')                                                 
    .map((girl) => girl.name)
    .sort();
console.log(`result1:`, result1);                                                       //  result1: ["Ann", "Margo"]

const result2 = students.sort((a, b) => a.age - b.age)[0];
console.log(`Самый молодой:`, result2);                                                 //  Самый молодой: { name: "Phillip", age: 21, gender: "male" }

const result3 = students.sort((a, b) => b.age - a.age)[0];
console.log(`Самый старый:`, result3);                                                  //  Самый старый: { name: "Edward", age: 41, gender: "male" }

const result4 = students.reduce((acc, elem, i, arr) => {
    console.log((acc += elem.age / arr.length));
    return acc;
}, 0);
console.log(`Средний возвраст:`, result4.toFixed());                                    //  Средний возвраст: 31


/*
*  Сортируем тех кто онлайн по рангу 
*  - сначала фильтруем
*  - потом сортируем
*/
const players2 = [
    { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
    { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
    { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
    { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
    { id: 'id-5', tag: 'Chelsy', isOnline: false, rank: 200 },
];

const onlineAndSorted = players2
    .filter(player => player.isOnline)
    .sort((playerA, playerB) => playerA.rank - playerB.rank);
console.log(onlineAndSorted);                                                           //  [{id: "id-3", tag: "Ajax", isOnline: true, rank: 100}, {id: "id-4", tag: "Kiwi", isOnline: true, rank: 400}, {id: "id-1", tag: "Mango", isOnline: true, rank: 800}]


/*
*  Chaining в методах объекта как jquery
*/
const element = {
    class: '',
    hovered: false,
    changeClass(cls) {
        this.class = cls;

        return this;
    },
    toggleHovered() {
        this.hovered = !this.hovered;

        return this;
    },
};

element.toggleHovered().changeClass('open');
console.log(element);                                                                    //  { class: "open", hovered: true, changeClass: ƒ, toggleHovered: ƒ }



  