/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
*/

const objC = {
    z: 5,
};
console.log(`objC`, objC);      // objC {z: 5}

const objB = Object.create(objC);
objB.y = 2;
console.log(`objB`, objB);      // objB {y: 2}

// console.log(objB.y);    // 2
// console.log(objB.z);    // 5

const objA = Object.create(objB);
objA.x = 1;

console.log(`objA`, objA);      // objA {x: 1}

console.log(objA.hasOwnProperty('x'));     // true
console.log(objA.hasOwnProperty('z'));     // false
console.log(objA.hasOwnProperty('y'));     // false

const objF = Object.create({ z: 5 });
objF.y = 100;
console.log('objF', objF);      // objF {y: 100}

console.log(objF.x);            // undefined

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
*/



  //   💢 TASKs (telegram bot)

// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
//     // const child = {};
// const child = Object.create(parent);

// child.name = 'Jason';
// child.age = 27;


/*    Цепочка прототипов
*   Измени код, построив цепочку прототипов так, 
*   чтобы объект ancestor был прототипом для parent,
*   а тот в свою очередь был прототипом для child.
*/
const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

console.log(parent);     // {name: "Stacey", surname: "Moore", age: 54}

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

console.log(child);      // {name: "Jason", age: 27}

console.log(parent.hasOwnProperty('surname'));       // true
console.log(parent.hasOwnProperty('heritage'));     // false
console.log(ancestor.isPrototypeOf(parent));         // true
console.log(child.hasOwnProperty('surname'));       // false
console.log(ancestor.heritage);                      // Irish
console.log(ancestor.hasOwnProperty('surname'));     // true
console.log(ancestor.surname);                       // Dawson


/* Объяви функцию-конструктор Car которая принимает три параметра:
*    brand - марка автомобиля.
*    model - модель автомобиля.
*    price - цена автомобиля.
*  Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, 
*  значениями которых должны быть переданные аргументы во время её вызова с оператором new.
*/
// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// const nissan = new Car('Nissan', 'Murano', 31700);

// console.log(nissan);        // Car {brand: "Nissan", model: "Murano", price: 31700}


/* Выполни рефакторинг функции - конструктора Car так,
*     чтобы она принимала один параметр - объект со свойсвами: brand, model и price.
*  Деструктуризируй объект в сигнатуре(подписи) функции.
*/
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

// console.log(audi);             // Car {brand: "Audi", model: "Q3", price: 36000}


/* Добавь в свойство prototype функции-конструктора Car два метода:
*   - getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
*   - changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
*/
function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.getPrice = function () {
	return this.price;
};

Car.prototype.changePrice = function (newPrice) {
	return (this.price = newPrice);
};

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(audi);               // Car {brand: "Audi", model: "Q3", price: 36000}

console.log(audi.getPrice());             // 36000
console.log(audi.changePrice(30000));     // 30000


/*  Выполни рефакторинг кода, заменив функцию - конструктор Car
*   на класс с методом - конструктором, принимающим объект.
*
*   function Car({ brand, model, price }) {
*     this.brand = brand;
*     this.model = model;
*     this.price = price;
*   }
*/ 
class Car3 {
	constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const newCar3 = new Car3({ brand: 'Nissan', model: 'Murano', price: 31700 });
console.log(newCar3);                  // Car3 { brand: "Nissan", model: "Murano", price: 31700 }


/*  Добавь классу Car два метода:
*
*   getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
*   changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
*/
class Car4 {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice() {
  	return this.price
  }
  changePrice(newPrice) {
  	this.price = newPrice
  }
}

const newCar4 = new Car4({ brand: 'RangeRover', model: 'LandRover', price: 41700 });
console.log(newCar4);                   // { brand: "RangeRover", model: "LandRover", price: 41700 }

console.log(newCar4.getPrice());        // 41700

newCar4.changePrice(50000);
console.log(newCar4);                   // Car4 { brand: "RangeRover", model: "LandRover", price: 50000 }


/* Выполни рефакторинг класса Car так, 
*  чтобы свойство brand было приватным и добавь два метода для публичного интерфейса,
*  для чтения и изменения этого свойства.
*/
class Car5 {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
  	return this.#brand;
  }
  changeBrand(newBrand) {
  	this.#brand = newBrand;
  }
}

