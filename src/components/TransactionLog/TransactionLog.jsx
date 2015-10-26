import _ from 'lodash';
import classNames from 'classnames';
import React from 'react';
import { getFormattedCurrency } from '../../utils.js';

const {
	PropTypes: {
		arrayOf,
		number,
		shape
	}
} = React;

const TransactionLog = React.createClass({
	propTypes: {
		balance: number,
		transactions: arrayOf(shape({
			adjustedBalance: number.isRequired,
			adjustment: number.isRequired,
			date: number.isRequired
		}))
	},

	getDefaultProps() {
		return {
			balance: 0,
			transactions: []
		};
	},

	getFormattedDate(value) {
		const date = new Date(value);
		return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
	},

	render() {
		return (
			<div className="TransactionLog">
				<h2>Transaction Log</h2>
				<div className="current-balance-container">
					<span className="label">Balance:</span>
					<span className="current-balance-value">{`$${getFormattedCurrency(this.props.balance)}`}</span>
				</div>
				<table className="table">
					<thead>
						<tr>
							<th>Date</th>
							<th>Adjustment</th>
							<th>Balance</th>
						</tr>
					</thead>
					<tbody>
						{
							_.map(this.props.transactions, ({ adjustedBalance, adjustment, date }, i) => (
								<tr className="Transaction" key={i}>
									<td className="date">{this.getFormattedDate(date)}</td>
									<td className={classNames('adjustment', {
										debit: adjustment < 0
									})}>{`$${getFormattedCurrency(adjustment < 0 ? -adjustment : adjustment)}`}</td>
									<td className="adjusted-balance">{`$${getFormattedCurrency(adjustedBalance)}`}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		);
	}
});

export default TransactionLog;
