//   💢 TASKs (telegram bot) 

/*  Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, 
*  рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
*  Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
*   function calculateTotalPrice(orderedItems) {
    for (let i = 0; i < orderedItems.length; i += 1) {
        totalPrice += orderedItems[i];
        };
        return totalPrice;
    }
*/
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
	orderedItems.forEach(function(item) {
    	totalPrice += item;
    });

    return totalPrice;
}
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));                                 //  1116



/* Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, 
* в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
* Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
*   function filterArray(numbers, value) {
        const filteredNumbers = [];
        for (let i = 0; i < numbers.length; i += 1) {
            if (numbers[i] > value) {
            filteredNumbers.push(numbers[i]);
            }
        }
        return filteredNumbers;
    }
*/
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
    
//     numbers.forEach(number => {
//   	    if(number > value) {
//     	    filteredNumbers.push(number);
//         };
//     }); 
//     return filteredNumbers;
// };
// console.log(filterArray([12, 24, 8, 41, 76], 20));                                          //  [24, 41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 38));                                          //  [41, 76]



/* Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, 
* и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
* Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
*   function getCommonElements(firstArray, secondArray) {
        const commonElements = [];
        for (let i = 0; i < firstArray.length; i += 1) {
            if (secondArray.includes(firstArray[i])) {
                commonElements.push(firstArray[i]);
            };
        };
        return commonElements;
    };
*/
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
  
//   	firstArray.forEach(element => {
//     	if(secondArray.includes(element)) {
//         	commonElements.push(element);
//         };
//     });
    
//     return commonElements;
// };   
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));                                       //  []
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));                         //  [10, 30, 40]



/* 🚨  ЯВНЫЙ ВОЗВРАТ (explicit return)  🚨
*  Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
*   function calculateTotalPrice(quantity, pricePerItem) {
        return quantity * pricePerItem;
    };
*/
const calculateTotalPrice1 = (quantity, pricePerItem) => {
    return quantity * pricePerItem;
};
console.log(calculateTotalPrice1(8, 60));                                                       //  480



/* 🚨  НЕЯВНЫЙ ВОЗВРАТ (implicit return)  🚨
*  Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
*   const calculateTotalPrice = (quantity, pricePerItem) => {
        return quantity * pricePerItem;
    };
*/
const calculateTotalPrice2 = (quantity, pricePerItem) => quantity * pricePerItem;
console.log(calculateTotalPrice2(3, 400));                                                      //  1200



/* Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. 
*  Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.
*   function calculateTotalPrice(orderedItems) {
        let totalPrice = 0;
        orderedItems.forEach(function (item) {
            totalPrice += item;
        });
    return totalPrice;
    };
*/
const calculateTotalPrice3 = (orderedItems) => {
    let totalPrice = 0;

    orderedItems.forEach((item) => {
        totalPrice += item;
    });

    return totalPrice;
};
console.log(calculateTotalPrice3([412, 371, 94, 63, 176]));                                      //  1116



/* 
*   Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции. 
*/
const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });
    return filteredNumbers;
};
console.log(filterArray([12, 24, 8, 41, 76], 38));                                                //  [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20));                                                //  [24, 41, 76]



/* 
*   Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
*/
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });
    return commonElements;
};
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));                             //  [10, 30, 40]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));                               //  [12, 27, 3]



/*  Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, 
*  значение которого это чётное число, добавляя к нему значение параметра value.
*  Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
*/
function changeEven(numbers, value) {
    const newArray = [];
    
    numbers.forEach(number => {
    	if(number % 2 === 0) {
            newArray.push(number + value);
            console.log(number);
        } else {
            newArray.push(number);
        };
    });
    return newArray;
};
console.log(changeEven([17, 24, 68, 31, 42], 100));                                                //  [17, 124, 168, 31, 142]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));                                                   //  [12, 18, 3, 7, 14, 16]



/* Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. 
*  Обязательно используй метод map().
*/
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsLengths = planets.map((planet) => planet.length);
console.log(planetsLengths);                                                                        //  [5, 4, 6, 6]



/*
*   Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.
*/
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  
const titles = books.map((book) => book.title);
console.log(titles);                                                                             //  ["Последнее королевство", "На берегу спокойных вод", "Сон смешного человека", "Красна как кровь", "Враг Божий"]



