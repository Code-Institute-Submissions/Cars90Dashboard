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
        .transitionDuration(500)
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
        .transitionDuration(500)
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
		.transitionDuration(500)
		.dimension(dim)
		.group(group);
		
}

function show_reliability(ndx){
    var price_dim = ndx.dimension(dc.pluck("Price"));
    
    var maxPrice = price_dim.bottom(1)[0].Price;
    var minPrice = price_dim.top(1)[0].Price;
    console.log(maxPrice);
    
    
    var usaCar = price_dim.group().reduceSum(function (d){
        if(d.Country == "USA"){
            return +d.Reliability;
        }else{
            return 0;
        }
    });
    var europeCar = price_dim.group().reduceSum(function (d){
        if(d.Country == "Europe"){
            return +d.Reliability;
        }else{
            return 0;
        }
    });
    var japanCar = price_dim.group().reduceSum(function (d){
        if(d.Country == "Japan"){
            return +d.Reliability;
        }else{
            return 0;
        }
    });
    
    
    var compositeChart = dc.compositeChart("#reliability-price")
    compositeChart
        .width(700)
        .height(200)
        .dimension(price_dim)
        .x(d3.scale.ordinal().domain([minPrice,maxPrice]))
        .xAxisLabel("price")
        .yAxisLabel("reliability")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(compositeChart)
                .colors("green")
                .group(usaCar, "USA"),
            dc.lineChart(compositeChart)
                .colors("red")
                .group(europeCar, "Europe"),
            dc.lineChart(compositeChart)
                .colors("blue")
                .group(japanCar, "Japan")
            ]);
   
}
