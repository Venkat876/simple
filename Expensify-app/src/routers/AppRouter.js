import React from 'react';
import {BrowserRouter, Route, Switch ,Link, NavLink} from 'react-router-dom';
import Header from './../components/Header';
import Pagenotfound from './../components/Pagenotfound';
import ExpenseDashBoardPage from './../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from './../components/HelpPage';
import EditExpensePage from './../components/EditExpensePage';



const AppRouter = () => (
		<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashBoardPage} exact={true} />
				<Route path="/create/:id" component={AddExpensePage} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={Pagenotfound} />
			</Switch>
		</div>
	</BrowserRouter>
	);
export default AppRouter;
