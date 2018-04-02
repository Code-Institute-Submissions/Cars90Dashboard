queue()
	.defer(d3.csv, "data/Carsdata.csv")
	.await(makeGraphs);

function makeGraphs (error, carData) {
	var ndx = crossfilter(carData);
	show_fuel_type(ndx);
	show_type(ndx);
	show_made_in(ndx);
	show_reliability(ndx);
	
	dc.renderAll();
}

function show_fuel_type(ndx){
	var dim = ndx.dimension(dc.pluck("Fuel"));
	var group = dim.group();
	
	dc.barChart("#fuel-type")
        .width(350)
        .height(250)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(1500)
        .colors(d3.scale.ordinal().range(['#1E2080', '#801E20']))
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Fuel Type")
        .yAxis().ticks(20);
}

function show_type(ndx){
	var dim = ndx.dimension(dc.pluck("Type"));
	var group = dim.group();
	
		dc.barChart("#by-type")
        .width(350)
        .height(250)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(1500)
        .colors(d3.scale.ordinal().range(['#1E2080']))
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Type of car")
        .yAxis().ticks(20);
	
}

function show_made_in(ndx){
	var dim = ndx.dimension(dc.pluck("Country"));
	var group = dim.group();
	
		dc.pieChart("#made-in")
		.height(300)
		.radius(100)
		.innerRadius(50)
		.colors(d3.scale.ordinal().range(['#1E2080', '#CD3033', '#801E20']))
		.transitionDuration(1500)
		.dimension(dim)
		.group(group);
		
}


function show_reliability(ndx){
	var dim = ndx.dimension(dc.pluck("Reliability"));
	var group = dim.group();
	
		dc.rowChart("#reliability-price")
		.height(300)
		.height(250)
		.dimension(dim)
		.group(group)
		.colors(d3.scale.ordinal().range(['#1E2080', '#3033CD', '#CD3033', '#801E20','#1F801E']))
		.transitionDuration(1500);
		
   
}


