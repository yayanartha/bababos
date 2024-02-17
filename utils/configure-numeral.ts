import numeral from "numeral";

export const configureNumeral = () => {
	numeral.register("locale", "id", {
		delimiters: {
			thousands: ".",
			decimal: ",",
		},
		abbreviations: {
			thousand: "rb",
			million: "jt",
			billion: "M",
			trillion: "T",
		},
		ordinal: () => "",
		currency: {
			symbol: "Rp",
		},
	});

	numeral.locale("en");
};
