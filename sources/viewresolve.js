import {JetApp} from "webix-jet";
import { views } from "./views/index";

const app = new JetApp({
	start:		"/top/start",
	views: {
		"start" : "area.list"
	},
	views,
	debug:true
});

export default app;