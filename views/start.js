define([
	"app"
], function(app){

	var ui = {
		rows:[
			{ template:"Right click the list to see the context menu", css:{"text-align":"center"}, borderless:true},
			{ cols:[
				{}, {
					view:"list", id:"list", select:true, autoheight:true,
					data:[
						{ id:1, value:"I like this design"},
						{ id:2, value:"I don't like this design"},
						{ id:3, value:"I don't care"}
					],
					onContext:{}
				},
				{}
			]},
			{}
		]
	};

	return {
		$ui:ui,
		$oninit:function(view, scope){
			scope.ui({
				view:"contextmenu",
				id:"cmenu",
				data:[ {id:"data", value:"Go to Data tab"}, {id:"start", value:"Stay here"} ],
				on:{
					onItemClick:function(id){
						app.show("/top/"+id);
					}
				}
			});

			$$("cmenu").attachTo($$("list"));
		}
	};
	
});