/*
*   Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
*/
const books1 = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  
const genres = books1.flatMap((book) => book.genres);
console.log(genres);                                                                           //  ["приключения", "историческое", "фантастика", "мистика", "ужасы", "мистика", "приключения"]



/* Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, 
*  а в переменной uniqueGenres массив уникальных жанров - без повторений.
*/
const allGenres = books1.flatMap(book => book.genres);
console.log(`allGenres:`, allGenres);                                                          //  allGenres: ["приключения", "историческое", "фантастика", "мистика", "ужасы", "мистика", "приключения"]

const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);
console.log(`uniqueGenres:`, uniqueGenres);                                                    //  uniqueGenres: ["приключения", "историческое", "фантастика", "мистика", "ужасы"]



/* 
*   Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
*/
const users = [
  { name: 'Moore Hensley', email: 'moorehensley@indexia.com', eyeColor: 'blue', friends: ['Sharron Pace'], isActive: false, balance: 2811, skills: ['ipsum', 'lorem'], gender: 'male', age: 37 },
  { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com', eyeColor: 'blue', friends: ['Briana Decker', 'Sharron Pace'], isActive: true, balance: 3821, skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'], gender: 'female', age: 34 },
  { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com', eyeColor: 'green', friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'], isActive: false, balance: 3793, skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'], gender: 'male', age: 24 },
  { name: 'Elma Head', email: 'elmahead@omatom.com', eyeColor: 'green', friends: ['Goldie Gentry', 'Aisha Tran'], isActive: true, balance: 2278, skills: ['adipisicing', 'irure', 'velit'], gender: 'female', age: 21 },
  { name: 'Carey Barr', email: 'careybarr@nurali.com', eyeColor: 'blue', friends: ['Jordan Sampson', 'Eddie Strong'], isActive: true, balance: 3951, skills: ['ex', 'culpa', 'nostrud'], gender: 'male', age: 27 },
  { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com', eyeColor: 'brown', friends: ['Jacklyn Lucas', 'Linda Chapman'], isActive: false, balance: 1498, skills: ['non', 'amet', 'ipsum'], gender: 'male', age: 38 },
  { name: 'Sheree Anthony', email: 'shereeanthony@kog.com', eyeColor: 'brown', friends: ['Goldie Gentry', 'Briana Decker'], isActive: true, balance: 2764, skills: ['lorem', 'veniam', 'culpa'], gender: 'female', age: 39 },
];
    
const getUserNames = users => users.map(user => user.name);
    // const getUserNames = users1 => {
    //     return users1.map((user) => user.name);
    // };
console.log(getUserNames(users));                                                            //  ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]



/*
*   Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
*/
const getUserEmails = users => users.map(user => user.email);
console.log(getUserEmails(users));                                                           //  ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]



/* Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, 
*  а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().
*/
const taskNumbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = taskNumbers.filter(number => (number % 2 === 0));
console.log(`evenNumbers:`, evenNumbers);                                                       //  evenNumbers: [24, 82, 36, 18, 52]

const oddNumbers = taskNumbers.filter(number => !(number % 2 === 0));
console.log(`oddNumbers:`, oddNumbers);                                                         //  oddNumbers: [17, 61, 47, 73]



/* Используя метод filter() дополни код так, чтобы:
* В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
* В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
*/
const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
console.log(topRatedBooks);                          //  [{ title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 }, { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 }, { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 }]

const booksByAuthor = books.filter((book) => book.author === AUTHOR);
console.log(booksByAuthor);                          //  [{ title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 }, { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 }]



/* Дополни функцию getUsersWithEyeColor(users, color) так, 
*  чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
*/
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
    // const getUsersWithEyeColor = (users, color) => {
    //  	return users.filter(user => user.eyeColor === color)
    // };
console.log(getUsersWithEyeColor(users, 'green'));   //  [{name: "Ross Vazquez", email: "rossvazquez@xinware.com", eyeColor: "green", friends: Array(3), isActive: false, …}, {name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: Array(2), isActive: true, …}]



/* Дополни функцию getUsersWithAge(users, minAge, maxAge) так, 
* чтобы она возвращала массив пользователей, 
* возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
*/
const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => minAge < user.age && maxAge > user.age);
console.log(getUsersWithAge(users, 20, 30));                       //  [{ name: "Ross Vazquez", ...}, { name: "Elma Head", ...}, { name: "Carey Barr", ...}]



