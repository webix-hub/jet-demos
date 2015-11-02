define([
	"models/records"
],function(records){

	var ui = {
		rows:[
			{ template:"Right click the datatable to see the context menu", css:{"text-align":"center"}, autoheight:true},
			{ view:"datatable", id:"data", autoConfig:true, editable:true, on:{
				onItemClick:function(){
					$$("win1").show();
				}
			}}
		]
		
	};

	return {
		$ui: ui,
		//if multiple windows are needed
		$windows:[
			{
				view:"contextmenu", id:"cmenu",
				data:["Add","Rename","Delete",{ $template:"Separator" },"Info"],
				on:{
					onItemClick:function(id){
						var context = this.getContext();
						var dtable = context.obj;
						var dataId = context.id;
						webix.message("List item: <i>"+dtable.getItem(dataId).title+"</i> <br/>Context menu item: <i>"+this.getItem(id).value+"</i>");
					}
				}
			},
			{ view:"popup", id:"win1", position:"center", body:"Data is loaded!"}
			
		],
		$oninit:function(view, scope){
			$$("cmenu").attachTo($$("data"));

			$$("data").parse(records.data);
			$$("win1").show();
		}
	};
	
});
