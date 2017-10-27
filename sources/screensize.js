import {JetApp, JetView, plugins} from "webix-jet";

const data = new webix.DataCollection({
	url:"/assets/data.json"
});

export class ListA extends JetView {
	config(){
		return { view:"datatable", autoConfig:true, editable:true };
	}
	init(view){
		view.parse(data);
	}
}

export class ListB extends JetView {
	config(){
		var config = {
			view:"datatable",
			editable:true
		};

		switch(this.app.config.size){
			case "small":
				config.columns = [
					{ id:"id" },
					{ id:"title", fillspace:true }
				];
				break;
			default:
				config.autoConfig = true;
				break;
		}

		return config;
	}
	init(view){
		view.parse(data);
	}
}

export class StartView extends JetView {
	config(){
		switch(this.app.config.size){
			case "small":
				return {
					view:"tabview", tabbar:{ optionWidth:100 }, cells:[
						{ body: { rows:[ ListB ]}, header:"Table 1" },
						{ body: { rows:[ ListA ]}, header:"Table 2" }
					]
				};
			case "wide":
				return {
					type:"space", cols:[
						ListA,
						ListB
					]
				};
		}
	}
}



webix.ready(() => {
	const app = new JetApp({
		start:		"/start",
		views:{
			start: StartView
		}
	});

	const size =  () => document.body.offsetWidth > 800 ? "wide" : "small";
	app.config.size = size();
	webix.event(window, "resize", function(){
		var newSize = size();
		if (newSize != app.config.size){
			app.config.size = newSize;
			app.refresh();
		}
	});
	
	app.render();
});