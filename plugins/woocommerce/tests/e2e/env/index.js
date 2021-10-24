/**
 * Internal dependencies
  */
const babelConfig = require( './babel.config' );
const esLintConfig = require( './.eslintrc.js' );
const allE2EConfig = require( './config' );
const allE2EUtils = require( './utils' );
const slackUtils = require( './src/slack' );
/**
 * External dependencies
 */
const allPlaywrightUtils = require( '@lanej0/playwright-utils' );

module.exports = {
	babelConfig,
	esLintConfig,
	...allE2EConfig,
	...allE2EUtils,
	...allPlaywrightUtils,
	...slackUtils,
};
