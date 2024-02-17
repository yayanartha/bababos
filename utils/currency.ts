import numeral from "numeral";

export const toCurrency = (amount: number, format = "$0,0.00") => {
	return numeral(amount).format(format);
};

export const toAmount = (price: string) => {
	return numeral(price).value() || 0;
};
