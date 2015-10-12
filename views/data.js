define([
	"app",
	"models/records",
],function(app, records){

	var ui =  { 
		view:"datatable",  autoConfig:true, editable:true 
	};

	return {
		$ui: ui,
		$oninit:function(view){
			view.parse(records.data);
		}
	};
	
});
