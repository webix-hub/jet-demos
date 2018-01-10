import {JetApp, JetView, EmptyRouter } from "webix-jet";

webix.ready(() => {
	const app = new JetApp({
		start:		"/top/about",
		routes:		{
			"/hi" 	: "/top/about",
			"/form" : "/top/area.left.form",
			"/list" : "/top/area.list"
		},
		debug:true
	});


	app.render();
});