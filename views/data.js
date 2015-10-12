define([
	"views/controls/selectbox",
	"models/records"
],function(selectbox, records){

	var ui = {
		rows:[
			selectbox,
			{ view:"datatable", id:"data:table", autoConfig:true }
		]
		
	};

	return {
		$ui: ui,
		$oninit:function(view){
			$$("data:table").parse(records.data);
		}
	};
	
});
