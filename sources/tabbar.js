import {JetApp, JetView} from "webix-jet";
let number = 3;

// It is important to NOT DEFINE top level ID
// for the content which will be hosted 
// inside of tabview
class AdminView1 extends JetView {
	config(){
		return {
			height:50,
			css:"silver",
			template:"Admin view 1 <br> Dashboard"
		};
	}
}

class AdminView2 extends JetView {
	config(){
		return {
			height:50,
			css:"silver",
			template:"Admin view 2 <br> Meta info"
		};
	}
}

class AdminView3 extends JetView {
	constructor(app, name, data){
		super(app, name);

		this.customData = data || { number: 100 };
	}
	config(){
		return { 
			height:50,
			css:"silver",
			template: "Admin view #number# <br> The dynamic one",
			data: this.customData
		};
	}
}

class TopView extends JetView {
	config(){
		return {
			type: "space",
			rows: [
				{ view:"button", inputWidth:200, value:"Add view below", type:"form", click:()=>{
					this.$$("main3").addView({ 
						header: "Admin View "+number,
						// we can use both
						// body: AdminView3
						// and 
						// body: new AdminView3(app, name)
						body: new AdminView3(this.app, "", { number: number++ })
					});
				}},
				{ id:"main3", view:"tabview", cells:[
					{ header:"Admin View 1", body:AdminView1},
					{ header:"Admin View 2", body:AdminView2}
				]},
				{ height:50 },
				{ view:"button", inputWidth:200, value:"Add view below", type:"form", click:()=>{
					var uid = webix.uid();
					this.$$("tabs").addOption({ id:uid, value:"Admin View 100" });
					this.$$("main4").addView({ id:uid, $subview: AdminView3 });
				}},
				{ id:"tabs", view:"tabbar", multiview:true, options:[
					"Admin View 1", "Admin View 2"
				]},
				{ id:"main4", cells:[
					{ id:"Admin View 1", $subview:AdminView1 },
					{ id:"Admin View 2", $subview:AdminView2 }
				]}
			]
		};
	}
}


const app = new JetApp({
	id:			"windows",
	start:		"/top",
	views:{
		top:		TopView
	}
});


export default app;