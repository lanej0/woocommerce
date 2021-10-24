module.exports = {
	extends: [
		'plugin:jest/recommended',
	],
	env: {
		'jest/globals': true,
	},
	globals: {
		page: true,
		browser: true,
		context: true,
		jestPlaywright: true,
	},
	plugins: [ 'jest' ],
};
