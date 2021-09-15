/*  Наследование
 *  - extends
 *  - super()
 */
class Hero {
    constructor({ name = 'Hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получает: ${amount} опыта`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor({ weapon, ...restProps } = {}) {
        super(restProps);
        
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакует используя: ${this.weapon}`);
    }
}

class Berserk extends Warrior {
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);

        this.warcry = warcry;
    }

    rage() {
        console.log(`${this.name} кричит:`, this.warcry);
    }
}

class Mage extends Hero {
    constructor({ spells, ...restProps } = {}) {
        super(restProps);

        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} что-то там кастует 🧙‍♂️`);
    }
}

const human = new Warrior({ name: 'ImpiStar', xp: 1000, weapon: 'DragonSword' });
console.log(human);                 // Warrior { name: "ImpiStar", xp: 1000, weapon: "DragonSword" }
human.attack();                     // ImpiStar атакует используя: DragonSword
human.gainXp(1000);                 // ImpiStar получает: 1000 опыта

const mage = new Mage({ name: 'Drago', xp: 500, spells: ['FireBool'] });
console.log(mage);                  // Mage { name: "Drago", xp: 500, spells: ["FireBool"] }
mage.cast();                        // Drago что-то там кастует 🧙‍♂️
mage.gainXp(500);                   // Drago получает: 500 опыта

const ork = new Berserk({ name: 'Ajax', xp: 1500, weapon: 'Axe', warcry: 'waaaaah' });
console.log(ork);                   // Berserk { name: "Ajax", xp: 1500, weapon: "Axe", warcry: "waaaaah" }
ork.rage();                         // Ajax кричит: waaaaah
ork.attack();                       // Ajax атакует используя: Axe
ork.gainXp(300);                    // Ajax получает: 300 опыта 

console.log(    
    `human.__proto__ === Warrior.prototype`,
    human.__proto__ === Warrior.prototype
);                                                                  // true
// console.log(Object.getPrototypeOf(human) === Warrior.prototype);

console.log(
    `Warrior.prototype.__proto__ === Hero.prototype`,
    Warrior.prototype.__proto__ === Hero.prototype
);                                                                  // true


console.log(`Mage.prototype ->`,Mage.prototype);                      // Mage.prototype -> Hero { constructor: ƒ, cast: ƒ }
console.log(`Berserk.prototype ->`, Berserk.prototype);               // Berserk.prototype -> Warrior { constructor: ƒ, rage: ƒ }
console.log(`Warrior.prototype ->`, Warrior.prototype);               // Warrior.prototype -> Hero { constructor: ƒ, attack: ƒ }
console.log(`Hero.prototype ->`, Hero.prototype);                     // Hero.prototype -> { constructor: ƒ, gainXp: ƒ }



/*  Ключевое слово extends позволяет реализовать наследование классов, когда один класс (дочерний, производный) наследует свойства и методы другого класса (родителя). 
*   В выражении class Child extends Parent дочерний класс Child наследует (расширяет) от родительского класса Parent.
*   Это означает, что мы можем объявить базовый класс, 
*   который хранит общие характеристики и методы для группы производных классов, 
*   которые наследуют свойства и методы родителя, но также добавляют свои уникальные.
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

// Ключевое слово extends указывает на родительский класс, чьи свойства будут унаследованы.
class ContentWriter extends User {
    // Тело класса ContentWriter
    posts;

    constructor({ email, posts }) {
        // Вызов конструктора родительского класса User
        super(email);
        this.posts = posts;
    }

    addPost(post) {
        this.posts.push(post);
    }
}

const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
console.log(writer);                                // { email: 'mango@mail.com', posts: [] }
console.log(writer.email);                          // 'mango@mail.com'
writer.addPost('post-1');
console.log(writer.posts);                          // ['post-1']

/* Класс ContentWriter наследует от класса User его конструктор, геттер и сеттер email, а также одноимённое публичное свойство. 
*  __Важно помнить, что приватные свойства и методы класса-родителя не наследуются классом-ребёнком.
*/