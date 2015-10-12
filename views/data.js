define([
	"models/records"
],function(records){

	return webix.ajax("server/colors.php").then(function(data){
		data = data.json();

		var ui = {
			rows:[
				{ view:"label", label:"Chart with serverside configuration", align:"center" },
				{
					view:"chart",
					id:"async:chart",
					type:"area",
					height:400,
					xAxis:{ template:"'#year#" },
					yAxis:{ start:0,
						step:10,
						end: 100
					},
					legend:{
						values:[{text:"Company A", color:data[0].color },{text:"Company B", color:data[1].color }],
						align:"right",
						valign:"middle"
					},
					series:[
						{ value:"#sales#",  alpha:0.3, color:data[0].color },
						{ value:"#sales2#",  alpha:0.5, color:data[1].color }
					]
				},
				{}
			]
			
		};

		return {
			$ui:ui,
			$oninit:function(view){
				$$("async:chart").parse(records.data);
			}
		};

	});
});