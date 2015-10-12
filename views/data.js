define([
	"models/records",
	"locale",
],function(records, _){

	var ui = {
		view:"datatable",
		columns:[
			{ id:"title", header:_("Title"), fillspace:true},
			{ id:"year", header:_("Year")},
			{ id:"votes", header:_("Votes")},
			{ id:"rating", header:_("Rating")},
			{ id:"rank", header:_("Rank")}
		]

	};

	return {
		$ui: ui,
		$oninit:function(view){
			view.parse(records.data);
		}
	};
	
});
