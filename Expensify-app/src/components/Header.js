import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
	<div>
		<h1>Expensify</h1>
		<NavLink to="/" activeClassName="is-active" exact={true} >Go to ExpenseDashBoardPage</NavLink>
		<NavLink to="/create" activeClassName="is-active">Go to AddExpensePage</NavLink>
		<NavLink to="/help" activeClassName="is-active" >Go to HelpPage</NavLink>
		<NavLink to="/edit" activeClassName="is-active" >Go to EditExpensePage</NavLink>
	</div>
	);

export default Header;