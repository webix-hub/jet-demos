define([
	"app",
	"models/records"
],function(app, records){

	var ui = {
		view:"datatable",
		editable:true,
		visibleBatch:"info",
		columns:[
			{ id:"title", header:"Title", fillspace:true },
			{ id:"year", header:"Year", batch:"info" },
			{ id:"votes", header:"Votes", batch:"stats" },
			{ id:"rating", header:"Rating", batch:"stats", hidden:true },
			{ id:"rank", header:"Rank", batch:"stats", hidden:true }
		]
	};

	return {
		$ui: ui,
		$oninit:function(view, $scope){
			view.parse(records.data);

			$scope.on(app, "detailsModeChanged", function(mode){
                view.showColumnBatch(mode);
            });
		}
	};
	
});
