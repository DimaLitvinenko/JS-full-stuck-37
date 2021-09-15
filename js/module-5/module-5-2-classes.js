/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static      
 * 🐷 - приватные свойства  - нельзя прочитать, перезаписать, вывести в консоль
 * 🐷 - приватное статическое - обращение к приватному статическому свойству вне тела класса вызовет ошибку.
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
*/

//  EXAMPLE 1 =====
class User {
    // Необязательное объявление публичных свойств
    name;
     // Обязательное объявление приватных свойств
    #email;

    // Аналог функции-конструктора
    constructor({ name, email }) {
        // Инициализация объявленных свойств
        this.name = name;
        this.#email = email;
    }

    // Аналог User.prototype.getEmail
    getEmail() {
        return this.#email;
    }

    // Аналог User.prototype.changeEmail
    changeEmail(newEmail) {
        this.#email = newEmail;
    }
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
console.log(mango);                         // User { name: "Манго", #email: "mango@mail.com" }

mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail());              // mango@supermail.com
// console.log(mango.#email);                 // **Будет ошибка, это приватное свойство**



//  EXAMPLE 2 ===== 
class User1 {
    // Объявление и инициализация статического свойства
    static TYPES = {
        ADMIN: 'admin',
        EDITOR: 'editor',
    };
    #email;
    #type;

    constructor({ email, type }) {
        this.#email = email;
        this.#type = type;
    }

    get type() {
        return this.#type;
    }

    set type(newType) {
        if (User1.TYPES[newType] === undefined) {
            console.log('Ошибка! Такого типа пользователя не существует');
        }
        return (this.#type = newType);
    }
}

const tango = new User1({
    email: 'mango@mail.com',
    type: User1.TYPES.ADMIN,
});
console.log(tango);                           // User1 { #email: "mango@mail.com", #type: "admin" }

console.log(tango.TYPES);                     // undefined
console.log(User1.TYPES);                     // { ADMIN: 'admin', EDITOR: 'editor' }

console.log(tango.type);                      // admin

tango.type = User1.TYPES.EDITOR;
console.log(tango.type);                      // editor



//  EXAMPLE 3 =====
class User2 {
    // Обьявление приватного статического свойства
    static #takenEmails = [];
    // Обьявление приватного статического метода
    static isEmailTaken(email) {
        return User2.#takenEmails.includes(email);
    }

    #email;

    constructor({ email }) {
        this.#email = email;
        User2.#takenEmails.push(email);
    }
}

const mango1 = new User2({ email: 'mango@mail.com' });

console.log(User2.isEmailTaken('poly@mail.com'));        // false
console.log(User2.isEmailTaken('mango@mail.com'));       // true



//  EXAMPLE 4 =====
class Car {
    // Объявление и инициализация статического свойства
    static description = 'Класс описывающий автомобиль';
    // Обьявление приватного статического метода
    static logInfo(carObj) {
        console.log(`Car.logInfo -> carObj`, carObj);
    }
    // Обьявление приватного свойства
    #test = 'test';     
    // Собственные свойства класса размещаем в конструкторе
    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this._model = model;
        this._price = price;
    }
    // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }
    
    // - Геттер - выводит (показывает) значение
    get model() {
        return this._model;
    }

    // - Сеттер - записывает новое значение
    set model(newModel) {
        this._model = newModel;
    }
    // getModel(newModel) {
    //     this.model = newModel;
    // }
};
console.dir(Car);                   // class Car

const carInstance = new Car({
    brand: 'Audi',
    model: 'Q7',
    price: 35000,
});

Car.logInfo(carInstance);           // Car.logInfo -> carObj Car { brand: "Audi", _model: "Q7", _price: 35000, #test: "test" }
console.log(carInstance);           // Car { brand: "Audi", _model: "Q7", _price: 35000, #test: "test" }

// обращение к get и set не требует вызова - т.е. без ()
// - Геттер 
console.log(carInstance.model);     // Q7
console.log(carInstance.price);     // 35000
// - Сеттер
carInstance.model = 'Q5';
console.log(carInstance.model);     // Q5

carInstance.price = 25500;
console.log(carInstance.price);     // 25500



