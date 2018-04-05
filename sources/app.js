import {JetApp, JetView, EmptyRouter } from "webix-jet";

import windows from "windows";
import appguard from "appguard";
import viewguard from "viewguard";
import pluginsunload from "plugins-unload";
import redirects from "redirects";
import viewresolve from "viewresolve";
import promises from "promises";
import routes from "routes";
import pluginslocale from "plugins-locale";
import pluginstheme from "plugins-theme";
import pluginsstatus from "plugins-status";
import routersurl from "routers-url";
import urlparams from "urlparams";
import screensize from "screensize";
import viewapp from "viewapp";
import tabbar from "tabbar";
import dashboard from "dashboard";
import addview from "addview";
import datatable from "datatable";


const samples = new webix.DataCollection({ data:[
	{ group:1, value:"Windows", 			app: windows,		id:"windows" },
	{ group:1, value:"App level Guard", 	app: appguard,		id:"appguard" },
	{ group:1, value:"View level Guard", 	app: viewguard,		id:"viewguard" },
	{ group:1, value:"Unload Guard", 		app: pluginsunload,	id:"plugins-unload" },
	{ group:1, value:"Redirects", 			app: redirects,		id:"redirects" },
	{ group:1, value:"Resolving Files", 	app: viewresolve,	id:"viewresolve" },
	{ group:1, value:"Promises in views", 	app: promises,		id:"promises" },
	{ group:1, value:"Url Routes", 			app: routes,		id:"routes" },

	{ group:2, value:"Locales", 			app: pluginslocale,	id:"plugins-locale" },
	{ group:2, value:"Themes", 				app: pluginstheme,	id:"plugins-theme" },
	{ group:2, value:"Status", 				app: pluginsstatus,	id:"plugins-status" },

	{ group:3, value:"URL router", 			app: routersurl,	id:"routers-url" },
	{ group:3, value:"URL parameters", 		app: urlparams,		id:"urlparams" },

	{ group:4, value:"Adapting to Screen Size",		app: screensize,	id:"screensize" },
	{ group:4, value:"Using App as View", 			app: viewapp,		id:"viewapp" },
	{ group:4, value:"Using Tabbar",				app: tabbar,		id:"tabbar" },
	{ group:4, value:"Using Dashboard",				app: dashboard,		id:"dashboard" },
	{ group:4, value:"Using Datatable with Subview",app: datatable,		id:"datatable" },
	{ group:4, value:"Dynamic views (addView)",	app: addview,		id:"addview" },
]});


function showSample(id){
	window.open(id+"/", "_blank");
}

class SamplesNavigation extends JetView {
	config(){
		return {
			view:"scrollview", scroll:"x", body:{
				cols:[
					{ header:"Functionality", body: { 
						width: 320, view:"list", localId: "list1", click : showSample
					}},
					{ rows:[
						{ header:"Plugins", body: { 
							width: 320, view:"list", localId: "list2", click : showSample
						}},
						{ header:"Routers", body: { 
							width: 320, view:"list", localId: "list3", click : showSample
						}}
					]},
					{ header:"Recepies", body: { 
						width: 320, view:"list", localId: "list4", click : showSample
					}}
				]
			}
		};
	}
	init(){
		this.$$("list1").sync(samples, function(){ this.filter(a => a.group === 1); });
		this.$$("list2").sync(samples, function(){ this.filter(a => a.group === 2); });
		this.$$("list3").sync(samples, function(){ this.filter(a => a.group === 3); });
		this.$$("list4").sync(samples, function(){ this.filter(a => a.group === 4); });
	}
}

const samplesApp = new JetApp({
	id:	"jetsamples",
	start:		"/top",
	router: 	EmptyRouter,
	views:{
		top:	SamplesNavigation
	}
});

webix.ready(() => {
	const id = document.location.pathname.split("/")[1];
	const item = samples.getItem(id);
	if (item){
		const app = typeof item.app === "function" ? item.app() : item.app;
		document.title = item.value;
		app.render();
	} else {
		samplesApp.render()
	}
});