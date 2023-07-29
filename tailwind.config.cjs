/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'rotate-b-f': 'wiggle 1s ease-in-out infinite',
				'rotate-f-b': 'inverse-wiggle 1s ease-in-out infinite',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-6deg)' },
					'50%': { transform: 'rotate(6deg)' },
				},
				'inverse-wiggle': {
					'0%, 100%': { transform: 'rotate(6deg)' },
					'50%': { transform: 'rotate(-6deg)' },
				},
			},
			fontFamily: {
				sans: ['Sora', ...defaultTheme.fontFamily.sans],
				biro: 'Biro Script Reduced',
			},
			backgroundImage: {
				paper: "url('/paper.jpg')",
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
