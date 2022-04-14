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
					{id:"mini-default", value:"Mini"},
					{id:"contrast-default", value:"Contrast"},
					{id:"flat-default", value:"Flat"}
				], click:() => this.toggleTheme(), value:theme },
				{
					view:"datatable",
					select: true,
					columns:[
						{ id:"title",   header:"Title", fillspace: true },
						{ id:"year",    header:"Year",  width:100, sort:"int"},
						{ id:"votes",   header:"Votes", width:100,  sort:"int"}
					],
					data:[
						{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790 },
						{ id:2, title:"The Godfather", year:1972, votes:511495 },
						{ id:3, title:"The Godfather: Part II", year:1974, votes:319352 }
					]
				},
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
	app.use(plugins.Theme);
	return app;
}