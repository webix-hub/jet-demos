import {JetView} from "webix-jet";

export default class TopView extends JetView {
	config(){
		
		return {
			type:"space", rows:[
				{ type:"header", template:"Clients" },
				{ template:"Nothing here yet." }
			]
		};

	}
}
