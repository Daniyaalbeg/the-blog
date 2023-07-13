/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Sora', ...defaultTheme.fontFamily.sans],
				biro: 'Biro Script Reduced',
			},
			backgroundImage: {
				paper: "url('/paper.jpg')",
			},
		},
	},
	plugins: [],
}