//  EXAMPLE 5 ===== 
// Класс со статическими свойствами и методами
class Calc {
  // Класс-калькулятор для двух аргументов
  constructor() {}

  // Метод как замена свойству
  static get PI() {
    return 3.14;
  }

  // Статический метод +
  static add(...args) {
    return args.reduce((acc, next) => acc + next, 0);
  }

  // Статический метод *
  static mult(...args) {
    return args.reduce((acc, next) => acc * next, 1);
  }
}

console.log(Calc.PI);                                    // 3.14
console.log(`Сложение:`, Calc.add(2, 3, 4));             // Сложение: 9
console.log(`Умножение:`, Calc.mult(12, 3, 4));          // Умножение: 144



//  EXAMPLE 6 =====
// ИСХОДНЫЙ КЛАСС
class Client {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }

    showLogin() {
        console.log(this.login);
    }
}
// Экземпляр исходного класса
const simon = new Client(`Simon`, `gtwoth3b`);
console.log(simon);                                 // Client { login: "Simon", password: "gtwoth3b" }

// НОВЫЙ (НАСЛЕДУЕМЫЙ) на базе ИСХОДНОГО
class NewClient extends Client {
    constructor(name, age, login, password) {
        // инициализируем исходный класс
        super(login, password);
        this.name = name;
        this.age = age;
    }

    updateAge() {
        return (this.age += 1);
    }
}
// Экземпляр нового класса
const alex = new NewClient('Alex', 25, 'Alex222', 'qwerty12');
console.log(alex);                                  // NewClient { login: "Alex222", password: "qwerty12", name: "Alex", age: 25 }
console.log(alex.updateAge());                      // 26
alex.showLogin();                                   // Alex222



//  EXAMPLE 7 =====
class BaseProduct {
    constructor(name, price, category) {
        this.name = name
        this._price = price
        this.category = category
    }
    // свойства-аксессоры getter & setter
    get price() {
        return this._price
    }

    set price(value) {
        return (this._price = value)
    }
}

class WeightProduct extends BaseProduct {
    constructor(weight, name, price, category) {
        super(name, price, category)
        this.weight = weight
    }

    getTotalCost() {
        console.log(`Общая сумма:`, this.weight * this.price)
    }

    decrWeight(value) {
        let less = this.weight - value;
        if (less < 0) {
            console.log("Не хватает товара на складе");
        } else {
            console.log(`Остаток:`, less);
            return this.weight = less;
        }
    }

    incWeight(value) {
        let more = this.weight + value;
        console.log(`Кол-во кг после завоза:`, more);
        return this.weight = more;
    }
}
// Экземпляр класса WeightProduct
const weightProduct = new WeightProduct(2.5, 'Lemon', 30, 'fruits');
console.log(weightProduct);               // WeightProduct { name: "Lemon", _price: 30, category: "fruits", weight: 2.5 }
weightProduct.getTotalCost();             // Общая сумма: 75
weightProduct.decrWeight(2);              // Остаток: 0.5
weightProduct.incWeight(5);               // Кол-во кг после завоза: 5.5
weightProduct.decrWeight(6);              // Не хватает товара на складе

class CountProduct extends BaseProduct {
    constructor(count, name, price, category) {
        super(name, price, category);
        this.count = count;
    }
    
    getTotalCost() {
        console.log(`Общая сумма:`, this.count * this.price);
    }

    decCount(value) {
        let less = this.count - value;
        if (less < 0) {
            console.log("Не хватает товара на складе");
        } else {
            console.log(`Остаток:`, less);
            return this.count = less;
        }
    }

    incCount(value) {
        let more = this.count + value;
        console.log(`Кол-во после завоза:`, more);
        return this.count = more;
    }
}
// Экземпляр класса CountProduct
const countProduct = new CountProduct(100, 'Snikers', 24, 'sweets');
console.log(countProduct);                 // CountProduct { name: "Snikers", _price: 24, category: "sweets", count: 100 }

countProduct.getTotalCost();               // Общая сумма: 2400
countProduct.price = 40;
console.log(`Цена:`, countProduct.price);  // Цена: 40

countProduct.decCount(80);                 // Остаток: 20
countProduct.incCount(55);                 // Кол-во после завоза: 75