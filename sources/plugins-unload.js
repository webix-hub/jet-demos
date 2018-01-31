import {JetApp, JetView, plugins} from "webix-jet";

class FormView extends JetView{
	config(){
		return { 
			view:"form", elements:[
				{ view:"text", name:"email", required:true, label:"Email" },
				{ view:"button", value:"save", click:() => this.show("/Details") }
			]
		};
	}
	
	init(){
		this.use(plugins.UnloadGuard, () => {
			if (this.getRoot().validate())
				return true;
			return new Promise((res, rej) => {
				webix.confirm({
					text: "Are you sure ?",
					callback: a => a ? res() : rej()
				});
			});
		});
	}
}


const DetailsView = () => ({ template:"Data saved" });


var app = new JetApp({
	start:"/Form",
	views:{
		"Form":FormView,
		"Details":DetailsView
	}
});

export default app;