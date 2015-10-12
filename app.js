/*
	App configuration
*/

define([
	"libs/webix-jet/core",
	"libs/webix-jet/plugins/menu",
	"libs/webix-jet/plugins/locale"
], function( core, menu, locale){

	//configuration
	var app = core.create({
		id:			"My-App", //change this line!
		name:		"MyApp",
		version:	"0.1.0",
		debug:		true,
		start:		"/top/start"
	});

	app.use(menu);
	app.use(locale);


	return app;
});