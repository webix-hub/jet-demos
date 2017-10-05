import {JetApp, JetView, plugins} from "webix-jet";

export default class StartView extends JetView {
	config(){
		return {
			type:"space", rows:[
				{ template:"Some Data", type:"header" },
				{ view:"datatable", id:"table", autoConfig:true, editable:true },
				{ view:"template", id:"app:status", height: 30 }
			]
		};
	}
	init(){
		this.use(plugins.Status, { 
			target: "app:status",
			ajax:true,
			expire: 5000
		});

		const data = new webix.DataCollection({
			url:"/assets/data.json",
			save:"//docs.webix.com/wrongurl"
		});
		webix.$$("table").parse(data);
	}
}


webix.ready(() => {
	const app = new JetApp({
		id:			"plugins-themes",
		start:		"/start",
		views:{
			start: StartView
		}
	});

	app.render();

	app.attachEvent("app:error:server", function(){
		webix.alert({
			title:"Data Saving Error",
			width: 480,
			text:"This sample has not server side,<br> so any attempt to save data will result in an error."
		});
	});
});