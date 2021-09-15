// console.dir(document);

// Виды узлов:  ➰узел-элемент(тег), ➰узел-комментарий и ➰текстовый узел


// ⭕ Доступ к элементам:

// • по селектору тега ✅
const btnByTag = document.querySelector('button');
console.log(btnByTag);
console.dir(btnByTag);

// • по селектору идентификатора ✅
const btnById = document.querySelector('#example');
console.log(btnById);
console.dir(btnById);

const btnByIdOk = document.getElementById('example');
// console.log(btnByIdOk);
// console.dir(btnByIdOk);

// • по селектору класса ✅
const btnByClass = document.querySelector('.js-button');
console.log(btnByClass);
console.dir(btnByClass);

const elemsByClass = document.getElementsByClassName('js-button');
console.log(elemsByClass);       // HTMLCollection - коллекция без методов массива
const elemsByClassName = document.querySelectorAll('.js-button');
console.log(elemsByClassName);

// • по селектору атрибута ✅
const btnByAttr = document.querySelector('[data-decrement]');
console.log(btnByAttr);

// • по селектору наследника ✅
const elemByParent = document.querySelector('body>div');
console.log(elemByParent);
console.dir(elemByParent);

const elemsByParent = document.querySelectorAll('body>div');
console.dir(elemsByParent);

// • по селектору потомка ✅
const elemByDescendant = document.querySelector('body span');
console.log(elemByDescendant);

const elemsByDescendant = document.querySelectorAll('body p');
console.log(elemsByDescendant);


// ⭕ Навигация: 

console.log(btnByTag.parentNode);        // получаем родителя
console.log(btnByTag.childNodes);        // NodeList + text
console.log(btnByTag.children);          // HTMLCollection tag only

/* ⚡
⛥  firstChild, lastChild, previousSibling, nextSibling =>  text || element
⛥  firstElementChild, lastElementChild, previousElementSibling, nextElementSibling =>  tags only
*/


// ⭕ class в свойстве classList в виде DOMTokenList:

console.log(btnByTag.classList);

btnByTag.classList.add('js-class');

console.log(btnByTag.classList.contains('lvjbvldsBVJ'));
console.log(btnByTag.classList.contains('js-button'));

btnByTag.classList.replace('js-class', 'new-class');

btnByTag.classList.toggle('new-button');
btnByTag.classList.toggle('new-button');


// ⭕ Создание узлов - ߶ способа:
  // ⚈ createElement() =>  object

const button = document.createElement('button');
button.textContent = 'click';
console.log('textContent: ', button.textContent);
console.dir(button);
console.log(button);
button.style.background = 'green';
button.classList.add('my-btn');
button.setAttribute('type', 'button');
button.dataset.type = 'my-button';

  // ⚈ `` - строчная разметка =>  string
const stringBtn = `<button class="my-btn" type="button" data-type="my-button" style="background: red">STRING BTN</button>`;
console.log(stringBtn);


// ⭕ Клонирование узлов:

const cloneButtonBefore = button.cloneNode(false);
cloneButtonBefore.textContent = 'before';

const cloneButtonAfter = button.cloneNode(false);
cloneButtonAfter.textContent = 'after';

const cloneButtonPrepend = button.cloneNode(false);
cloneButtonPrepend.textContent = 'prepend';

const cloneButtonAppend = button.cloneNode(false);
cloneButtonAppend.textContent = 'append';

console.log(cloneButtonBefore);


// ⭕ Встраивание элементов - ߶ вида:
  // • для объектов через createElement

// btnByTag.before(cloneButtonBefore);        // строго перед
// btnByTag.after(cloneButtonAfter);          // строго после
// btnByTag.appendChild(cloneButtonAppend);
// btnByTag.prepend(cloneButtonPrepend);
// ============ || ==================
btnByTag.insertAdjacentElement('beforebegin', cloneButtonBefore);
btnByTag.insertAdjacentElement('afterbegin', cloneButtonPrepend);
btnByTag.insertAdjacentElement('beforeend', cloneButtonAppend);
btnByTag.insertAdjacentElement('afterend', cloneButtonAfter);

  // • для строк 
// btnByTag.innerHTML = stringBtn;

btnByTag.insertAdjacentHTML('beforebegin', stringBtn);
btnByTag.insertAdjacentHTML('afterbegin', stringBtn);
btnByTag.insertAdjacentHTML('beforeend', stringBtn);
btnByTag.insertAdjacentHTML('afterend', stringBtn);


// ⭕ Удаление:
// btnByTag.innerHTML = '';  - можно для строчных

// btnByTag.removeChild(cloneButtonBefore);     // нельзя удалить, потому что не является вложеным элементом
btnByTag.removeChild(cloneButtonAppend);
btnByTag.removeChild(cloneButtonPrepend);
// btnByTag.removeChild(cloneButtonAfter);      // нельзя удалить, потому что не является вложеным элементом

cloneButtonBefore.remove();
cloneButtonAfter.remove();