import {JetView} from "webix-jet";

export default class TopView extends JetView {
	config(){
		
		return {
			type:"space", cols:[
				{ view:"list", width: 200, select:true, data:[
					{ value:"About", id:"about", route:"about"},
					{ value:"Module", id:"modules.clients", route:"modules.clients"}
				], click:function(id){
					var item = this.getItem(id);
					this.$scope.show(item.route);
				}},
				{ $subview: true }
			]
		};

	}
}
