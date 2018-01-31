import {JetApp, JetView, plugins } from "webix-jet";

class TopView extends JetView {
	config(){
		return {
			rows:[
				{ view:"segmented", inputWidth:300, options:["full", "brief"], localId:"ms", on:{
					onChange: function(){
						this.$scope.setParam("mode", this.getValue(), true);
					}
				}},
				{ $subview:true }
			]
		};
	}
	init(){
		this.use(plugins.UrlParam, ["mode"]);

		var mode = this.getParam("mode");
		if (mode){
			this.$$("ms").setValue(mode);
		}
	}
}

class SubView extends JetView {
	config(){
		return {
			view:"template"
		};
	}
	urlChange(view){
		var id = this.getParam("id", true);
		var mode = this.getParam("mode", true);
		view.setHTML(mode+" mode for id="+id);
	}
}

class DetailsView extends JetView {
	config(){
		return {
			cols:[
				{ width:200, view:"list", select:true, localId:"list",
					on:{
						onAfterSelect: (id) => {
							this.setParam("id", id, true);
						}
					}
				},
				{ $subview:"sub" }
			]
		};
	}
	init(){
		this.$$("list").parse([
			{ id:1, value:"1. short data" },
			{ id:2, value:"2. short data" },
		]);
	}
	urlChange(){
		var id = this.getParam("id");
		if (id)
			this.$$("list").select(id);
	}
}

const app = new JetApp({
	start:		"/top/full/details",
	views:		{
		top: TopView,
		details: DetailsView,
		sub: SubView
	},
	debug:true
});

export default app;