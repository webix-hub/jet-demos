define([
	"app"
],function(app){

	var header = {
		type:"header", template:app.config.name
	};

	var menu = {
		view:"menu", id:"top:menu",
		width:180, layout:"y", select:true,
		template:"<span class='webix_icon fa-#icon#'></span> #value# ",
		data:[
			{ value:"DashBoard", 		id:"start",		href:"#!/top/start", 		icon:"envelope-o" },
			{ value:"Data", 			id:"data",		href:"#!/top/data", 		icon:"briefcase" }
		]
	};

	var mode = {
		rows:[
			{ view:"label", label:"Data  mode"},
			{ view:"segmented", options:[
				{id:"info", value:"Info"},
				{id:"stats", value:"Stats"}
			],
			on:{
				onChange:function(newv){
					app.callEvent("detailsModeChanged", [ newv]);
				}
			}}
		]
	};

	var ui = {
		type:"line", cols:[
			{ type:"clean", css:"app-left-panel",
				padding:10, margin:20, borderless:true, rows: [ header, menu, {}, mode ]},
			{ rows:[ { height:10},
				{ type:"clean", css:"app-right-panel", padding:4, rows:[
					{ $subview:true }
				]}
			]}
		]
	};

	return {
		$ui: ui,
		$menu: "top:menu"
	};
});
