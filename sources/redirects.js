import {JetApp, JetView} from "webix-jet";
import {changeUrl} from "webix-jet/helpers";

class Page1 extends JetView {
	config(){
		return {
			rows:[
				{ type:"header", template:"page #1" },
				{ $subview:true }
			]
		};
	}
	ready(){
		this.show("page2");
	}
}

class Page2 extends JetView {
	config(){
		return {
			type:"space", rows:[
				{ type:"header", template:"page #2" },
				{ $subview:true }
			]
		};
	}
	ready(){
		this.show("page3");
	}
}

const Page3 = {
	template:"page #3, load through .ready handler"
};

const Page4 = {
	template:"Dummy page"
};

class TopView extends JetView {
	config(){
		return {
			type:"space", rows:[
				{ type:"header", template:"Redirect inner content from .ready handler"},
				{
					type:"wide",cols:[
						{ view:"form",  width: 200, rows:[
							{ view:"button", value:"Page 1", click:() =>
								this.show("page1") },
							{ view:"button", value:"Page 4", click:() =>
								this.show("page4") },
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
		start:		"/top/page1",
		views:{
			top:		TopView,
			page1:		Page1,
			page2:		Page2,
			page3:		Page3,
			page4:		Page4
		}
	});

	app.attachEvent("app:guard", function(url, view, nav){
		if (url.indexOf("/blocked") !== -1){
			nav.redirect = "/top/page1";
		}
	});
	app.render();
});