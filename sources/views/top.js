import {JetView} from "webix-jet";

export default class TopView extends JetView {
	config(){
		
		return {
			type:"space", cols:[
				{ view:"list", width: 200, select:true, data:[
					{ value:"List", id:"list", route:"start"},
					{ value:"Form", id:"form", route:"area.left.form"},
					{ value:"About", id:"about", route:"about"}
				], click:function(id){
					var item = this.getItem(id);
					this.$scope.show(item.route);
				}},
				{ $subview: true }
			]
		};

	}
}
