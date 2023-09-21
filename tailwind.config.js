/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				"light-blue": "#8ecae6",
				"medium-blue": "#219ebc",
				"dark-blue": "#023047",
				"light-orange": "#ffb703",
				"dark-orange": "#fb8500",
			},
		},
	},
	plugins: [],
};
