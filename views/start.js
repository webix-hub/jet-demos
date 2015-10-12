define([], function(){

	var ui = {
		rows:[
			{view:"toolbar", elements:[
				{},
				{ view:"button", width:200,  value:"Show the news", click:function(){
					this.$scope.show("./news");
				}},
				{ view:"button", width:200,  value:"Go to the data page", click:function(){
					this.$scope.show("data");
				}}
			]},
			{ $subview:true }
		]
	};

	return ui;
});
