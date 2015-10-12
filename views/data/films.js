define([
	"models/records"
],function(records){

	var ui = {
		rows:[
			{
				view:"datatable",
				id:"films:table",
				autoConfig:true,
				navigation:true,
				yCount:6,
				on:{
					onAfterSelect:function(id){
						this.$scope.show("./data.about."+id.row);
					}
				}
			},
			{ $subview:true }
		]
	};

	return {
		$ui: ui,
		$oninit:function(view){
			$$("films:table").parse(records.data);
			$$("films:table").select(1);
		}
	};
	
});
