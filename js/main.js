
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