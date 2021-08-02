const inputName = 'color';
const inputValue = 'tomato';

const colorPickedData = {
    [inputName]: inputValue,
}

console.log(colorPickedData);     //  {color: "tomato"}


const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};
/*    Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 *    Первый элемент это ключ свойства, второй это значение.
 */
const entries = Object.entries(hotel);
console.log(entries);  
/*
 *    На каждой итерации по entries выберем первый элемент подмассива (ключ)
 *    в переменную key, а второй (значение) в переменную value
 */
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);      //  name: Resort Hotel   //  stars: 5   //  capacity: 100
}


// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };
// const values = Object.values(goods);  // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);           //  20


const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};
let totalFeedback = 0;

const keys = Object.keys(feedback);

console.log(keys);                    //  ["good", "neutral", "bad"]

for (const key of keys) {
    console.log(key);                 //  good  //  neutral  //  bad
    console.log(feedback[key]);       //  5     //  10       //  3
    totalFeedback += feedback[key];
}

console.log('totalFeedback:', totalFeedback);    //  totalFeedback: 18


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];


// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трак-1', 'трак-2', 'трак-3'],
//     changeName(newName) {
//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {   
//         return this.tracks.length;
//     },
// };

// console.log(playlist.getTrackCount());    //  3

// playlist.changeName('Новое имя');

// playlist.addTrack('новый трек-1');
// console.log(playlist.getTrackCount());    //  4

// playlist.addTrack('новый трек-2');
// console.log(playlist.getTrackCount());    //  5

// playlist.updateRating(4);

// console.log(playlist);


//  * Массив обьектов
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];

// for (const friend of friends) {
//     console.log(friend.name);

//     friend.newpro = 555;
// }

// console.table(friends);

const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {
        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;
        };
        friendsByStatus.offline.push(friend);
    };
    return friendsByStatus;
}

console.log(getFriendsByOnlineStatus(friends));


//  * Операция распыление ...spread - альтернатива метода concat
const temps = [18, 14, 24, 17, 19, 32, 12];

console.log(Math.max(18, 14, 24, 17, 29));        //  29

console.log(Math.min(temps));                     //  NaN
console.log(Math.max(...temps));                  //  32
console.log(Math.min(...temps));                  //  12


const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

a[0].x = 1000

console.log(`a:`, a);                       // a: [{ x: 1000 }, { y: 2 }, { z: 3 }]
console.log(`b:`, b);                       // b: [{ x: 1000 }, { y: 2 }, { z: 3 }]

console.log(a[0] === b[0]);                 //  true
console.log(a === b);                       // false  - разные ссылки


//  * Распыление обьектов 
// - Object.prototype.assign() и spread
const c = { x: 1, y: 2 };
const d = { x: 0, z: 3 };

// const i = Object.assign({}, c, d);
const i = {
    ...c,
    ...d,
};

console.log(i);                             //  {x: 0, y: 2, z: 3}


//  * Деструктуризация объектов
// const playlist = {
//     name: 'My cool playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// const { name, rating, tracks, trackCount } = playlist;

// console.log(name, rating, trackCount, tracks);    //  My cool playlist, 5, 3, ["track-1", "track-2", "track-3"]


//  * Глубокая деструктуризация
const profile = {
    name: 'Jac Broeders',
    tag: 'jgluke',
    location: 'Agerskov, Denmark',
    avatar: 'https://s3.amazonaws.com/uifaces/128.jpg',
    stats: {
        followers: 10,
        views: 2080,
        likes: 1228,
    },
};

// const { followers, views, likes } = stats;
const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes }
} = profile;

console.log(name, tag, location, avatar, followers, views, likes);    //  Jac Broeders, jgluke, Agerskov, Denmark, https://s3.amazonaws.com/uifaces/128.jpg, 10, 2080, 1228


const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {
	today: { low: lowToday, 
            high: highToday, 
            icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
           },
  	tomorrow: {
    		low: lowTomorrow,
      		high: highTomorrow,
      		icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
    		},
} = forecast;


//  * Деструктуризация массивов

const rgb = [255, 100, 80];

const [q, w, e] = rgb;

console.log(q, w, e);           //  255 100 80

// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, 
// а в массив values все значения его свойств.
const apartments = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keyS = [];
const valueS = [];

for (const key in apartments) {
    keyS.push(key);
    valueS.push(apartments[key]);
}

