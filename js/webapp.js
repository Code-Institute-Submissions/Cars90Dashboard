var i = 0;
var images = [];
images[0] = "url(images/road.jpg)";
images[1] = "url(images/bmw.jpg)";
images[2] = "url(images/supra.jpg)";
images[3] = "url(images/mustang.jpg)";

function changeImage(){
	$(".slider").css({"background-image" : images[i]});
	if(i < images.length ){
		i++;
	}else {
		i = 0;
	}
	setTimeout("changeImage()", 4000);
}

changeImage();

    $(".info-text").animate({"opacity": "1", "height":"100%", "marginTop" : "-20px"},2000);
     $(".navbar").animate({"opacity": "1"},2000);


//function fadePic(){
//	for (var i = 0; i < images.length ; i++) {
		//console.log(images[i]);
//		$(".slider").fadeOut(3000).css({"background-image" : images[i]}).fadeIn(3000);
//	}
//};

    
   
//    function fadeDivs(){
  //  	for (var i = 0 ; i< images.length; i++) {
    //		console.log(i);

      // 		$('.slider').css({'background-image':images[i]}).fadeIn('slow');

    	//}
    		
//var i = 0;
//setInterval(fadeDivs, 3000);

//function fadeDivs() {
  // for (i=0;i < images.length; i++){
   	//$(".slider").fadeOut('400', function() {
   	//	$(this).css('background-image', images[i]).fadeIn(100);
   	//});                
   //}

$(".next").click(function(){
	$("#iconic-car").fadeOut(10).attr('src', 'images/mazda.jpg').fadeIn(2500);
	$(".car-name").fadeOut(10).text('Mazda RX-7').fadeIn(2500);
	$(".car-description").load("data/mazda.txt");
//	$(".car-description").text("The right car, at the wrong time. The last generation RX-7 sported 276 horsepower from a smooth 1.3 liter rotary engine. Sequential twin turbos made predictable power and impressive torque, while the light weight and perfect 50:50 weight distribution made one of the best handling cars of the time, at any price. Unfortunately, sales of all sports cars were down, and the rotary had a hard time meeting emissions and mileage figures, so Mazda canned the entire program.");
});






