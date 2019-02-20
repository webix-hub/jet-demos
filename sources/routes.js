import {JetApp } from "webix-jet";


const app = new JetApp({
	start:		"/top/about",
	routes:		{
		"/hi" 	: "/top/about",
		"/form" : "/top/area.left.form",
		"/list" : "/top/area.list"
	},
	debug:true
});

export default app;