import React from 'react';

const {
	PropTypes: {
		string
	}
} = React;

const TransactionError = React.createClass({
	propTypes: {
		message: string.isRequired
	},

	render() {
		return (
			<div className="alert alert-danger" role="alert">
				{this.props.message}
			</div>
		);
	}
});

export default TransactionError;
