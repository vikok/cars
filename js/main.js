;(function($) {
	"use strict";

$('.ba-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.ba-type-slider'
});
$('.ba-type-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.ba-cars-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

})(jQuery);
