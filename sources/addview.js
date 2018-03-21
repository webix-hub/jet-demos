import {JetApp, JetView} from "webix-jet";

class AdminView1 extends JetView {
	config(){
		return {
			template:"Admin view 1 <br> Dashboard"
		};
	}
};

class AdminView2 extends JetView {
	config(){
		return {
			template:"Admin view 2 <br> Meta info"
		};
	}
};

class AdminView3 extends JetView {
	config(){
		return { 
			template:"Admin view 3 <br> Settings <br> Language: #lang#"
		};
	}
	init(view){
		view.parse({ lang:"EN" });
	}
}

class TopView extends JetView {
	config(){
		return {
			type: "space",
			rows: [
				/* Layout */
				{ view:"button", value:"Add view below", click:()=>{
					this.$$("main").addView(AdminView3);
				}},
				{ id:"main", rows:[
					AdminView1,
					AdminView2
				]}


				/* Accordion */
				/*{ view:"button", value:"Add view below", inputWidth:200, click:()=>{
					this.$$("main").addView({ view:"accordionitem", header: "Admin View 3", body:  AdminView3});
				}},
				{ id:"main", view:"accordion", rows:[
					{ header:"Admin View 1", body:AdminView1},
					{ header:"Admin View 2", body:AdminView2}
				]}*/

				/* Tabview */
				/*{ view:"button", value:"Add view below", click:()=>{
					this.$$("main").addView({ header: "Admin View 3", body:AdminView3});
				}},
				{ id:"main", view:"tabview", cells:[
					{ header:"Admin View 1", body:AdminView1},
					{ header:"Admin View 2", body:AdminView2}
				]}*/

				/* Multiview and Tabbar */
				/*{ view:"button", value:"Add view below", inputWidth:200, click:()=>{
					this.$$("tabs").addOption("Admin View 3");
					this.$$("main").addView({ id:"Admin View 3", $subview:  AdminView3});
				}},
				{ id:"tabs", view:"tabbar", multiview:true, options:["Admin View 1", "Admin View 2"]},
				{ id:"main", cells:[
					{ id:"Admin View 1", $subview:AdminView1 },
					{ id:"Admin View 2", $subview:AdminView2 }
				]}*/
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