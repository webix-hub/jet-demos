import {JetApp, JetView, EmptyRouter } from "webix-jet";

webix.ready(() => {
	const app = new JetApp({
		start:		"/top/area.list",
		debug:true
	});


	app.render();
});