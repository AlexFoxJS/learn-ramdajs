const R = require('ramda');

const product = {
	name: 'widget',
	price: 10,
	avgRating: 4.5,
	shippingWeight: '2 lb',
	shippingCost: 12,
};

// const getProps = R.pick(['name', 'price', 'category']); // { name: 'widget', price: 10 }
// const getProps = R.pickAll(['name', 'price', 'category']); // { name: 'widget', price: 10, category: undefined }
// const getProps = R.pickBy(val => Number(val)); // { price: 10, avgRating: 4.5, shippingCost: 12 }
// const getProps = R.pickBy((val, key) => R.contains('shipping', key)); // { shippingWeight: '2 lb', shippingCost: 12 }
// const getProps = R.omit(['shippingWeight', 'shippingCost']); // { name: 'widget', price: 10, avgRating: 4.5 }
const getProps = R.pickBy((val, key) => !R.contains('shipping', key)); // { name: 'widget', price: 10, avgRating: 4.5 }

const result = getProps(product);
console.log(result);
