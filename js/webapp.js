var i = 0;

var images = [
"url(images/road.jpg)",
"url(images/bmw.jpg)",
"url(images/supra.jpg)",
"url(images/mustang.jpg)"
];

var topImages = [
"images/toyota.jpg",
"images/mazda.jpg",
"images/acura.jpg",
"images/viper.jpg",
"images/mclaren.jpg",
"images/suzuki.jpg",
"images/ford.jpg",
"images/honda.jpg",
"images/lexus.jpg",
"images/cadillac.jpg"
];

var topTitle = [
"Toyota Supra",
"Mazda RX-7",
"Acura NSX",
"Dodge Viper",
"McLaren F1",
"Suzuki Samurai",
"Ford F-150",
"Honda Civic",
"Lexus LS",
"Cadillac Eldorado"
];


var topText = [
"data/toyota.txt",
"data/mazda.txt",
"data/acura.txt",
"data/viper.txt",
"data/mclaren.txt",
"data/suzuki.txt",
"data/ford.txt",
"data/honda.txt",
"data/lexus.txt",
"data/cadillac.txt"
];

var clickCount = 0;



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

  


$(".next").click(function(){
  clickCount++; 
  if (clickCount >= topImages.length) {
    clickCount = 0;
  }
	$("#iconic-car").animate({"opacity": "0"},10).attr('src', topImages[clickCount]).animate({"opacity": "1"},1500);
	$(".car-name").fadeOut(10).text(topTitle[clickCount]).fadeIn(1500);
	$(".car-description").fadeOut(10).load(topText[clickCount]).fadeIn(1500);
});

$(".prev").click(function(){
  clickCount--; 
  if (clickCount < 0) {
    clickCount = topImages.length - 1;
  }
  $("#iconic-car").animate({"opacity": "0"},10).attr('src', topImages[clickCount]).animate({"opacity": "1"},1500);
  $(".car-name").fadeOut(10).text(topTitle[clickCount]).fadeIn(1500);
  $(".car-description").fadeOut(10).load("data/mazda.txt").fadeIn(1500);
});


$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 1000,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: -50           // offste (in px) for fixed top navigation
});


