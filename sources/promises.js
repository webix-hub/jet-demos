import {JetApp, JetView} from "webix-jet";

const direct = {
	template:"Allowed #1"
};
const promised = () => {
	var t = webix.promise.defer();
	setTimeout(function(){
		t.resolve({ template:"Resolved by promise" });
	}, 1000);
	return t;
};

class TopView extends JetView {
	config(){
		var res = webix.promise.defer();
		var ui = {
			type:"space", rows:[
				{ type:"header", template:"Using windows"},
				{
					type:"wide",cols:[
						{ view:"form",  width: 200, rows:[
							{ view:"button", value:"Direct loading", click:() =>
								this.show("direct") },
							{ view:"button", value:"Promised", click:() =>
								this.show("promised") },
							{}
						]},
						{ $subview: true }
					]
				}
			]
		};


		setTimeout(function(){
			res.resolve(ui);
		}, 1000);
		return res;
	}
}



const app = new JetApp({
	id:			"windows",
	start:		"/top/direct",
	views:{
		top:		TopView,
		promised:	promised,
		direct:	direct
	}
});

export default app;