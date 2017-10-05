import {JetApp, UrlRouter} from "webix-jet";

const TopView = {
	type:"space", rows:[
		{ type:"header", template:"Url router"},
		{
			type:"wide", cols:[
				{ width:200, css:"navblock", template:`
					<a route="/top/start"> - show start</a>
					<a route="/top/details"> - show details</a>
				`},
				{ $subview: true }
			]
		}
	]
};

const StartView = {
	template:"Start page"
};

const DetailsView = {
	template:"Details page"
};

webix.ready(() => {
	const app = new JetApp({
		id:			"plugins-themes",

		router:		UrlRouter,
		routerPrefix: "/routers-url",

		start:		"/top/start",
		views:{
			top:		TopView,
			start:		StartView,
			details:	DetailsView
		}
	});
	app.render();
});