define([
	"views/controls/selectbox"
],function(selectbox){

	return {
		rows:[
			{ template:"<b>Start page<b/>", borderless:true, height:50 },
			selectbox,
			{}
		]
		
	};
	
});
