import {JetApp, JetView} from "webix-jet";

const allowed1 = {
	template:"Allowed #1"
};
const allowed2 = {
	template:"Allowed #2"
};
const blocked = {
	template:"Blocked"
};

class TopView extends JetView {
	config(){
		return {
			type:"space", rows:[
				{ type:"header", template:"Using windows"},
				{
					type:"wide",cols:[
						{ view:"form",  width: 200, rows:[
							{ view:"button", value:"Allowed page 1", click:() =>
								this.show("allowed1") },
							{ view:"button", value:"Allowed page 2", click:() =>
								this.show("allowed2") },
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
		start:		"/top/blocked",
		views:{
			top:		TopView,
			allowed1:	allowed1,
			allowed2:	allowed2,
			blocked:	blocked
		}
	});

	app.attachEvent("app:guard", function(url, view, nav){
		if (url.indexOf("/blocked") !== -1){
			nav.redirect = "/top/allowed1";
		}
	});
	app.render();
});