import { DECREMENT, INCREMENT } from './constants/actionTypes';

export default {
	deposit(value) {
		return {
			type: INCREMENT,
			value
		};
	},

	withdraw(value) {
		return {
			type: DECREMENT,
			value
		};
	}
};
