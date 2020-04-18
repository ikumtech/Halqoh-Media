$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".ring").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

	if($('.playlist-area').length > 0 ) {
		var containerEl = document.querySelector('.playlist-area');
		var mixer = mixitup(containerEl);
	}

});

(function($) {
	/*------------------
		Navigation
	--------------------*/

$(".main-menu").slicknav({
    appendTo: '.header-section',
    allowParentLinks: true,
    closedSymbol: '<i class="fa fa-angle-right"></i>',
    openedSymbol: '<i class="fa fa-angle-down"></i>'
});

$('.slicknav_nav').prepend('<li class="header-right-warp"></li>');
$('.header-right').clone().prependTo('.slicknav_nav > .header-right-warp');