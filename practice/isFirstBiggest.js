const { converge, equals, head, sort, descend, identity, compose } = require('ramda');

const shouldBeTrue = [6, 2, 4, 5, 1];
const shouldBeFalse = [3, 1, 6, 5, 2];

// const isFirstBigger = xs => xs[0] === xs.sort((a, b) => b - a)[0]; // true false
const biggestItem = compose(head, (sort(descend(identity))));
const isFirstBigger = converge(equals, [head, biggestItem]); // true false

console.log(isFirstBigger(shouldBeTrue), isFirstBigger(shouldBeFalse));