const newCar5 = new Car5({ brand: 'BMW', model: 'X5', price: 58900 });
console.log(newCar5);                    // Car5 { model: "X5", price: 58900, #brand: "BMW" }
console.log(newCar5.getBrand());         // BMW

newCar5.changeBrand('Honda');
console.log(newCar5);                    // Car5 { model: "X5", price: 58900, #brand: "Honda" }


/* С помощью Function Declaration напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров. 
*  Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.
*
*   Добавь методы на прототип:
*   getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
*   addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
*   removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
*/
function Storage(items) {
	this.items = items;
};

Storage.prototype.getItems = function() {
	return this.items;
};

Storage.prototype.addItem = function(newItem) {
	return this.items.push(newItem);
};

Storage.prototype.removeItem = function(item) {
	const index = this.items.indexOf(item);
  this.items.splice(index, 1);
};

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems());       // ["Нанитоиды", "Пролонгер", "Антигравитатор"]

storage.addItem('Дроид');
console.log(storage.getItems());        // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]

storage.removeItem('Пролонгер');
console.log(storage.getItems());        // ["Нанитоиды", "Антигравитатор", "Дроид"]


/* Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. 
*  Сделай так, чтобы свойство items было приватным.
*/
class Storage1 {
	#items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
  	return this.#items;
  }
  addItem(newItem) {
  	this.#items.push(newItem);
  }
  removeItem(item) {
  	const itemIndex = this.#items.indexOf(item);
    this.#items.splice(itemIndex, 1);
  }
}

const newStorage = new Storage1(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(newStorage.getItems());         // ["Нанитоиды", "Пролонгер", "Антигравитатор"]

newStorage.addItem("Дроид");
console.log(newStorage.getItems());         // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]

newStorage.removeItem("Пролонгер");
console.log(newStorage.getItems());         // ["Нанитоиды", "Антигравитатор", "Дроид"]


/* С помощью Function Declaration напиши функцию - конструктор StringBuilder,
*  которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value.
*
*  Добавь методы на прототип:
*  getValue() - возвращает текущее значение свойства value.
*  padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
*  padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
*  padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.
*/
function StringBuilder(baseValue) {
  this.value = baseValue;
};

StringBuilder.prototype.getValue = function() {
	return this.value;
};

StringBuilder.prototype.padEnd = function (str) {
  this.value += str;
};

StringBuilder.prototype.padStart = function(str) {
	this.value = str + this.value;
};

StringBuilder.prototype.padBoth = function(str) {
	// this.value = str + this.value + str;
  this.padStart(str);
  this.padEnd(str);
};

const builder = new StringBuilder('.');
console.log(builder.getValue());        // '.'

builder.padStart('^');
console.log(builder.getValue());        // '^.'

builder.padEnd('^');
console.log(builder.getValue());        // '^.^'

builder.padBoth('=');
console.log(builder.getValue());        // '=^.^='


/* Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. 
*  Сделай так, чтобы свойство value было приватным.
*/
class StringBuilder1 {
	#value;
  constructor(baseValue) {
    this.#value = baseValue;
  }
  getValue() {
  	return this.#value;
  }
  padEnd(str) {
  	this.#value += str;
  }
  padStart(str) {
  	this.#value = str + this.#value;
  }
  padBoth(str) {
  	this.padStart(str);
    this.padEnd(str);
  }
}

const newBuilder = new StringBuilder('.');
console.log(newBuilder.getValue());        // '.'

newBuilder.padStart('^');
console.log(newBuilder.getValue());        // '^.'

newBuilder.padEnd('^');
console.log(newBuilder.getValue());        // '^.^'

newBuilder.padBoth('=');
console.log(newBuilder.getValue());        // '=^.^='


/* Выполни рефакторинг класса Car.Сделай свойства model и price приватными, также как #brand.
*  Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand,
*  model и price для взаимодействия с приватными свойствами.
*/
class Car6 {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}


/* Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.
* Добавь сеттеру price проверку передаваемого значения параметра newPrice. 
* Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.
*/
class Car7 {
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if(newPrice <= Car7.MAX_PRICE) {
    	this.#price = newPrice;
    }
  }
}

