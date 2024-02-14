import { colors } from "./components/design-system/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors,
		},
	},
	plugins: [],
};
