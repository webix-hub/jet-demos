define([
	"app",
	"libs/webix-jet/plugins/locale",
	"locale"
],function(app, locales, _){

	var header = {
		type:"header", template:_(app.config.name)
	};

	var menu = {
		view:"menu", id:"top:menu",
		width:180, layout:"y", select:true, yCount:2,
		template:"<span class='webix_icon fa-#icon#'></span> #value# ",
		data:[
			{ value:_("DashBoard"), 		id:"start",		href:"#!/top/start", 		icon:"envelope-o" },
			{ value:_("Data"), 			id:"data",		href:"#!/top/data", 		icon:"briefcase" }
		]
	};

	var tpl = function(){ return "<img src='assets/imgs/"+$$(this.id).getValue()+".png'/>"; };
	var setLang = function(){ locales.setLang(this.getValue());};

	var lang = {
		height:30, cols:[
			{ css:"app-lang", width: 30, view:"label", value:"en", template:tpl, click:setLang},
			{ css:"app-lang", width:30, view:"label", value:"de", template:tpl, click:setLang},
			{}
		]
	};

	var ui = {
		type:"line", cols:[
			{ type:"clean", css:"app-left-panel",
				padding:10, margin:20, borderless:true, rows: [ header, menu, lang, {}  ]},
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
