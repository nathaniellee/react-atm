import _ from 'lodash';
import React from 'react';
import TransactionError from '../TransactionError/TransactionError.jsx';
import TransactionInput from '../TransactionInput/TransactionInput.jsx';
import TransactionList from '../TransactionList/TransactionList.jsx';
import TransactionLog from '../TransactionLog/TransactionLog.jsx';

const {
	PropTypes: {
		array,
		func,
		number,
		string
	}
} = React;

const App = React.createClass({
	propTypes: {
		balance: number,
		error: string,
		onDeposit: func.isRequired,
		onWithdraw: func.isRequired,
		transactions: array
	},

	getDefaultProps() {
		return {
			balance: 0,
			error: null,
			transactions: []
		};
	},

	render() {
		const {
			balance,
			error,
			onDeposit,
			onWithdraw,
			transactions
		} = this.props;

		return (
			<article className="Atm">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>React ATM</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<TransactionList>
								<TransactionInput onSubmit={onWithdraw} type="withdraw" />
								<TransactionInput onSubmit={onDeposit} type="deposit" />
							</TransactionList>
							{
								error ?
										<TransactionError message={error} /> :
										null
							}
						</div>
						<div className="col-md-6">
							<TransactionLog balance={balance} transactions={transactions} />
						</div>
					</div>
				</div>
			</article>
		);
	}
});

export default App;
