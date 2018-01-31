import {JetApp, JetView, EmptyRouter } from "webix-jet";

class TopView extends JetView {
	config(){
		return {
			type:"wide", rows:[
				{ type:"header", template:"Base App"},
				{ $subview: true }
			]
		};
	}
}

class MasterTopView extends JetView {
	config(){
		return {
			type:"space", rows:[
				{ view:"toolbar", cols:[
					{ view:"label", label:"Master App"},
					{ view:"segmented", width: 200, 
						value:"details",
						options:["details","text"], click:function(){
							this.$scope.show(this.getValue());
						}
					}
				]},
				{ $subview: true }
			]
		};
	}
}

class FormView extends JetView {
	config(){
		return {
			view:"form",  width: 200, rows:[
				{ label:"Name", view:"text" },
				{ label:"Email", view:"text" },
				{}
			]
		};
	}
}

const TextView = () => ({ template:"Some text here" });




const baseApp1 = () => {
	return new JetApp({
		start:		"/top/form",
		router: 	EmptyRouter,
		debug:true,
		views:{
			top:		TopView,
			form:		FormView
		}
	});
};

const masterApp = new JetApp({
	start:		"/top/details",
	debug:true,
	views:{
		top:		MasterTopView,
		details:	baseApp1,
		text:		TextView
	}
});	

export default masterApp;