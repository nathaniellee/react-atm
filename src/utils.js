export const getFormattedCurrency = (value) => {
	const stringified = (value < 10 ? '0' : '') + Math.trunc(value * 100);
	const cents = stringified.slice(-2);
	const dollars = stringified.slice(0, -2);

	return `${dollars === '' ? '0' : dollars}.${cents}`;
};