console.log(keyS);              //  ["descr", "rating", "price"]
console.log(valueS);            //  ["Spacious apartment in the city center", 4, 2153]


// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };

// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)){
//         keys.push(key);
//         values.push(apartment[key]);
//     }
// }

// console.log(keys);          //  ["descr", "rating", "price"]
// console.log(values);        //  ["Spacious apartment in the city center", 4, 2153]


/*    Метод  Object.keys() = возвращает массив ключей свойств обьекта
*/
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. 
// Используй переменную propCount для хранения количества свойств объекта.
// function countProps(object) {
//   let propCount = 0;
  
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         };
//     };
  
//   return propCount;
// }

function countProps(object) {
    let propCount = 0;
    const keys = Object.keys(object);
  
    for (const key of keys) {
        propCount += 1;
    }

    return propCount;
}

console.log(countProps({ name: "Mango", age: 2 }));                              //  2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));  //  3


// Перебери объект apartment используя метод Object.keys() и цикл for...of. 
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// }

// console.log(`Ключи:`, keys);        //  Ключи: ["descr", "rating", "price"]
// console.log(`Значения:`, values);   //  Значения: ["Spacious apartment in the city center", 4, 2153]



/*    Метод  Object.values() = возвращает массив значений свойств обьекта
*/
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. 
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.
function countTotalSalary(salaries) {
    let totalSalary = 0;
  
    const monies = Object.values(salaries);
    for (const money of monies) {
  	    totalSalary += money;
    }
  
    return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));    //  330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));       //  400


/*    Массив обьектов
*/
// Перебери массив объектов colors используя цикл for...of. 
// Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
	hexColors.push(color.hex);
  	rgbColors.push(color.rgb);
};

console.log(hexColors);    //  ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
console.log(rgbColors);    //  ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]


// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден, функция должна возвращать null.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (const product of products) {
//         if (product.name === productName) {
//             // console.log(product.name);
//             return product.price;
//         };
//     };

//   return null;
// }

// console.log(getProductPrice("Radar"));      //  1300
// console.log(getProductPrice("Grip"));       //  1200
// console.log(getProductPrice("Scanner"));    //  2700
// console.log(getProductPrice("Engine"));     //  null


// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const values = [];
//     for (const product of products) {
//         // console.log(product);
//         // console.log(Object.keys(product));
//         if (Object.keys(product).includes(propName)) {
//             values.push(product[propName]);
            
//         }
//     }
//     return values;
//     // console.log(`${propName}`, values);
// }

// console.log(getAllPropValues("name"));       //  ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity"));   //  [4, 3, 7, 9]
// console.log(getAllPropValues("price"));      //  [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category"));   //  []


// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. 
// Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    let total = 0;
    for (const product of products) {
        if (product.name === productName) {
            total = product.price * product.quantity;
            return total;
        }
    };
    return total;
}

console.log(calculateTotalPrice("Blaster"));    //  0
console.log(calculateTotalPrice("Radar"));      //  5200
console.log(calculateTotalPrice("Droid"));      //  2800
console.log(calculateTotalPrice("Grip"));       //  10800


// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. 
// Используя распыление дополни код так, чтобы:
//  В переменной allScores хранился массив всех результатов от первой до третьей группы.
//  В переменной bestScore был самый высокий общий балл.
//  В переменной worstScore был самый низкий общий балл.
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);


function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  
    return { completed, category, priority, ...data };
}

console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));    //  {completed: false, category: "Homemade", priority: "Low", text: "Take out the trash"}
console.log(makeTask({ text: "Buy bread" }));                                                    //  {completed: false, category: "General", priority: "Normal", text: "Buy bread"}


function add(...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
  return total;
}

console.log(add(12, 4, 11, 48));               //  75
console.log(add(74, 11, 62, 46, 12, 36));      //  241


// Функция addOverNum() считает сумму всех аргументов. 
// Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число.
// Это число должно быть первым параметром функции.
function addOverNum(number, ...args) {
  let total = 0;

    for (const arg of args) {
        if (number < arg) {
    total += arg;
    }
  }

  return total;
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));     //  71
console.log(addOverNum(15, 32, 6, 13, 19, 8));         //  51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));   //  218


// Функция findMatches() принимает произвольное количество аргументов. 
// Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.
// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.
function findMatches(numbers, ...args) {
    const matches = [];
    console.log(numbers);
    for (const arg of args) {
        if (numbers.includes(arg)) {
            matches.push(arg);
        }
    }
  
  return matches;
}

