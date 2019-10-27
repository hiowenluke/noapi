
const express = require('express');
const expressApp = express();

const data = require('../data');
const noapiRouter = require('../routes');

const expressStack = {
	originalRouteNames: [],

	init() {
		this.originalRouteNames = expressApp._router.stack.map(route => route.handle.name);
	},

	isNonExpressOriginalRoutes(routeName) {
		return this.originalRouteNames.indexOf(routeName) === -1;
	},

	removeNonExpressOriginalRoutes() {
		const routes = expressApp._router.stack;
		for (let i = 0; i < routes.length; i ++) {
			const route = routes[i];

			// Remove this route if it is none of express original route
			if (this.isNonExpressOriginalRoutes(route.handle.name)) {
				routes.splice(i, 1);

				// Don't forget it.
				// For this reason, we use for ... loop instead of routes.forEach
				i --;
			}
		}
	},

	addNewRoutes(newRoutesArgs) {
		newRoutesArgs.forEach(args => {
			expressApp.use(...args);
		});
	}
};

const me = {
	newRoutesArgs: [],
	expressApp: expressApp, // for debugging in examples

	loadRoutes() {

		// Save the current state of the stack
		expressStack.init();

		// All routes including .get() or .post() will be handled by noapi
		expressApp.use('*', noapiRouter);

		me.isTest = data.isTestMode;
	},

	use(...args) {
		this.newRoutesArgs.push(args);

		expressStack.removeNonExpressOriginalRoutes();
		expressStack.addNewRoutes(this.newRoutesArgs);

		// Uses noapi router at last
		expressApp.use('*', noapiRouter);
	}
};

module.exports = {express, expressApp, app: me};
