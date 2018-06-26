import {JetApp, JetView} from "webix-jet";

class allowed extends JetView{
	config(){
		return { template:"Some cotent here" };
	}
}
class PageA extends JetView{
	config(){
		return { template:"Here is Alpha" };
	}

	init(){
		webix.message("init Alpha");
	}
	ready(){
		webix.message("ready Alpha");
	}
	urlChange(){
		webix.message("urlChange Alpha");
	}
	destroy(){
		webix.message("destroy Alpha");
	}
}
class PageB extends JetView{
	config(){
		return { template:"Here is Betta" };
	}
	init(){
		webix.message("init Betta");
	}
	ready(){
		webix.message("ready Betta");
	}
	urlChange(){
		webix.message("urlChange Betta");
	}
	destroy(){
		webix.message("destroy Betta");
	}
}

class TopView extends JetView {
	config(){
		return {
			type:"space", rows:[
				{ view:"toolbar", cols:[
					{ view:"label", label:"View life-cycle"}
				]},
				{
					type:"wide",cols:[
						{ view:"form",  width: 200, rows:[
							{ view:"button", value:"Page A", click:() =>
								this.show("pageA") },
							{ view:"button", value:"Page B", click:() =>
								this.show("pageB") },
							{ view:"button", value:"Destroy the app", click:() =>
								this.app.destructor() },
							{}
						]},
						{ $subview: true }
					]
				}
			]
		};
	}
	init(){
		webix.message("init Top");
	}
	ready(){
		webix.message("ready Top");
	}
	urlChange(){
		webix.message("urlChange Top");
	}	
	destroy(){
		webix.message("destroy Top");
	}
}


const app = new JetApp({
	id:			"windows",
	start:		"/top/pageA",
	views:{
		top:		TopView,
		pageA:		PageA,
		pageB:		PageB
	}
});
	
export default app;