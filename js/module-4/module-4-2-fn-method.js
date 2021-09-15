/*
*   call    ---    fn.call(obj, arg1, arg2, ...)
*     и 
*   apply   ---    fn.apply(obj, [arg1, arg2, ...])         
*/

//      apply
// const greet = function (guest, stars) {

//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.apply(hotel, ['Mango', 5]));     //  "Mango, welcome to 5-star Resort Hotel!"
// console.log(greet.apply(motel, ['Poly', 4]));      //  "Poly, welcome to 4-star Sunlight Motel!"


//      call
// const greet = function (guest, stars) {

//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.call(hotel, 'Mango', 5));     //  "Mango, welcome to 5-star Resort Hotel!"
// console.log(greet.call(motel, 'Poly', 4));      //  "Poly, welcome to 4-star Sunlight Motel!"


//      call ang apply
const showThis = function (a, b, arr) {
    console.log(a, b, arr);
    console.log(`showThis -> this`, this);
};
// showThis();           // undefined

const objA = {
    a: 5,
    b: 10,
};

showThis.call(objA, 5, 1, [100, 200, 300]);         // 5, 1, [100, 200, 300]
showThis.apply(objA, [5, 1, [100, 200, 300]]);      // 5, 1, [100, 200, 300]

const objB = {
    x: 175,
    y: 205,
};

showThis.call(objB, 1, 1, 2);               // 1, 1, 2
showThis.apply(objB, [1, 1, 2]);            // 1, 1, 2


//       call
const changeColor = function (color) {
    console.log(`changeColor -> this`, this);    
    this.color = color;
};

const hat = {
    color: 'black',
};

// changeColor.call(hat, 'orange');

// console.log(hat);           // {color: "orange"}

const sweater = {
    color: 'green',
};

// changeColor.call(sweater, 'blue');

// console.log(sweater);       // {color: "blue"}


/*
*        bind    ---    const boundFn = fn.bind(obj, arg1, arg2, ...)
*/
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor('yellow');          // changeColor -> this {color: "black"}
console.log(hat);                       // {color: "yellow"}

changeSweaterColor('red');        // changeColor -> this {color: "green"}
console.log(sweater);                   // {color: "red"}


// const greet = function (guest) {
//   return `${guest}, welcome to ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };

// const hotelGreeter = greet.bind(hotel, 'Mango');

// hotelGreeter();           //  "Mango, welcome to Resort Hotel!"


/*
*        counter
*/
// const counter = {
//     value: 0,
//     increment(value) {
//         console.log(`increment -> this`, this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log(`decrement -> this`, this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment.bind(counter))
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);                    // {value: 5, increment: ƒ, decrement: ƒ}