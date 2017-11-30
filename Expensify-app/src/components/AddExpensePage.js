import React from 'react';

const AddExpensePage = (props) => {
	console.log(props);
	return (
	  <div>
	   <p>This is from AddExpensePage {props.match.params.id}</p>
	  </div>
    );
}
export default AddExpensePage;