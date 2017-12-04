import {JetApp, JetView} from "webix-jet";

const win1 = {
	view:"popup",
	position:"center",
	body:{ template:"Text 1" }
};

class WindowsView extends JetView {
	config(){
		return {
			view:"popup",
			top:100, left:200,
			body:{ template:"Text 2" }
		};
	}
	showWindow(){
		this.getRoot().show();
	}
}

class TopView extends JetView {
	config(){
		return {
			type:"space", rows:[
				{ type:"header", template:"Using windows"},
				{
					type:"wide",cols:[
						{ view:"form",  width: 200, rows:[
							{ view:"button", value:"Show Window 1", click:() =>
								this.win1.show()
							},
							{ view:"button", value:"Show Window 2", click:() =>
								this.win2.showWindow()
							},
							{}
						]},
						{ $subview: true }
					]
				}
			]
		};
	}

	init(){
		//webix view
		this.win1 = this.ui(win1);

		//WindowsView class
		this.win2 = this.ui(WindowsView);
	}
}


webix.ready(() => {
	const app = new JetApp({
		id:			"windows",
		start:		"/top",
		views:{
			top:		TopView
		}
	});
	app.render();
});