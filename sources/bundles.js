import {JetApp, JetView } from "webix-jet";

class AboutView extends JetView{
	config(){
		var widgets = import(/* webpackChunkName: "widgets" */  "modules/customWidgetA");
		return widgets.then(() => {

			return { rows:[
				{ type:"header", template:"Dynamically imported UI" },
				{ view:"customWidgetA" }
			]};

		});
	}
}
const app = new JetApp({
	start:		"/main/about",
	views: (name) => {
		if (name === "modules.clients")
			return import(
				/* webpackChunkName: "clients" */
				"modules/clients");

		if (name === "about")
			return AboutView;

		return name;
	},
	debug:true
});

export default app;