import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import {addExpense } from './action/expenses.js';
import {setTextFilter } from './action/filters.js';
import getVisibleExpenses from './selectors/expenses.js';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({description : 'water-Bill'}));
store.dispatch(addExpense({description : 'house-rent'}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
console.log(state);



ReactDOM.render(<AppRouter />,document.getElementById('app'));

