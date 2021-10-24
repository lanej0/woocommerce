/** @format */
const { jestPlaywrightConfig } = require( '@lanej0/playwright-utils' );

let playwrightConfig;

if ( 'no' == global.process.env.node_config_dev ) {
	playwrightConfig = {
		use: {
			// Required for the logged out and logged in tests so they don't share app state/token.
			browserContext: 'incognito',
		},
	};
} else {
	playwrightConfig = {
		use: {
			...jestPlaywrightConfig.launch,
			headless: false,
			ignoreHTTPSErrors: true,
			devtools: true,
			viewport: { width: 1280, height: 800 },
			launchOptions: {
				slowMo: process.env.PLAYWRIGHT_SLOWMO ? process.env.PLAYWRIGHT_SLOWMO : 50,
			},
		},
	};
}

module.exports = playwrightConfig;
