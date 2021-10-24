/**
 * Internal dependencies
 */
const jestConfig = require( './jest.config' );
const jestPlaywrightConfig = require( './jest-playwright.config' );
const {
	useE2EBabelConfig,
	useE2EEsLintConfig,
	useE2EJestConfig,
	useE2EJestPlaywrightConfig
} = require( './use-config' );

module.exports = {
	jestConfig,
	jestPlaywrightConfig,
	useE2EBabelConfig,
	useE2EEsLintConfig,
	useE2EJestConfig,
	useE2EJestPlaywrightConfig,
};
