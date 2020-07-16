$(document).ready(function() {
	$('.burger__link').click(function() {
		$('.menu').slideToggle('500')
		$('.burger:first-child').toggleClass('top')
		$('.burger:nth-child(2)').toggleClass('middle')
		$('.burger:last-child').toggleClass('bottom');
	});
	$('.wrap__btn').on('click', function() {	
		$(this).parent().toggleClass('unvisible');
	});
	$('.person__slider').slick({
		dots: true,
 		infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        draggable: false
	});
});