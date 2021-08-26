// * АБСТРАГИРОВАНИЕ ПОВТОРЕНИЯ

//  Часто callback-функции анонимны и объявляются как стрелочные функции прямо во время передачи.
const repeat = function (n, action) {
  for (let i = 0; i < n; i += 1) {
      action(i);
    //   console.log(i);                  //  0, 1, 2, 3, 4
  }
};

const labels = [];

repeat(5, value => {
  labels.push(`Label - ${value + 1}`);
});

// console.log(labels);                   //  ["Label - 1", "Label - 2", "Label - 3", "Label - 4", "Label - 5"]


/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называется
 *      «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *      или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */
const goMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
};

// const add = function (x, y) {
//     return x + y;
// };

// const sub = function (x, y) {
//     return x - y;
// };

// goMath(2, 3, add);
// goMath(10, 8, sub);

goMath(
    2,
    30,
    function (x, y) { return x + y; }
);
goMath(
    20,
    8,
    function (x, y) { return x - y; }
);


/*
    * Отложенный вызов: регистрация событий         (КОЛИЧЕСТВО КЛИКОВ ПО КНОПКЕ)
*/
const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
    console.log('Клик по кнопке');
};

buttonRef.addEventListener('click', handleBtnClick);


/*
    * Отложенный вызов: геолокация            (ОПРЕДЕЛЯЕТ ГЕОЛОКАЦИЮ)
*/
const onGetPositionSuccess = function (position) {
    console.log('Это вызов onGetPositionSuccess');
    console.log(position);
};

const onGetPositionError = function (error) {
    console.log(error);
};

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );


/*
    * Отложенный вызов: интервалы          (ФУНКЦИЯ ВЫЗИВАЕТЬСЯ ЧЕРЕЗ ВРЕМЯ)
*/
const callback = function () {
    console.log('Через 2 секунды внутри колбека в таймауте');
};

// console.log('В коде перед таймаутом');

// setTimeout(callback, 2000);

// console.log('В коде после таймаута');


/*
    * Отложенный вызов: http-запрос
     * - API URL: https://pokeapi.co/api/v2/pokemon
*/
const onRequestSuccess = function (response) {
    // console.log(
    //     'Вызов функции onRequestSuccess после успешного ответа бекенда',
    // );
    // console.log(response);
};

fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(onRequestSuccess);

    
/*
    * Фильтрация
*/
const filter1 = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        // console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el)
        }
    };

    return filteredArray;
};

                        // 1. надо передать функцию
                        // 2. функция получает элемент массива
                        // 3. если элемент массива удовлетворяет условию то функция вернет true
                        // 4. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
    return value >= 3;
};

const r1 = filter1([1, 2, 3, 4, 5], callback1)
console.log(r1);                                    //  [3, 4, 5]

const callback2 = function (value) {
    return value <= 4;
}

const r2 = filter1([1, 2, 3, 4, 5, 6, 7], callback2);
console.log(r2);                                    //  [1, 2, 3, 4]


/*  Функция filter создает новый массив, в который будет добавляться результат выполнения callback-функции test над каждым элементом массива array. 
    Результатом работы функции будет массив отфильтрованных элементов.
    Если элемент массива проходит тест, то есть callback-функция возвращает true, он добавляться в отфильтрованный массив.
*/
const filter = function (array, test) {
  const filteredElements = [];

  for (const element of array) {
    const passed = test(element);

    if (passed) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
};

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// }
// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);                                                              //  [{ name: 'apples', quantity: 200, isFresh: true }, { name: 'grapes', quantity: 150, isFresh: false }]
                                              
const getFruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
console.log(getFruitsWithQuantity);                                          //  [{ name: 'apples', quantity: 200, isFresh: true }, { name: 'grapes', quantity: 150, isFresh: false }]

// const getFreshFruits = function (fruit) {
//   return fruit.isFresh;
// }
// const r4 = filter(fruits, getFreshFruits);
// console.log(r4);                                                             //  [{ name: 'apples', quantity: 200, isFresh: true }, { name: 'bananas', quantity: 100, isFresh: true }]

const getFreshFruits = filter(fruits, fruit => fruit.isFresh);
console.log(getFreshFruits);                                                 //  [{ name: 'apples', quantity: 200, isFresh: true }, { name: 'bananas', quantity: 100, isFresh: true }]


// EXAPMLE 1 =======
const results = [{ mail: "", scores: 10 }];
const getResultsByTest = function (getMax, getMin, mail, ...scores) {
  let total = 0;

  for (let i of scores) {
    total += i;
  };
  // console.log(total);

  const obj = { mail, scores: total };
  results.push(obj);
  console.log(results);

  const scoresArr = [];
  for (let obj of results) {
    // console.log(obj.scores);
    scoresArr.push(obj.scores);
  }
  console.log(scoresArr);           // [10, 12]    // [10, 12, 9]

  let max = getMax(scoresArr);
  let min = getMin(scoresArr);
  console.log(`max:`, max);         // max: 12    // max: 12
  console.log(`min:`, min);         // min: 10    // min: 9
};

  // CallBack1 
const getMaxValue = function (arr) {
  return Math.max(...arr);
};
  // CallBack2 
const getMinValue = function (arr) {
  return Math.min(...arr);
};

getResultsByTest(
  getMaxValue,
  getMinValue,
  'dimaly.too@gmail.com',
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
);
getResultsByTest(
  getMaxValue,
  getMinValue,
  'saimon@gmail.com',
  1,
  1,
  0,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
);


// EXAMPLE 2 =======
const getF = (count, callback) => {
  let firstNum = 0;
  let secondNum = 1;
  const arrWithValues = [firstNum, secondNum];
  // console.log(arrWithValues);                  // [0, 1]

  for (let i = 3; i <= count; i++) {
    let newNumber = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = newNumber;
    // console.log(`newNumber:`, newNumber);     // newNumber: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

    arrWithValues.push(newNumber);
  };
  console.log(arrWithValues);                 // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]

  let result = callback(arrWithValues);
  return result;
};

  // callback1
const getEvenValues = function (arr) {
  const arrValues = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      arrValues.push(num);
    };
  };
  return arrValues;
};
  // callback2
