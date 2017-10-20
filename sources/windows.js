import {JetApp, JetView} from "webix-jet";

const win1 = {
	view:"popup",
	body:{ template:"Text 1" }
};

class WindowsView extends JetView {
	config(){
		return {
			view:"popup",
			body:{ template:"Text 2" }
		};
	}
	show(target){
		this.getRoot().show(target);
	}
}

class TopView extends JetView {
	config(){
		return {
			type:"space", rows:[
				{ type:"header", template:"Using windows"},
				{
					type:"wide",cols:[
						{ view:"form",  width: 200, rows:[
							{ view:"button", value:"Show Window 1", click:(id) =>
								this.win1.show($$(id).$view) },
							{ view:"button", value:"Show Window 2", click:(id) =>
								this.win2.show($$(id).$view) },
							{}
						]},
						{ $subview: true }
					]
				}
			]
		};
	}

	init(){
		this.win1 = this.ui(win1);
		this.win2 = this.ui(WindowsView);
	}
}


webix.ready(() => {
	const app = new JetApp({
		id:			"windows",
		start:		"/top",
		views:{
			top:		TopView
		}
	});
	app.render();
});