define([],function(){

	var collection = new webix.DataCollection({
		url:"rest->server/records.php",
        save:"rest->server/records.php"
	});

	return {
		data: collection
	};
});