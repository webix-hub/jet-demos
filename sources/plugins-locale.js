import {JetApp, JetView, plugins} from "webix-jet";

// locales, optional
import en from "./locales/en";
import es from "./locales/es";

const locales = { en, es };
const path = name => Promise.resolve(locales[name]);

class SettingsView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();


		return {
			type:"space", rows:[
				{ template:_("Settings"), type:"header" },
				{ name:"lang", optionWidth: 120, view:"segmented", label:_("Language"), options:[
					{id:"en", value:"English"},
					{id:"es", value:"Spanish"}
				], click:() => this.toggleLanguage(), value:lang },
				{}
			]
		};
	}
	toggleLanguage(){
		const langs = this.app.getService("locale");
		const value = this.getRoot().queryView({ name:"lang" }).getValue();
		langs.setLang(value);
	}
}


const app = new JetApp({
	id:			"plugins-themes",
	start:		"/start",
	views:{
		start: SettingsView
	}
});
app.use(plugins.Locale, { path });

export default app;