import {JetApp, JetView, plugins} from "webix-jet";

const format = webix.Date.dateToStr("%h:%i:%s");

class UsersView extends JetView{
	config(){
		return { template:"User's view" };
	}
}

class DummySub extends JetView{
	config(){
		return { template:"Some view" };
	}
}

class ModesView extends JetView{
	config(){
		return { template:"Modes's view" };
	}
}


class TopView extends JetView {
	config(){
		var ui = {
			type:"space", rows:[
				{ type:"header", template:"Top view, select a mode" },
				{
					type:"wide",rows:[
						{ view:"segmented", localId:"menu", options:["Users", "Regions", "None"], name:"mode", inputWidth: 300 },
						{
							$subview:true,
							url:(view) => {
								const mode = view.getParam("mode");

								if (mode === "None") return "_hidden";
								return  mode === "Users" ? "users" : "modes";
							},
							name:"short"
						},
						{
							$subview:true
						}
					]
				}
			]
		};


		return ui;
	}
	init(){
		this.use(plugins.Menu, {
			param:"mode",
			id:"menu"
		});

		this.use(plugins.UrlParam, ["mode"])
	}
}



const app = new JetApp({
	id:			"windows",
	start:		"/top/Users/dummy",
	debug: true,
	views:{
		top:		TopView,
		users:		UsersView,
		modes:		ModesView,
		dummy:		DummySub
	}
});

export default app;