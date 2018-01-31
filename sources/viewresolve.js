import {JetApp, JetView, EmptyRouter } from "webix-jet";

const app = new JetApp({
	start:		"/top/start",
	views: {
		"start" : "area.list"
	},
	debug:true
});

export default app;