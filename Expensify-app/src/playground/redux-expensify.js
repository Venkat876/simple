	import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


const addExpense = (
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

const removeExpense = ({id}) => {
	return ({
		type : 'REMOVE_EXPENSE',
		id: id
	});
};

const editExpense = (id,update) => {
	return ({
		type : 'EDIT_EXPENSE',
		id,
		update
	});

};

const setTextFilter = (text = '') => ({
	type : 'SET_TEXT_FILTER',
	text

});

const sortByDate = () => {
	return ({
		type : 'SORT_BY_DATE'
	});
};


const sortByAmount = () => {
	return ({
		type : 'SORT_BY_AMOUNT'
	});
};

const setStartDate = (startDate) => ({
	type : 'START_DATE',
	startDate,

});

const setEndDate = (endDate) => ({
	type : 'END_DATE',
	endDate,

});

const expenseReducerStateDefault = [];
const expenseReducer = (state = expenseReducerStateDefault,action) => {
	switch(action.type){
		case 'ADD_EXPENSE' :
           	return [...state, action.expenses];
        case 'REMOVE_EXPENSE' :
        	return state.filter(({id})=>{
        		return id!==action.id;
        	});
        case 'EDIT_EXPENSE' : 
        	return state.map((expense)=>{
        		if(expense.id == action.id){
        			return {
        				...expense,
        				...action.update
        			}
        		}
        		else {
        			return expense;

        		}
        	});
		default :
			return state;
	}
};

const filterStateDefault = {
	text : '',
	sortBy : 'date',
	startDate : undefined,
	endDate : undefined
}
const filterReducer = (state = filterStateDefault , action) =>{
	switch(action.type){
		case 'SET_TEXT_FILTER':
		   return {
		   	...state,
		   	text : action.text
		   };
		case 'SORT_BY_DATE': 
			return {
				...state,
				sortBy : 'date'
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy : 'amount'

			};
		case 'START_DATE':
			return {
				...state,
				startDate : action.startDate
			};
		case 'END_DATE':
			return{
				...state,
				endDate: action.endDate
			}
		default : 
			return state;
	}
};
const store = createStore(
	combineReducers({
		expenses : expenseReducer,
		filter : filterReducer
	})
);

const getVisibleExpenses = (expenses , { text,sortBy,startDate,endDate}) =>{
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate != 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;
		return startDate && endDate && textMatch ;
	}).sort((a,b)=>{
		if(sortBy === 'date'){
			return a.createdAt < b.createdAt ? 1 : -1;
		}
		else if(sortBy==='amount'){
			return a.amount < b.amount ? 1 : -1 ;
		}
	});

};

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
	console.log(visibleExpenses);	
});

const expenseOne = store.dispatch(addExpense({description :'rent',amount : 100}));
/*store.dispatch(removeExpense({ id : expenseOne.expenses.id}));

const expenseTwo = store.dispatch(addExpense({description :'telephone',amount : 500}));
store.dispatch(editExpense(expenseTwo.expenses.id, {amount : 600}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByDate());
store.dispatch(sortByAmount());*/

store.dispatch(setStartDate(125));
/*store.dispatch(setStartDate());
store.dispatch(setEndDate(125));*/


const deomState = {
	expenses : [{
		id : 'asdfsdf',
		description : 'Dec rent',
		note : 'This is the final payment',
		amount : 5000 ,
		createdAt : 0
	}],
	filter :{
		text : 'rent',
		sortBy : 'date' ,//amount
		startDate : undefined ,
		endDate : undefined 
	} 
};

const user = {
	name : 'venkat',
	age : 21
};
console.log({
	
	...user,
	location: 'visakhapatnam',
	age : 20
})