/*
	App configuration
*/

define([
	"libs/webix-jet/core"
], function(core){

	//configuration
	var app = core.create({
		id:			"My-App", //change this line!
		name:		"My App!",
		version:	"0.1.0",
		debug:		true,
		start:		"/top/start"
	});

	return app;
});