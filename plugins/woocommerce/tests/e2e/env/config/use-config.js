const jestConfig = require( './jest.config.js' );
const jestPlaywrightConfig = require( './jest-playwright.config.js' );
const babelConfig = require( '../babel.config' );
const esLintConfig = require( '../.eslintrc.js' );

const useE2EBabelConfig = function( customBabelConfig ) {
	const combinedBabelConfig = {
		...babelConfig,
		...customBabelConfig,
	};

	// These only need to be merged if both exist.
	if ( babelConfig.plugins && customBabelConfig.plugins ) {
		combinedBabelConfig.plugins = [
			...babelConfig.plugins,
			...customBabelConfig.plugins,
		];
	}
	if ( babelConfig.presets && customBabelConfig.presets ) {
		combinedBabelConfig.presets = [
			...babelConfig.presets,
			...customBabelConfig.presets,
		];
	}

	return combinedBabelConfig;
};

const useE2EEsLintConfig = function( customEsLintConfig ) {
	let combinedEsLintConfig = {
		...esLintConfig,
		...customEsLintConfig,
	};

	// These only need to be merged if both exist.
	if ( esLintConfig.extends && customEsLintConfig.extends ) {
		combinedEsLintConfig.extends = [
			...esLintConfig.extends,
			...customEsLintConfig.extends,
		];
	}
	if ( esLintConfig.env && customEsLintConfig.env ) {
		combinedEsLintConfig.env = {
			...esLintConfig.env,
			...customEsLintConfig.env,
		};
	}
	if ( esLintConfig.globals && customEsLintConfig.globals ) {
		combinedEsLintConfig.globals = {
			...esLintConfig.globals,
			...customEsLintConfig.globals,
		};
	}
	if ( esLintConfig.plugins && customEsLintConfig.plugins ) {
		combinedEsLintConfig.plugins = [
			...esLintConfig.plugins,
			...customEsLintConfig.plugins,
		];
	}
	return combinedEsLintConfig;
};

const useE2EJestConfig = function( customConfig ) {
	const combinedConfig = {
		...jestConfig,
		...customConfig,
	};

	return combinedConfig;
};

const useE2EJestPlaywrightConfig = function( customPlaywrightConfig ) {
	let combinedPlaywrightConfig = {
		...jestPlaywrightConfig,
		...customPlaywrightConfig,
	};
	// Only need to be merged if both exist.
	if ( jestPlaywrightConfig.launch && customPlaywrightConfig.launch ) {
		combinedPlaywrightConfig.launch = {
			...jestPlaywrightConfig.launch,
			...customPlaywrightConfig.launch,
		};
	}
	return combinedPlaywrightConfig;
};

module.exports = {
	useE2EBabelConfig,
	useE2EEsLintConfig,
	useE2EJestConfig,
	useE2EJestPlaywrightConfig,
};
