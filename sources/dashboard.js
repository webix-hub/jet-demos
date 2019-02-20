import {JetApp, JetView} from "webix-jet";

class AdminView1 extends JetView {
	config(){
		return {
			template:"Admin view 1 <br> Dashboard"
		};
	}
}

class AdminView2 extends JetView {
	config(){
		return {
			template:"Admin view 2 <br> Meta info"
		};
	}
}

class AdminView3 extends JetView {
	config(){
		return { 
			template:"Admin view 3 <br> Settings "
		};
	}
}


class TopView extends JetView {
	config(){
		return {
			type: "space",
			cols: [
				{ rows:[
					{ view:"list", id:"list",
						width:200,
						drag:"source",
						template:"#value# - (#dx#x#dy#)",
						data:[
							{ id:"1", value:"AdminView1", dx:1, dy:1 },
							{ id:"2", value:"AdminView2", dx:1, dy:2 },
							{ id:"3", value:"AdminView3", dx:2, dy:1 }
						]
					},
					{ view:"button", value:"Reset", type:"form", click:() => {
						this.$$("grid").clearAll();
					}}
				]},
				{
					view:"scrollview", body:{
						view:"dashboard", id:"grid",
						gridColumns:4, gridRows:4,
						cellHeight: 200,
						factory:(obj) => {
							obj.view = "panel";
							obj.resize = true;
							obj.body = this[webix.$$("list").getItem(obj.name).value];
							return obj;
						},
						on:{
							onChange:function(){
								var state = this.serialize();
								webix.storage.local.put("demo-dashboard-state", state);
							}
						}
					}
				}
			]
		};
	}
	init(){
		this.AdminView1 = AdminView1;
		this.AdminView2 = AdminView2;
		this.AdminView3 = AdminView3;

		var state = webix.storage.local.get("demo-dashboard-state");
		if (state)
			this.$$("grid").restore(state);
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