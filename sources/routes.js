import {JetApp } from "webix-jet";
import { views } from "./views/index";

const app = new JetApp({
	start:		"/top/about",
	routes:		{
		"/hi" 	: "/top/about",
		"/form" : "/top/area.left.form",
		"/list" : "/top/area.list"
	},
	views,
	debug:true
});

export default app;