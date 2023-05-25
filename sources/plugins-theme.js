import {JetApp, JetView, plugins} from "webix-jet";

class SettingsView extends JetView {
	config(){
		const theme = this.app.getService("theme").getTheme();

		return {
			type:"space", rows:[
				{ template:"Settings", type:"header" },
				{ name:"skin", optionWidth: 120, view:"segmented", label:"Theme", options:[
					{id:"material-default", value:"Default"},
					{id:"material-shady", value:"Shady"},
					{id:"mini-default", value:"Compact"},
					{id:"flat-default", value:"Flat"}
				], click:() => this.toggleTheme(), value:theme },
				{}
			]
		};
	}
	toggleTheme(){
		const themes = this.app.getService("theme");
		const value = this.getRoot().queryView({ name:"skin" }).getValue();
		themes.setTheme(value);
	}
}



const app = new JetApp({
	id:			"plugins-themes",
	start:		"/start",
	views:{
		start: SettingsView
	}
});

export default function(){
	//affect global styles, must be called only if you really plan to init the app
	debugger;
	app.use(plugins.Theme);
	return app;
}