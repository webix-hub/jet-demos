define([
	"models/records"
],
function(records){
	
	var ui = {
		isolate:true, cols:[
			{ view:"richselect", width:500, id:"selectbox", label:"Choose you favourite film", labelWidth:200,
				options:{
					body:{ template:"#title#", data:records.data }
				}
			},
			{ view:"button", id:"clear_selection", width: 100, value:"Clear", click:function(){
				var selectbox = this.getTopParentView().$$("selectbox");
				selectbox.setValue("");
			}},
			{gravity:2}
		]
	};

	return {
		$ui:ui
	};
});