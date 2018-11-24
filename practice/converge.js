const R = require('ramda');

const person = {
	id: 1,
	name: 'Alex'
};

const generateUrl = id => `https://img.socialnetwork.com/avatar/${id}/.png`;
const getUrlFromPerson = R.compose(generateUrl, R.propOr('default', 'id'));

// const getUpdatePerson = person => R.assoc('avatar', getUrlFromPerson(person), person);
// result - {
//   id: 1,
//   name: 'Alex',
//   avatar: 'https://img.socialnetwork.com/avatar/1/.png'
// }

const getUpdatePerson = R.converge(R.assoc('avatar'), [getUrlFromPerson, R.identity]);
// result - {
//   id: 1,
//   name: 'Alex',
//   avatar: 'https://img.socialnetwork.com/avatar/1/.png'
// }

const result = getUpdatePerson(person);
console.log(result);