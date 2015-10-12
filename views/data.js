define([
	"models/records"
],function(records){

	var ui = {
		view:"datatable", autoConfig:true, editable:true, on:{
			onItemClick:function(){
				$$("win1").show();
			}
		}
	};

	return {
		$ui: ui,
		$windows:[
			{ view:"window", id:"win2", position:"center",
				head:{ cols:[
					{}, 
					{view:"icon", icon:"times", click:function(){
						this.getTopParentView().hide();
					}}
				]},
				body:"Data is loaded"
			},
			{ view:"popup", id:"win1", position:"center", body:"You've clicked me!"}
			
		],
		$oninit:function(view){
			view.parse(records.data);
			$$("win2").show();
		}
	};
	
});
