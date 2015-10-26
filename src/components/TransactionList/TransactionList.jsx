import React from 'react';

const {
	PropTypes: {
		arrayOf,
		node
	}
} = React;

const TransactionList = React.createClass({
	propTypes: {
		children: arrayOf(node)
	},

	render() {
		return (
			<div className="TransactionList">
				<h2>Available Transactions</h2>
				<ul>
					{this.props.children}
				</ul>
			</div>
		);
	}
});

export default TransactionList;
