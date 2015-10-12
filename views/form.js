define([
	"models/records"
],
function(records){
	
	var ui = {
		view:"form", id:"form:editor", width:300, elements:[
			{type:"section", template:"Edit Data"},
			{view:"text", name:"title", label:"Title"},
			{view:"text", name:"year", label:"Year"},
			{view:"text", name:"votes", label:"Votes"},
			{view:"text", name:"rating", label:"Rating"},

			{view:"checkbox", id:"form:add", labelRight:"Make a copy",on:{
				onChange:function(newv){ this.$scope.show({checked:newv}); }
			}},
			{view:"button", value:"Save", click:function(){
				var form = this.getFormView();
				form.save();
				
				if($$("form:add").getValue()){
					var values = form.getValues();
					values.id = webix.uid();
					values.title = values.title + " (copy)";
					records.data.add(values);
				}
			}},
			{}
		]

	};

	return {
		$ui:ui,
		$oninit:function(){
			$$("form:editor").bind(records.data);
		},
		$onurlchange:function(config, url, $scope){
			if(config.checked)
				$$("form:add").setValue(config.checked);
		}
	};

});