/* Дополни функцию getUsersWithFriend(users, friendName) так, 
* чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. 
* Массив друзей пользователя хранится в свойстве friends.
*/
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
};
console.log(getUsersWithFriend(users, 'Briana Decker'));          //  [{ name: "Sharlene Bush", email: "sharlenebush@tubesys.com", eyeColor: "blue", friends: Array(2), isActive: true, …}, { name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: Array(2), isActive: true, …}]



/* Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей(свойство friends).
*  У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
*/
const getFriends = (users) => {
    // const array = [];
    const guys = users.flatMap(user => user.friends);
    console.log(guys);
    return guys.filter((friend, index, arr) => arr.indexOf(friend) === index);
};
console.log(getFriends(users));                                   //  ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]



/* 
*  Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
*/
const getActiveUsers = (users) => users.filter(user => user.isActive);
console.log(getActiveUsers(users));                               //  [{name: "Sharlene Bush", email: "sharlenebush@tubesys.com", eyeColor: "blue", friends: Array(2), isActive: true, …}, {name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: Array(2), isActive: true, …}, {name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: Array(2), isActive: true, …}, {name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: Array(2), isActive: true, …}]



/*
*  Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
*/
const getInactiveUsers = (users) => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users));                             //  [{name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: Array(1), isActive: false, …}, {name: "Ross Vazquez", email: "rossvazquez@xinware.com", eyeColor: "green", friends: Array(3), isActive: false, …}, {name: "Blackburn Dotson", email: "blackburndotson@furnigeer.com", eyeColor: "brown", friends: Array(2), isActive: false, …}]



/* Используя метод find() дополни код так, чтобы:
* В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
* В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
*/
const books3 = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR1 = 'Роберт Шекли';

const bookWithTitle = books3.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books3.find(book => book.author === AUTHOR1);



/* Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, 
* почта которого (свойство email) совпадает со значением параметра email.
*/
const getUserWithEmail = (users, email) => users.find(user => user.email === email);
// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
// };
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));            //  { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: Array(2), isActive: true, …}



/* Используя метод every() дополни код так, чтобы:
* В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
* В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.

* В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
* В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.

* В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
* В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
*/
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);           //  true
const eachElementInFirstIsOdd = firstArray.every(value => !(value % 2 === 0));            //  false

const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);         //  false
const eachElementInSecondIsOdd = secondArray.every(value => !(value % 2 === 0));          //  true

const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);           //  false
const eachElementInThirdIsOdd = thirdArray.every(value => !(value % 2 === 0));           //  false



/* Дополни функцию isEveryUserActive(users) так, 
* чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
*/
const isEveryUserActive = (users) => users.every(user => user.isActive);
console.log(isEveryUserActive(users));                                                  //  false



/* Используя метод some() дополни код так, чтобы:
* В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
* В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.

* В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
* В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.

* В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
* В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
*/
const anyElementInFirstIsEven = firstArray.some(elem => elem % 2 === 0);                 //  true
const anyElementInFirstIsOdd = firstArray.some(elem => !(elem % 2 === 0));                  //  false

const anyElementInSecondIsEven = secondArray.some(elem => elem % 2 === 0);               //  false
const anyElementInSecondIsOdd = secondArray.some(elem => !(elem % 2 === 0));                //  true

const anyElementInThirdIsEven = thirdArray.some(elem => elem % 2 === 0);                 //  true
const anyElementInThirdIsOdd = thirdArray.some(elem => !(elem % 2 === 0));                  //  true



/* Дополни функцию isAnyUserActive(users) так, 
* чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
*/
const isAnyUserActive = users => users.some(user => user.isActive);
console.log(isAnyUserActive(users));                                                     //  true



/* Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. 
* Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
*/
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players);                                                  //  [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((acc, number) => acc + number, 0);
console.log(totalPlayTime);                                                                //  2692
const averagePlayTime = totalPlayTime / playtimes.length;
console.log(averagePlayTime);                                                              //  673



/* Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. 
* Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
*/
const players2 = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players2.reduce((total, gamer) => total + gamer.playtime / gamer.gamesPlayed, 0);
console.log(totalAveragePlaytimePerGame);                                                   //  1023



