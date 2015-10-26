import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';

import { ENTER_KEY } from '../../constants/charCodes';

const {
	PropTypes: {
		func,
		string
	}
} = React;

const TransactionInput = React.createClass({
	propTypes: {
		onSubmit: func.isRequired,
		type: string.isRequired
	},

	handleButtonClicked() {
		this.props.onSubmit(this._input.value * 1);
		this._input.value = '';
	},

	handleKeyPressed(event) {
		if (event.charCode === ENTER_KEY) {
			this.handleButtonClicked();
		}
	},

	render() {
		const { type } = this.props;

		return (
			<li className="TransactionInput">
				<span className="label">{_.capitalize(type)}:</span>
				<span>
					$<input
							onKeyPress={this.handleKeyPressed}
							ref={(input) => {
								this._input = input;
							}}
							type="text"
					/>
				</span>
				<button
						className={classNames('btn', {
							'btn-danger': type === 'withdraw',
							'btn-success': type === 'deposit'
						})}
						onClick={this.handleButtonClicked}
				>{_.capitalize(type)}</button>
			</li>
		);
	}
});

export default TransactionInput;
