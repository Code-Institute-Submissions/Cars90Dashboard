var i = 0;
var clickCount = 0;

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

var carImage = "#iconic-car";
var carTitle = ".car-name";
var carText = ".car-description"


// function for main/top image
setTimeout("changeImage()", 5000);

function changeImage() {
    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    $(".slider").animate({ opacity: 0.4 }, 1000, function() {
        $(this).css({ "background-image": images[i] }, 100)
            .animate({ opacity: 1 }, { duration: 1600 });
    });
    setTimeout("changeImage()", 6000);
}

//animation when page loads
$(".info-text").animate({ "opacity": "1", "height": "100%", "marginTop": "-20px" }, 1500);
$(".navbar").animate({ "opacity": "1" }, 1500);


$(window).on("resize", function() {
    location.reload();
})
// function for the menu on mobile
$(".navbar-toggle").on("click touch", function() {
    $(".collapse").toggle();
})

// function for the next button on the slider
$(".next").click(function() {
    clickCount++;
    if (clickCount >= topImages.length) {
        clickCount = 0;
    }
    $(carImage).fadeOut(10).attr('src', topImages[clickCount]).fadeIn(40);
    $(carTitle).fadeOut(10).text(topTitle[clickCount]).fadeIn(40);
    $(carText).fadeOut(10).load(topText[clickCount]).fadeIn(40);
});

// function for the prev button on the slider
$(".prev").click(function() {
    clickCount--;
    if (clickCount < 0) {
        clickCount = topImages.length - 1;
    }
    $(carImage).fadeOut(10).attr('src', topImages[clickCount]).fadeIn(40);
    $(carTitle).fadeOut(10).text(topTitle[clickCount]).fadeIn(40);
    $(carText).fadeOut(10).load(topText[clickCount]).fadeIn(40);
});


$.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: 'linear', // the easing function for animation
    scrollTime: 1000, // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -50 // offste (in px) for fixed top navigation
});