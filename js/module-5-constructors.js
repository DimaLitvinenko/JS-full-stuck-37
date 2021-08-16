/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
*/

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
*/

// CONSTRUCTOR
function Constructor(prop1 = 0, prop2 = 1) {
    this.prop1 = prop1;
    this.prop2 = prop2;
};
// вызов функции конструктора - new
const newObj = new Constructor()


//  EXAMPLE 1 =====

const Car = function (config = {}) {
    const { brand, model, price } = config;

    // 2. Функция вызывается в контексте созданного объекта,
    //    то есть в this записывается ссылка на него
    this.brand = brand;
    this.model = model;
    this.price = price;

    // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
    //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

    // 4. Ссылка на обьект возвращается в место вызова new Car
};

Car.prototype.sayHi = function () {
    console.log(`Car.prototype.sayHi -> this`, this);  
    // console.log(`Hello :) `);
};

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
};

console.log(Car.prototype);        // {sayHi: ƒ, changePrice: ƒ, constructor: ƒ}

    // 1. Если функция вызывается через new, создаётся пустой обьект
const myCar = new Car({
    brand: 'Audi',
    model: 'Q7',
    price: 35000,
});
console.log(myCar);         // Car {brand: "Audi", model: "Q7", price: 35000}

myCar.sayHi();                      // Car.prototype.sayHi -> this Car {brand: "Audi", model: "Q7", price: 35000}

const myCar2 = new Car({
    brand: 'BMW',
    model: 'X7',
    price: 50000,
});
console.log(myCar2);        // Car {brand: "BMW", model: "X7", price: 50000}

const myCar3 = new Car({
    brand: 'Audi',
    model: 'A6',
    price: 25000,
});
console.log(myCar3);        // Car {brand: "Audi", model: "A6", price: 25000}


//  EXAMPLE 2 =====

// const User = function ({ email, password }) {
//     this.email = email;
//     this.password = password;
// };

// console.log(User.prototype);        // {constructor: ƒ}

// User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
// };

// const mango = new User({ email: 'sno0pyl2@mail.ru', password: 'gtwoth3b' });

// mango.changeEmail('dimaly.too@gmail.com');
// console.log(mango);             // User {email: "dimaly.too@gmail.com", password: "gtwoth3b"}


// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()


//  EXAMPLE 3 =====

// ИСХОДНАЯ ФУНКЦИЯ
// Создаем обьект с помощью конструктора
const User = function (login, password) {
    this.login = login;
    this.password = password;

    this.showLogin = function () {           // плохая практика занимает память
        console.log(this.login);
    };
};

// Создаем метод через прототип
User.prototype.showPassword = function () {   // хорошая практика медот доступен всем обьекта созданым в конструкторе
    console.log(this.password);
};

// Вызиваем функцию конструктора через - new
const user1 = new User('Simon', 'gtwoth3b');
console.log(user1);                                  // User {login: "Simon", password: "gtwoth3b"}

const user2 = new User('Alina', 'srwefd2s');
console.log(user2);                                  // User {login: "Alina", password: "srwefd2s", showLogin: ƒ}

// НОВАЯ ФУНКЦИЯ НА БАЗЕ ИСХОДНОЙ
function NewUser(name, age, login, password) {
    // привязываем обьекс исходной функцыи через метод - call
    User.call(this, login, password);           
    this.name = name;
    this.age = age;
};

// Перезаписываем prototype новой функции
// и привязываем в него prototype из исходной функции
NewUser.prototype = Object.create(User.prototype);
NewUser.prototype.constructor = NewUser;

// Добавляем новые методы в prototype новой функции
NewUser.prototype.updateAge = function () {
    return (this.age += 1);
};

// Создаем екземпляр из новой функции 
const newUser1 = new NewUser('Dimon', 21, 'ImpIStaR', 'qwerty');
console.log(newUser1);                               // NewUser {login: "ImpIStaR", password: "qwerty", name: "Dimon", age: 21, showLogin: ƒ}

newUser1.showLogin();               // ImpIStaR
newUser1.showPassword();                  // qwerty
console.log(newUser1.updateAge());             // 22

user1.showLogin();                  // Simon
user1.showPassword();                     // gtwoth3b


// Что вснёс ЕС6 в JS?


//  EXAMPLE 4 =====
// =============== 1st ===============
function Post(title = 'Hi Everybody', text = 'I am here with you') {
    this.title = title;
    this.text = text;
};

Post.prototype.updateTitle = function (value) {
    return (this.title = value);
    // this.title = value;
    // console.log(this.title);
};

const post1 = new Post();
console.log(post1);                         // Post { title: "Hi Everybody", text: "I am here with you" }

// =============== 2nd ===============
function NewPost(imageUrl = '', title, text) {
    this.image = imageUrl;
    Post.apply(this, [title, text]);
};

console.log(NewPost.prototype);     // { constructor: ƒ NewPost(imageUrl = '', title, text) }

NewPost.prototype = Object.create(Post.prototype);
NewPost.prototype.constructor = NewPost;

NewPost.prototype.updateImage = function (url) {
    return (this.image = url);
    // this.image = url;
    // console.log(this.image);
};

const post2 = new NewPost(
    'https://wikimedia.org/thumb/Alone_in_Space_-_Astronomers_Find_New_Kind_of_Planet.jpg',
);
console.log(post2);                         // NewPost { title: "Hi Everybody", text: "I am here with you", image: "https://wikimedia.org/thumb/Alone_in_Space_-_Astronomers_Find_New_Kind_of_Planet.jpg" }

// =============== 2nd ===============
function BestPost(author, imageUrl, title, text) {
    this.author = author;
    NewPost.call(this, imageUrl, title, text);
};

BestPost.prototype = Object.create(NewPost.prototype);
BestPost.prototype.constructor = BestPost;

BestPost.prototype.showAuthor = function () {
    console.log(this.author);
};

const post3 = new BestPost("Valentin");
console.log(post3);                         // BestPost { author: "Valentin", image: "", title: "Hi Everybody", text: "I am here with you" }

// Вызов методов
post3.showAuthor();     // Valentin
post3.updateImage("https://pornhub.com/bestImage/Mia_Khalifa_boobs.jpg");
post3.updateTitle("My bestPost about Js");