const pegoute = new Car7({ price: 35000 });
console.log(pegoute.price);           // 35000

pegoute.price = 49000;
console.log(pegoute);                 // Car7 { #price: 49000 }

pegoute.price = 61000;
console.log(pegoute);                 // 49000


/*  Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. 
*  Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.
*  Если цена автомобиля превышает максимальную, метод должен вернуть строку -> 'Внимание! Цена превышает допустимую.'.
*  В противном случае метод должен вернуть строку -> 'Всё хорошо, цена в порядке.'.
*/
class Car8 {
  // Обьявление приватного статического свойства
  static #MAX_PRICE = 50000;
  // Обьявление публичного статического метода
  static checkPrice(price) {
    // if (price > this.#MAX_PRICE) {
    //   return 'Внимание! Цена превышает допустимую.'
    // } else {
    //   return 'Всё хорошо, цена в порядке.'
    // }
    return price > this.#MAX_PRICE ? 'Внимание! Цена превышает допустимую.' : 'Всё хорошо, цена в порядке.'   
  }

  constructor({ price }) {
    this.price = price;
  }
}

const audi1 = new Car8({ price: 36000 });
const bmw1 = new Car8({ price: 64000 });

console.log(Car8.checkPrice(audi1.price));    // Всё хорошо, цена в порядке.
console.log(Car8.checkPrice(bmw1.price));     // Внимание! Цена превышает допустимую.


/* В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.
* - Объяви класс Admin, который наследует от класса User.
* - Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект { BASIC: 'basic', SUPERUSER: 'superuser' }.
*/
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
	static AccessLevel = {
    	BASIC: 'basic',
      	SUPERUSER: 'superuser',
    }
}

console.log(Admin.AccessLevel.BASIC);       // basic
console.log(Admin.AccessLevel.SUPERUSER);   // superuser


/* Добавь классу Admin метод constructor, 
*  который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. 
*  Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.
*/
class User1 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin1 extends User1 {
  accessLevel;

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'bestuser'
  };

  constructor({email, accessLevel}) {
    super(email);
    
    this.accessLevel = accessLevel;
  }
}

const kiwi = new Admin1({
  email: 'kiwi@mail.com',
  accessLevel: Admin1.AccessLevel.SUPERUSER
});

console.log(kiwi.email);               // kiwi@mail.com
console.log(kiwi.accessLevel);         // bestuser


/* Добавь классу Pro следующие свойства и методы.
* - Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
* - Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
* - Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
*/
class Gamer {
  email;
	
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Pro extends Gamer {
  blacklistedEmails = [];
  
  static AccessLevel = {
    NORMAL: 'normal',
    SUPERGAMER: 'supergamer'
  };

  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);

    this.accessLevel = accessLevel;
  }

  blacklist(email) {
  	this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true;
    }
    return false;
  }
 
}

const snoopy = new Pro({
  email: 'sno0py@mail.com',
  accessLevel: Pro.AccessLevel.SUPERGAMER
});
console.log(snoopy);                                      // Pro { email: "sno0py@mail.com", blacklistedEmails: ["dimaly@gmail.com"], accessLevel: "supergamer" }

console.log(snoopy.email);                                // sno0py@mail.com
console.log(snoopy.accessLevel);                          // supergamer

snoopy.blacklist('dimaly@gmail.com');
console.log(snoopy.blacklistedEmails);                    // ["dimaly@gmail.com"]

console.log(snoopy.isBlacklisted('mango@mail.com'));      // false
console.log(snoopy.isBlacklisted('dimaly@gmail.com'));    // true

snoopy.email = "sno0pyl2@mail.ru";
console.log(snoopy.email);                                // sno0pyl2@mail.ru