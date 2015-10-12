define([
	"models/records"
],function(records){

	var ui = {
		view:"datatable",
		id:"films:table",
		select:true,
		yCount:6,
		autoConfig:true
	};

	return {
		$ui: ui,
		$oninit:function(view){
			$$("films:table").parse(records.data);
		},
		truncateAll:function(){
			$$("films:table").clearAll();
		},
		getActiveItem:function(){
			var id = $$("films:table").getSelectedId();
			return id? $$("films:table").getItem(id): null;
		}
	};
	
});