const getSum = function (arr) {
  let total = 0;

  for (let i of arr) {
    total += i;
  };
  return total;
};

console.log(`Только чётные:`, getF(14, getEvenValues));      // Только чётные: [0, 2, 8, 34, 144]
console.log(`Сумма всех:`, getF(7, getSum));                // Сумма всех: 20


// EXAMPLE 3 ========
const array = [
  { name: 'Alice', age: 18 },
  { name: 'Dick', age: 19 },
  { name: 'Alan', age: 17 },
  { name: 'Bob', age: 20 },
  { name: 'Fill', age: 21 },
  { name: 'Barbra', age: 16 },
  { name: 'Sarah', age: 17 },
];

// function getStudentByAge(arr) {
//     // console.log(arr)
//   const filteredStudents = [];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

//     let condition = arr[i].age >= 18;
//     console.log('condition', condition);

//      if (condition) {
//       filteredStudents.push(arr[i]);
//     };
//   };
//   console.log(filteredStudents);      // [{ name: "Alice", age: 18 }, { name: 'Dick', age: 19 }, { name: 'Bob', age: 20 }, { name: 'Fill', age: 21 }]
// };

// getStudentByAge(array);

// callback1
function getYoungStudents(arr) {
  const array = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < 18) {
      array.push(arr[i]);
    };
  };
  return array;
};

// callback2
function getOldStudents(arr) {
  const array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      array.push(arr[i]);
    };
  };
  return array;
};

// callback 3
function getNames(arr) {
  const names = [];

  for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i].name)
    names.push(arr[i].name);
  };
  return names;
};

function getStudents(callback, arr) {
  return callback(arr);
};

const youngStudents = getStudents(getYoungStudents, array);
console.log(youngStudents);                                // [{ name: "Alan", age: 17 }, { name: "Barbra", age: 16 }, { name: "Sarah", age: 17 }]

const oldStudents = getStudents(getOldStudents, array);
console.log(oldStudents);                              // [{ name: "Alice", age: 18 }, { name: 'Dick', age: 19 }, { name: 'Bob', age: 20 }, { name: 'Fill', age: 21 }]

const studensNames = getStudents(getNames, array);
console.log(studensNames);                        // ["Alice", "Dick", "Alan", "Bob", "Fill", "Barbra", "Sarah"]




//   💢 TASKs (telegram bot)

//Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. 
// Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // функция высшего порядка
// function makeMessage(pizzaName, callback) {
  
//   return callback(pizzaName);
// }

// console.log(makeMessage('Роял гранд', makePizza));      //  Пицца Роял гранд готовится, ожидайте...
// console.log(makeMessage('Ультрасыр', deliverPizza));    //  Доставляем пиццу Ультрасыр.



// Дополни второй вызов функции makePizza(pizzaName, callback),
//  передав вторым аргументом инлайн колбэк - функцию eatPizza(pizzaName),
//    которая логирует строку 'Едим пиццу <имя пиццы>'.

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });

// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//  console.log(`Едим пиццу ${pizzaName}`);
// });



// Необходимо написать логику обработки заказа пиццы. 
// Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.
//    Если в свойстве pizzas нет пиццы с названием из параметра pizzaName,
//      метод order должен возвращать результат вызова колбэка onError,
//      передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'
//    Если в свойстве pizzas есть пицца с названием из параметра pizzaName,
//      метод order должен возвращать результат вызова колбэка onSuccess,
//      передавая ему аргументом имя заказанной пиццы.

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
            
      return onSuccess(pizzaName);
    };

    return onError(`В ассортименте нет пиццы с названием ${pizzaName}`);
  },
};

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));  // Ваш заказ принят. Готовим пиццу Аль Копчино.
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));     // Ошибка! В ассортименте нет пиццы с названием Биг майк
pizzaPalace.order('Венская', makePizza, onOrderError);



// Выполни рефакторинг методов объекта pizzaPalace, 
//  расставив отсутствующие this в местах обращения к свойствам и методам объекта.

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };



// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды.
// Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Пиши код ниже этой строки
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Пиши код выше этой строки
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']



// Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 
// 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.'
// Позиция это значение параметра position - позиция элемента в массиве(на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages получился массив сообщений о статусе заказов из массива orders с помощью цикла for.
const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];

for (let i = 0; i < orders.length; i += 1) {
  // messages.push(composeMessage.call(orders[i], i + 1));
  const msg = composeMessage.call(orders[i], i + 1);
  messages.push(msg);
}

console.log(messages);  // ["Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.", "Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.", "Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди."]



// Функция composeMessage(customerName) создаёт приветственные сообщения для ресторанов. 
// Дополни код так, чтобы в переменных pizzaPalaceComposer и burgerShackComposer были её копии с привязанным контекстом к соответствующим объектам.
// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');


// Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики. 
// Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service.
// Сбор статистики симулируется логированием строки.
// Разберись и дополни код так, чтобы он работал верно.
const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);                // Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);          // ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net', 'kiwi@mail.uk']

const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);              // Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList);          // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
