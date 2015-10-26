import {
	chai,
	expect,
	React,
	sinon,
	sinonChai,
	TestUtils
} from './testCommons';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import Atm from '../src/components/Atm/Atm.jsx';
import { getFormattedCurrency } from '../src/utils';

describe('Atm component', () => {
	let sandbox;

	beforeEach(() => {
		sandbox = sinon.sandbox.create();
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('props', () => {
		describe('required', () => {
			describe('onDeposit', () => {
				// it('throws an error if not provided.', () => {
				// 	expect(() => {
				// 		TestUtils.renderIntoDocument(<Atm onWithdraw={_.noop} />);
				// 	}).to.throw();
				// });
			});

			describe('onWithdraw', () => {
				// it('throws an error if not provided.', () => {
				// 	expect(() => {
				// 		TestUtils.renderIntoDocument(<Atm onDeposit={_.noop} />);
				// 	}).to.throw();
				// });
			});
		});

		describe('optional', () => {
			describe('balance', () => {
				let props;

				beforeEach(() => {
					props = {
						onDeposit: _.noop,
						onWithdraw: _.noop
					};
				});

				it('uses the provided value...', () => {
					props.balance = 123.45;
					
					const element = TestUtils.renderIntoDocument(<Atm {...props} />);
					const balanceElement = TestUtils.findRenderedDOMComponentWithClass(element, 'current-balance-value');

					expect(balanceElement.innerHTML).to.equal(`$${getFormattedCurrency(props.balance)}`);
				});

				it('...unless no value has been provided in which case it uses the default value of `0`.', () => {
					const element = TestUtils.renderIntoDocument(<Atm {...props} />);
					const balanceElement = TestUtils.findRenderedDOMComponentWithClass(element, 'current-balance-value');

					expect(balanceElement.innerHTML).to.equal(`$${getFormattedCurrency(0)}`);
				});
			});
		});
	});
});
