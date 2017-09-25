$(document).ready(function() {
		$('#nav-icon1').click(function() {
		$(this).toggleClass('open');
		$('.header__nav').toggleClass('expand');
		$('.header__nav-menu').toggleClass('zindex');
		$('.header__solutions').toggleClass('opacity0.3');
	});
})