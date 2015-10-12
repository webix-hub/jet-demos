define([
	"models/records"
],function(records){

	var ui = {
		rows:[
			{ view:"label", label:"Chart with hardcoded configuration data", align:"center" },
			{
				view:"chart",
				id:"basic:chart",
				type:"line",
				height:400,
				xAxis:{ template:"'#year#" },
				yAxis:{ start:0,
					step:10,
					end: 100
				},
				legend:{
					values:[{text:"Company A",color:"#1293f8"},{text:"Company B",color:"#66cc00"}],
					align:"right",
					valign:"middle"
				},
				series:[
					{ value:"#sales#",  line:{ color:"#1293f8"}},
					{ value:"#sales2#", line:{ color:"#66cc00"}}
				]
            },
            {}
		]
		
	};

	return {
		$ui:ui,
		$oninit:function(view){
			$$("basic:chart").parse(records.data);
		}
	};
});
