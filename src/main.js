import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { DECREMENT, INCREMENT } from './constants/actionTypes';
import { INSUFFICIENT_FUNDS } from './constants/messages';
import { deposit, withdraw } from './actions';

import Atm from './components/Atm/Atm.jsx';
import './main.less';

const initialState = {
	balance: _.random(100, 200),
	error: null,
	transactions: []
};

const store = createStore(function (state = initialState, action) {
	const { type, value } = action;

	if (type === INCREMENT) {
		state.balance += value;
		state.error = null;
		state.transactions.unshift({
			adjustedBalance: Math.trunc(state.balance * 100) / 100,
			adjustment: value,
			date: _.now()
		});
	} else if (type === DECREMENT) {
		if (value > state.balance) {
			state.error = INSUFFICIENT_FUNDS;
		} else {
			state.balance -= value;
			state.error = null;
			state.transactions.unshift({
				adjustedBalance: Math.trunc(state.balance * 100) / 100,
				adjustment: -value,
				date: _.now()
			});
		}
	}

	return state;
});

const { dispatch } = store;
const boundDeposit = (value) => dispatch(deposit(value));
const boundWithdraw = (value) => dispatch(withdraw(value));

const render = () => {
	const state = store.getState();

	ReactDOM.render(
		<Atm
				{...state}
				onDeposit={boundDeposit}
				onWithdraw={boundWithdraw}
		/>,
		document.getElementById('root')
	);
};

store.subscribe(() => {
	render();
});

render();
