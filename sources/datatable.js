import {JetApp, JetView} from "webix-jet";

class SubLayout extends JetView {
	constructor(app, name, data){
		super(app, name);
		this.customData = data;
	}
	config(){
		return {
			rows:[
				{ type:"header", template: () => this.customData.title },
				SubTemplate
			]
		}
	}
}

class SubTemplate extends JetView {
	config(){
		return {
			template:"Subview", height: 30 
		};
	}
}


class TopView extends JetView {
	 config(){
		return {
			view:"datatable",
			subview: (obj, target) => {
				//will work only for sync JetViews
				var sub = new SubLayout(this.app, "", {
					title: obj.title 
				});
				this.ui(sub, { container: target });
				return sub.getRoot();
			},
			columns:[
				{ id:"title",   header:"Title", sort:"string",
				template:"{common.subrow()} #title#", width:220 },
				{ id:"year",    header:"Year",  width:100, sort:"int"},
        		{ id:"votes",   header:"Votes", width:100,  sort:"int"}
			],
			data:[
				{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790 },
				{ id:2, title:"The Godfather", year:1972, votes:511495 },
				{ id:3, title:"The Godfather: Part II", year:1974, votes:319352 }
			]
		};
	}
}


const app = new JetApp({
	id:			"windows",
	start:		"/top",
	views:{
		top:		TopView
	}
});


export default app;