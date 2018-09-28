import {JetApp, JetView} from "webix-jet";

class allowed extends JetView{
	config(){
		return { template:"Some cotent here" };
	}
}
class PageA extends JetView{
	config(){
		return { id:"a1", template:"Here is Alpha" };
	}

	init(){
		this.ui({ view:"window", id:"w1" });
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
class PageC extends JetView{
	config(){
		return { template:"Page C" }
	}
}
class Sub1 extends JetView{
	config(){
		return new webix.promise((res, rej) => {
			setTimeout(() => {
				res({ template:"3 seconds" })
			}, 3000)
		});
	}
}
class Sub2 extends JetView{
	config(){
		return { template:"0 seconds" };
	}
	init(){
		this.setParam("page", 2, true)
	}
}
class PageB extends JetView{
	config(){
		return {
			rows:[
				{ id:"a1", template:"Here is Betta" },
				Sub1,
				Sub2
			]
		}
	}
	init(){
		this.ui({ view:"window", id:"w1" });
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
							{ view:"button", value:"Page C", click:() =>
								this.show("pageC") },
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
	debug: true,
	views:{
		top:		TopView,
		pageA:		PageA,
		pageB:		PageB,
		pageC:		PageC,
		Sub1: Sub1,
		Sub2: Sub2
	}
});
	
export default app;