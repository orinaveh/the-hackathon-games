module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte', '@typescript-eslint', 'prettier'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], parser: "svelte-eslint-parser", parserOptions: {
        parser: "@typescript-eslint/parser",
      }, }],
	settings: {
		'svelte/typescript': () => require('typescript')
	},
	rules: {
		"prettier/prettier": "error"
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
