
var e = document.getElementById("ddlViewBy");
//var strUser = e.value;
var strUser = e.options[e.selectedIndex].text;

// Sliders
$(".slider-one").not(".slick-initalized").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  prevArrow: ".site-slider .slider-btn .prev",
  nextArrow: ".site-slider .slider-btn .next",
});

// 2nd Sliders
$(".slider-two").not(".slick-initalized").slick({
  prevArrow: ".site-slider-two .prev",
  nextArrow: ".site-slider-two .next",
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
});
