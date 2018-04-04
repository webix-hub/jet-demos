import {JetApp, JetView} from "webix-jet";

class AdminView1 extends JetView {
	config(){
		return {
			height:50,
			css:"silver",
			template:"Admin view 1 <br> Dashboard"
		};
	}
};

class AdminView2 extends JetView {
	config(){
		return {
			height:50,
			css:"silver",
			template:"Admin view 2 <br> Meta info"
		};
	}
};

class AdminView3 extends JetView {
	config(){
		return { 
			height:50,
			css:"silver",
			template: "Admin view 3 <br> Scope: #scope#",
			on:{
				onBeforeRender:function(){
					this.data.scope = this.$scope.getScopeName();
				}
			}
		};
	}
	getScopeName(){
		return "Correct Scope";
	}
}

class TopView extends JetView {
	config(){
		return {
			type: "space",
			rows: [
				/* Layout */
				{ view:"button", inputWidth:200, value:"Add view below", click:()=>{
					this.$$("main").addView(AdminView3);
				}},
				{ id:"main", cols:[
					AdminView1,
					AdminView2
				]},


				
				{ view:"button", value:"Add view below", inputWidth:200, click:()=>{
					this.$$("main2").addView({ view:"accordionitem", header: "Admin View 3", body:  AdminView3});
				}},
				{ id:"main2", view:"accordion", cols:[
					{ header:"Admin View 1", body:AdminView1},
					{ header:"Admin View 2", body:AdminView2}
				]},

				
				{ view:"button", inputWidth:200, value:"Add view below", click:()=>{
					this.$$("main3").addView({ header: "Admin View 3", body:AdminView3});
				}},
				{ id:"main3", view:"tabview", cells:[
					{ header:"Admin View 1", body:AdminView1},
					{ header:"Admin View 2", body:AdminView2}
				]},

				{ view:"button", inputWidth:200, value:"Add view below", click:()=>{
					this.$$("main5").addView( AdminView3 );
				}},
				{ id:"main5", view:"carousel", cols:[
					AdminView1,
					AdminView2
				]},

				{ view:"button", inputWidth:200, value:"Add view below", inputWidth:200, click:()=>{
					var uid = webix.uid();
					this.$$("tabs").addOption({ id:uid, value:"Admin View 3" });
					this.$$("main4").addView({ id:uid, $subview:  AdminView3});
				}},
				{ id:"tabs", view:"tabbar", multiview:true, options:["Admin View 1", "Admin View 2"]},
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