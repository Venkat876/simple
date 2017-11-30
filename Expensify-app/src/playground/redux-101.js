import {createStore} from 'redux';

const countReducer = (state = { count :  0},action) =>{ 
	switch (action.type){
		case 'INCREMENT' :  
			return { 
				count : state.count + action.incrementBy
			};
		
	    case 'DECREMENT' :
	    	return {
	    		count : state.count - action.decrementBy 
	    	};
	    case 'RESET' :
		    return {
		    	count : 0
		    };
	    case 'SET' :
	       return {
	       	count : action.count 
	       };
		default : 
			return state;

	}
	
};

const store = createStore(countReducer);

const incrementCount = ({incrementBy = 1} = {}) =>{
	return {
		type : 'INCREMENT',
		incrementBy : incrementBy
	};
}

const decrementCount = ({decrementBy = 1} = {}) => ({
		type : 'DECREMENT',
		decrementBy : decrementBy
	
})

const resetCount = () =>{
	return {
		type: 'RESET',
	};
}
const setCount = ({count = 1} = {}) => ({
		type : 'SET',
		count 
	
})
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({
	type : 'INCREMENT',
	incrementBy : 15
});

store.dispatch(incrementCount({incrementBy:10}));

store.dispatch(resetCount());

store.dispatch({
	type: 'DECREMENT'
});

store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(setCount({count:100}));
