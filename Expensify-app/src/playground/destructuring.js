const book = {
	title : 'Ego is the Enemy',
	author : 'Rayan Holiday',
	publisher : {
		name : 'penguin'
	}
}

const {name : publisherName = 'Self-Publish'} = book.publisher;

console.log(publisherName);

//useing array destructuring for easier and better use

const item = ['mango','apple','tamato','onion'];
const [mango,,tamato] = item;
console.log(mango);