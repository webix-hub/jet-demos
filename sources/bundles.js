import {JetApp, JetView, EmptyRouter } from "webix-jet";

const app = new JetApp({
	start:		"/main/about",
	views: (name) => {
		if (name === "modules.clients")
			return import(
				/* webpackChunkName: "clients" */
				"modules/clients");

		return name;
	},
	debug:true
});

export default app;