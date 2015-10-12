define([
	"views/films"
],function(films){

	var details = {
		view:"template", id:"data:tpl", data:{}, 
		template:function(obj){
			return obj.id?"<b>"+obj.rank+".</b>"+obj.title+"<br>"+obj.year+"<br>"+obj.votes+"<br>"+obj.rating:"";
		}
	};

	var ui = {
		rows:[
			{view:"toolbar", elements:[
				{},
				{ view:"button", value:"Show details", width:200, click:function(){
					var item = films.getActiveItem();
					if(item){
						$$("data:tpl").data = item;
						$$("data:tpl").refresh();
					}
					else
						webix.alert("Select a film record, please");
				}},
				{ view:"button", value:"Clear All", width:200, click:function(){
					films.truncateAll();
				}}
			]},
			films,
			details
		]
	};

	return {
		$ui: ui
	};
	
});
