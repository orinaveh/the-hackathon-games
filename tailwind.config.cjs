const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				primary: colors.green[500],
				secondary: colors.zinc[800],
				accent: colors.green[700]
			},
			fontFamily: {
				stopwatch: ['stopwatch'],
				Rubik: ['Rubik']
			},
			animation: {
				shift: 'shift 2s linear infinite'
			},
			keyframes: {
				shift: {
					'0%': { color: 'white' },
					'50%': { color: 'white' },
					'51%': { color: colors.red[600] },
					'100%': { color: colors.red[600] }
				}
			}
		}
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus']);
		})
	],
	safelist: [
		'dark',
		{
			pattern: /(bg|text|border)-(primary|secondary|accent)/,
			variants: ['dark']
		}
	],
	darkMode: 'class'
};

module.exports = config;
