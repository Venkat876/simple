console.log('inside utils.js..!');

const square = (x) => {
	return x*x;
}
const add = (a,b) => a + b ;

const subtract = (a,b) => {
	return a - b ;
}

export {square, add, subtract as default};