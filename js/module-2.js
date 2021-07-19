const fruits = ["apple", "peach", "pear", "banana"];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];
console.log(lastElement); // banana

const stack = [];
stack.push(1);
console.log(stack); // [1]
stack.push(-1);
console.log(stack); // [1, -1]

const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clients.slice(1)); // ['Ajax', 'Poly', 'Kiwi']


// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
const array = [1, 2, 3, 4, 5];
const getArray = [array[0], array[array.length - 1]];
console.log(getArray); // [1, 5] first and last


// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Эта функция принимает строку, состоящую из слов разделённых только пробелами(параметр message) и цену гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
const message = "JavaScript is in my blood";
const pricePerWord = 10;

let summary = message.split(' ');
summary = summary.length;
const totalPrice = summary * pricePerWord;
console.log(totalPrice);


// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире
const title = "Arrays for begginers";
let linkTitle = title.toLowerCase();
linkTitle = linkTitle.split(' ');
const slugTitle = linkTitle.join('-');
console.log(slugTitle);


// * Перебор (итерация) масивов
const friends = ['Mango', 'Joni', 'Poly', 'Alex'];
const lastIndex = friends.length - 1;
for (let i = 0; i <= lastIndex; i += 1) {
    console.log('Logining friends: ', friends[i]);
}


// * С помощью цикла массив можно заполнить данными.
const numbers = [];
for (let i = 0; i < 3; i += 1) {
  numbers.push(`label-${i}`);
}
console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']

