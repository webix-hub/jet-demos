define([
	"models/records",
	"locale"
],function(records, _){

	var count = records.data.count();

	return {
		rows:[
			{ borderless:true, template:"<b>"+_("StartPage")+"</b>", height: 50 },
			{ borderless:true, template:_("FilmsCountLabel", count) }
		]
	};
});
