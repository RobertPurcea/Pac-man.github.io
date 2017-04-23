// returns the number rounded to x decimals
const round = (number, decimals) => Math.round(number * 10 ** decimals) / 10 ** decimals;

// returns a random value between min and max
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// transforms a simple index into a x, y index
const indexToDoubleIndex = (array, index) => {
	return [index % array.width,  Math.floor( index / array.width )];
};

// distance between two points <= speed  -->>  return true
const almostIntersect = (x1, y1, x2, y2, speed) => {
	const distance = Math.abs(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
	return distance <= speed ? true : false;
};


export {round, random, indexToDoubleIndex, almostIntersect};



// Array.prototype.swap = function (index1, index2) {
// 	const tmp = this[index1];
// 	this[index1] = this[index2];
// 	this[index2] = this[index1];
// };

// // 0 < distance <= speed  ==>>  return true
// const almostIntersect = (x1, y1, x2, y2, speed) => {
// 	const distance = Math.abs(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
// 	return (distance <= speed) && (distance > 0) ? true : false;
// };