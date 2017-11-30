import uuid from 'uuid';

export const addExpense = (
	{description = '',
	note = '', 
	amount = 0 , 
	createdAt = 0}
	) => ({
		type : 'ADD_EXPENSE',
		expenses : {
			id : uuid(),
			description,
			note, 
			amount,
			createdAt			
		}

	});

export const removeExpense = ({id}) => {
	return ({
		type : 'REMOVE_EXPENSE',
		id: id
	});
};

export const editExpense = (id,update) => {
	return ({
		type : 'EDIT_EXPENSE',
		id,
		update
	});

};
