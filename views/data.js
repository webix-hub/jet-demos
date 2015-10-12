define([
	"models/records"
],function(records){

	var ui = {
		view:"datatable", autoConfig:true, editable:true
	};
	
	return {
		$ui: ui,
		$oninit:function(view, $scope){
			var popup = $scope.ui({
				view:"popup",
				position:"center",
				body:"Data is updated"
			});

            $scope.on(records.data, "onDataUpdate", function(){
				popup.show();
			});

			view.parse(records.data);
		}
	};
	
});
