import {JetApp, JetView} from "webix-jet";

class allowed extends JetView{
	config(){
		return { template:"Some cotent here" };
	}
}
class limited extends JetView{
	config(){
		var ui = { view:"form", rows:[
			{ label:"Name", view:"text" },
			{ label:"Email", view:"text" }
		]};

		if (this.app.config.access == "writer"){
			ui.rows.push({ view:"text", label:"Salary" });
			ui.rows.push({ view:"button", value:"Delete" });
		}

		ui.rows.push({});

		return ui;
	}
}
class blocked extends JetView{
	config(){
		if (this.app.config.access != "writer"){
			return { };
		}

		return { template:"As writer you can read this content" };
	}
}

class TopView extends JetView {
	config(){
		return {
			type:"space", rows:[
				{ view:"toolbar", cols:[
					{ view:"label", label:"Using windows"},
					{ view:"segmented", width: 300,
						label:"Access Level", labelWidth:100,
						value:this.app.config.access,
						options:["reader","writer"], click:function(){
							// change access level, for demo only 
							var app = this.$scope.app;
							app.config.access = this.getValue();
							// repaint ui with new access level applied
							webix.delay(function(){
								app.refresh();
							});
						}}
				]},
				{
					type:"wide",cols:[
						{ view:"form",  width: 200, rows:[
							{ view:"button", value:"Allowed page 1", click:() =>
								this.show("allowed") },
							{ view:"button", value:"Limited access", click:() =>
								this.show("limited") },
							{ view:"button", value:"Blocked page", click:() =>
								this.show("blocked") },
							{}
						]},
						{ $subview: true }
					]
				}
			]
		};
	}
}


webix.ready(() => {
	const app = new JetApp({
		id:			"windows",
		access:		"reader",
		start:		"/top/blocked",
		views:{
			top:		TopView,
			allowed:	allowed,
			limited:	limited,
			blocked:	blocked
		}
	});
	
	app.render();
});