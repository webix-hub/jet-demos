import {JetApp, JetView} from "webix-jet";

// It is important to NOT DEFINE top level ID
// for the content which will be hosted 
// inside of tabview
class AdminView1 extends JetView {
	config(){
		return {
			template:"Admin view 1 <br> Dashboard"
		};
	}
};

class AdminView2 extends JetView {
	config(){
		return {
			template:"Admin view 2 <br> Meta info"
		};
	}
};

class AdminView3 extends JetView {
	config(){
		return { 
			template:"Admin view 3 <br> Settings "
		};
	}
}

class TopView extends JetView {
	 config(){
		return {
			type: "space",
			rows: [
				{ view:"tabview", cells:[
					{ header:"Dashboard", body: AdminView1 },
					{ header:"Meta Info", body: AdminView2 },
					{ header:"Settings", body: AdminView3 }
				]},
				{ height: 50 },
				{ view:"segmented", multiview:true, options:[
					"Dashboard", "Meta Info", "Settings"
				], optionWidth: 120 },
				{ view:"multiview", cells:[
					{ $subview:AdminView1, id:"Dashboard" },
					{ $subview:AdminView2, id:"Meta Info" },
					{ $subview:AdminView3, id:"Settings" }
				]}
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