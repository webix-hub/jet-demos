import {JetApp, JetView} from "webix-jet";

const format = webix.Date.dateToStr("%h:%i:%s");

class ContentView extends JetView{
	constructor(app, name){
		super(app, name);
		this.$count = 2;
	}
	config(){
		const lines = [];
		
		for (var i=0; i<this.$count; i++){
			lines.push({
				view:"list", select:true, data:["One", "Two", "Three"]
			});
		}

		return { rows:[
			{ view:"toolbar", cols:[
				{ view:"label", label:"Content, rendered at " + format(new Date()) },
				{ view:"button", width: 200, value:"Add section", click:() => {
					this.$count++;
					this.refresh();
				}}
			]},
			{ gravity:2, cols: lines, type:"space" },
			{ $subview: true }
		]};
	}
}

class ContentSubView extends JetView{
	config(){
		return { template:"Static footer<br>rendered at " + format(new Date()), height: 60 };
	}
}


class TopView extends JetView {
	config(){
		var ui = {
			type:"space", rows:[
				{ type:"header", template:"Top view, rendered at " + format(new Date())},
				{
					type:"wide",cols:[
						{ view:"form",  width: 200, rows:[
							{ view:"button", value:"Refresh app", click:() =>
								this.app.refresh() },
							{ view:"button", value:"Refresh view", click:() =>
								this.getSubView().refresh() },
							{}
						]},
						{ $subview: true }
					]
				}
			]
		};


		return ui;
	}
}



const app = new JetApp({
	id:			"windows",
	start:		"/top/content/subcontent",
	views:{
		top:		TopView,
		content:	ContentView,
		subcontent: ContentSubView
	}
});

export default app;