define([
	"app",
	"views/start"
],function(app, start){

	var header = {
		type:"header", template:app.config.name
	};

	var menu = {
		view:"menu",
		width:180, layout:"y", select:true,
		template:"<span class='webix_icon fa-#icon#'></span> #value# ",
		data:[
			{ value:"DashBoard", 		id:"start",		icon:"envelope-o" },
			{ value:"Data", 			id:"data",		icon:"briefcase" }
		]
	};

	var ui = {
		type:"line", cols:[
			{ type:"clean", css:"app-left-panel", padding:10, margin:20, borderless:true, rows: [ header, menu ]},
			{ type:"clean", css:"app-right-panel", padding:4, rows:[ start ]}

		]
	};

	return {
		$ui: ui
	};
});