console.log(findMatches([63, 11, 8, 29], 4, 7, 16));                   //  []
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));        //  [17, 89, 2]
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));   //  [24, 9, 41]


// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//   	return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf.getBooks());                             //  Returning all books
// console.log(bookShelf.addBook("Haze"));                        //  Adding book Haze
// console.log(bookShelf.removeBook("Red sunset"));               //  Deleting book Red sunset
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));    //  Updating book Sands of dune to Dune


// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. 
// Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
    updateBook(oldName, newName) {
        const bookIndex = this.books.indexOf(oldName);
        this.books.splice(bookIndex, 1);
        this.books.splice(bookIndex, 0, newName)
        return this.books
    },
};

console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));    //  ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
console.log(bookShelf.updateBook("The last kingdom", "Dune"));      //  ["Dune", "Dungeon chronicles", "The guardian of dreams"]


// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
// - getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// - addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// - removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// - updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
const atTheOldToad = {
    potions: [
        { name: 'Speed potion', price: 460 },
        { name: 'Dragon breath', price: 780 },
        { name: 'Stone skin', price: 520 },
    ],
     
    getPotions() {
        return this.potions;
    },
  
    addPotion(potionName) {
        if (this.potions.includes(potionName)) {
        return `Potion ${potionName} is already equipped!`;
        };
        
        this.potions.push(potionName);
    },
  
    removePotion(potionName) {
        const { potions } = this;
        
        for (let i = 0; i < potions.length; i += 1) {
            const potion = potions[i];

            if (potionName === potion.name) {
                potions.splice(i, 1);
            };
        };
        return this.potions;
    },
  
    updatePotionName(oldName, newName) {
        const { potions } = this;

        for (let i = 0; i < potions.length; i += 1) {
            const potion = potions[i];
            
            if (oldName === potion.name) {
                potion.name = newName;
            };
        };
        return this.potions;
    },
  
};

console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });        //  [ { name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }, { name: "Invisibility", price: 620 }]
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });        //  [ { name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }, { name: "Power potion", price: 270 }]
// atTheOldToad.removePotion("Dragon breath");                          //  [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.removePotion("Speed potion");                           //  [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
atTheOldToad.updatePotionName("Dragon breath", "Polymorth");            //  [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");  //  [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]


//  * Корзина товаров
const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            };
        };

        const newProduct = {
            ...product,
            quantity: 1,
        };

        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;

        for (let i = 0; i < items.length; i++) {
            const { name } = items[i];

            if (productName === name) {
                console.log(`Нашли такой продукт: ${productName}, его индекс: ${i}`);
               
                items.splice(i, 1);
            };
        };
    },
    updatePrice(productName, newPrice) {
        const { items } = this;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            if (productName === item.name) {
                console.log(`Нашли такой продукт: ${item.name}, его цена: ${item.price}`);

                item.price = newPrice;
            };
        };
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        const { items } = this;
        let total = 0;

        for (const { price, quantity } of items) {
            total += price * quantity;
        };

        return total;
    },
    increaseQuantity(productName) {
        for (const item of this.items) {

            if (item.name === productName && item.quantity < 100) {
                item.quantity += 1;
            };
        };

        return;
    },
    decreaseQuantity(productName) {
        for (const item of this.items) {

            if (item.name === productName && item.quantity > 1) {
                item.quantity -= 1;
            };
        };

        return;
    },
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log(`Total: `, cart.countTotalPrice());     //  Сумма всех продуктов

// cart.remove('🍋');                
// console.table(cart.getItems());      //  Удаляет продукт

cart.updatePrice('🍇', 85);          
console.table(cart.getItems());     //  Обновляет цену продукта 

console.log(`Total: `, cart.countTotalPrice());     //  Сумма всех продуктов

// cart.clear();            
// console.log(cart.getItems());     //  Чистит корзину продуктов

cart.increaseQuantity('🍎');
console.table(cart.getItems());     //  Добавляет количество продукта на +1

cart.decreaseQuantity('🍋');
cart.decreaseQuantity('🍋');
console.table(cart.getItems());     //  Уменшает количество продукта на -1

const getProductTotalPrice = function ({ price, quantity }) {
    return price * quantity;
};
console.log(`Price by product:`, getProductTotalPrice(cart.items[1]));     //  Сумма выбранного продукта
