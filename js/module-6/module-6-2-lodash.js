// [Библиотека методов Lodash] (https://github.com/lodash/lodash)
// https://lodash.com/


/*
 *   _.isEmpty(value)
 */

console.log(_.isEmpty({}));             // true

console.log(_.isEmpty({ a: 1 }));         // false


/*
 *   _.get(object, path, [defaultValue])
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city
 */

const user = {
    name: 'mango',
    location: {
        city: 'Lviv',
    },
};

console.log(_.get(user, 'location.city'));           // Lviv

// console.log(user.location.city);            // Lviv

// if (user && user.location && user.location.city) {
//     console.log(user.location.city);            // Lviv
// }

console.log(user?.location?.city);           // Lviv


/*
 *   _.union([arrays])
 */

console.log(_.union([1, 2, 3], [3, 4, 5]));           // [1, 2, 3, 4, 5]


/*
 *   _.range([start=0], end, [step=1])
 */

console.log(_.range(10, 31, 2));            // [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]

console.log(_.range(5, 16));             // [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


/*
 *   _.sum(array)  и  _.sumBy(array, [iteratee=_.identity])
 */

console.log(_.sum([10, 20, 30, 40]));           // 100

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

console.log(_.sumBy(players, player => player.timePlayed));             // 1240


/*
 *   _.sortBy(collection, [iteratees=[_.identity]])
 */

console.log(_.sortBy(players, [`name`, 'timePlayed']));             


/*
 *   _.uniq(array)  и  _.uniqBy(array, [iteratee=_.identity])
 *   _.sortedUniq(array)  и  _.sortedUniqBy(array, [iteratee])
 */

console.log(_.uniq([2, 1, 2, 3, 1]));            // [2, 1, 3]

console.log(_.sortedUniq([1, 1, 2]));            // [1, 2]

console.log(_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x'));           // [{ 'x': 1 }, { 'x': 2 }]

console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));           // [1.1, 2.3]


/*
 *   _.random([lower=0], [upper=1], [floating])
 */

console.log(_.random(1.2, 5.2).toFixed(2));            // a floating-point number between 1.20 and 5.20    


/*
 *   _.min(array)  и  _.max(array)
 *   _.minBy(array, [iteratee=_.identity])  и  _.maxBy(array, [iteratee=_.identity])
 */

console.log(_.min([4, 2, 8, 6]));           // 2

console.log(_.minBy(players, player => player.timePlayed));          // { id: "player-5", name: "Chelsey", timePlayed: 80, online: true }

console.log(_.max([4, 2, 8, 6]));           // 8

console.log(_.maxBy(players, player => player.timePlayed).name);            // Poly

console.log(_.maxBy(players, 'timePlayed'));            // { id: "player-2", name: "Poly", timePlayed: 470, online: true }


/*
 *   _.camelCase([string='']),  _.capitalize([string='']),  _.kebabCase([string='']),  _.lowerCase([string='']), upperCase()
 */

console.log(_.camelCase('Foo Bar'));            // fooBar
console.log(_.camelCase('--foo-bar--'));            // fooBar

console.log(_.capitalize('FRED'));              // Fred

console.log(_.kebabCase(' a b c '));            // a-b-c
console.log(_.kebabCase('ImpiStar'));            // impi-star

console.log(_.lowerCase('__FOO_BAR__'));            // foo bar

console.log(_.upperCase('--foo-bar'));            // FOO BAR