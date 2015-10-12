define([
	"app",
	"models/records",
	"models/state"
],function(app, records, state){

	var ui = {
		view:"datatable",
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
		$oninit:function(view){
			view.parse(records.data);

			view.showColumnBatch(state.dataMode);
			app.attachEvent("detailsModeChanged", function(){
                view.showColumnBatch(state.dataMode);
            });
		}
	};
	
});