/* Дополни функцию calculateTotalBalance(users) так, 
* чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
*/
const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);
console.log(`calculateTotalBalance:`, calculateTotalBalance(users));                        //  calculateTotalBalance: 20916



/* Дополни функцию getTotalFriendCount(users) так, 
* чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
*/
const getTotalFriendCount = users => {
   return users.reduce((acc, friend) => { 
    //    console.log(friend.friends.length);
       return acc + friend.friends.length;
   }, 0);
};
console.log(`allFriends:`, getTotalFriendCount(users));                                     //  allFriends: 14



/* Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, 
* а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
*/
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];

const ascendingReleaseDates = [...releaseDates].sort();
console.log(ascendingReleaseDates);                                                         //  [1967, 1973, 1984, 1997, 2008, 2012, 2016]
const alphabeticalAuthors = [...authors].sort();
console.log(alphabeticalAuthors);                                                           //  ["Бернард Корнуэлл", "Ли Танит", "Роберт Шекли", "Федор Достоевский"]



/* Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. 
* Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, 
* а в переменной descendingReleaseDates копия отсортированная по убыванию.
*/
const releaseDates1 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates1 = [...releaseDates1].sort((a,b) => a - b);

const descendingReleaseDates1 = [...releaseDates1].sort((a, b) => b - a);



/* Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. 
* Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, 
* а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.
*/
 const authors1 = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  
const authorsInAlphabetOrder = [...authors1].sort((a, b) => a.localeCompare(b));
  
const authorsInReversedOrder = [...authors1].sort((a, b) => b.localeCompare(a));



/* Дополни код так, чтобы:
* В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
* В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
* В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
* В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
*/
const books2 = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const sortedByAuthorName = [...books2].sort((first, second) => first.author.localeCompare(second.author));
const sortedByReversedAuthorName = [...books2].sort((first, second) => second.author.localeCompare(first.author));

const sortedByAscendingRating = [...books2].sort((a, b) => a.rating - b.rating);
const sortedByDescentingRating = [...books2].sort((a, b) => b.rating - a.rating);



/* Дополни функцию sortByAscendingBalance(users) так, 
* чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
*/
const sortByAscendingBalance = users => {
  return [...users].sort((a, b) => a.balance - b.balance);
};
console.table(sortByAscendingBalance(users));



/* Дополни функцию sortByDescendingFriendCount(users) так, 
* чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
*/
const sortByDescendingFriendCount = users => [...users].sort((a, b) => b.friends.length - a.friends.length);
console.table(sortByDescendingFriendCount(users));



/* Дополни функцию sortByName(users) так, 
* чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
*/
const sortByName = users => [...users].sort((first, second) => first.name.localeCompare(second.name));
console.table(sortByName(users));



/*
* Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
*/
const MIN_BOOK_RATING = 8;

const names = [...books2]
    .sort((a, b) => a.author.localeCompare(b.author))
    .filter(({ rating }) => rating > MIN_BOOK_RATING)
    .map(({ author }) => author);

console.log(names);                                                 //  ["Бернард Корнуэлл", "Бернард Корнуэлл", "Роберт Шекли"]



/*
* Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).
*/
const getNamesSortedByFriendCount = users =>
   [...users].sort((a, b) => a.friends.length - b.friends.length)
        .map(user => user.name);

console.log(getNamesSortedByFriendCount(users));                    //  ["Moore Hensley", "Sharlene Bush", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony", "Ross Vazquez"]
  


/* 
* Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту.
*/
const getSortedFriends = users =>
    users.flatMap(user => user.friends)
        .filter((friend, index, arr) => arr.indexOf(friend) === index)
        .sort((a, b) => a.localeCompare(b));

console.log(getSortedFriends(users));                               //  ["Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace"]



/* 
* Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
*/
const getTotalBalanceByGender = (users, gender) => 
  users.filter(user => user.gender === gender)
        .reduce((acc, user) => acc + user.balance, 0);
  
console.log(`totalBalance male:`, getTotalBalanceByGender(users, 'male'));            //  totalBalance male: 12053
console.log(`totalBalance female:`, getTotalBalanceByGender(users, 'female'));        //  totalBalance female: 8863