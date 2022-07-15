/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",],
	theme: {
		extend: {
			fontFamily: {
				RobotoSlab: ['Roboto Slab', 'serif'],
				Fredericka: ['Fredericka the Great', 'cursive']
			}
		},
	},
	plugins: [],
}
