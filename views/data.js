define([
	"models/records"
],function(records){
	var popup, eventid;
	
	var ui = {
		view:"datatable", autoConfig:true, editable:true
	};
	
	return {
		$ui: ui,
		$oninit:function(view){
			popup = webix.ui({
				view:"popup",
				position:"center",
				body:"Data is updated"
			});

            eventid = records.data.attachEvent("onDataUpdate", function(){
				popup.show();
            });

			view.parse(records.data);
		},
		$ondestroy:function(){
            popup.destructor();
            records.data.detachEvent(eventid);
        }
	};
	
});
