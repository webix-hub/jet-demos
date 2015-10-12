define([
	"models/records"
],
function(records){

	var select_id = webix.uid();
	var button_id = webix.uid();

	return {
		$ui: (function(){
			return {
				cols:[
					{ view:"richselect", width:500, id:select_id, label:"Choose you favourite film", labelWidth:200,
						options:{
							body:{
								template:"#title#",
								data:records.data
							}
						}
					},
					{ view:"button", id:button_id, width: 100, value:"Clear", click:function(){
						$$(select_id).setValue("");
					}},
					{gravity:2}
				]
			};
		})()
	};
});