define([
	"models/records"
],function(records){

	var ui = {
		cols:[
			{ view:"datatable", id:"data:table", select:true, autoConfig:true, on:{
				onAfterSelect:function(id){
					records.data.setCursor(id);
					this.$scope.show({id:id.row});
				}
			}},
			{ $subview:true }
		]
	};

	return {
		$ui: ui,
		$oninit:function(view){
			$$("data:table").sync(records.data);
		},
		$onurlchange:function(config, url, $scope){
			if(config.id && $$("data:table").exists(config.id))
				$$("data:table").select(config.id);
		}
	};
	
});
