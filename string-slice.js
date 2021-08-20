const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';

const words = anthem.split(' ');

const withoutA = anthem.split('a');
//console.log(withoutA);

//slice
const smallSlice = anthem.slice(5, 13);

//substr
const anotherPart = anthem.substr(11,7);

//substring

const againPart = anthem.substring(11,15);

//concat
const first = 'amader';
const second = 'City';

const fullString = first.concat(second).concat('abc');
console.log(fullString);

//

const words2 = ['a', 'b', 'c', 'd'];
const allJoined = words2.join(' ');