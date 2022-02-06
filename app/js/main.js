'use strict';

// SCROLL-DOWN
$('.scroll-down').click(function() {
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 600);
	return false;
});
// SCROLL-DOWN

// SCROLL-UP
$('.footer__arrow-up').click(function() {
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 600);
	return false;
});
// SCROLL-UP

// MENU-ITEM-SCROLL
$('.navigation-menu__link').click(function() {
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 600);
	return false;
});
// MENU-ITEM-SCROLL

// MENU-ITEM-SCROLL (ADAPTIVE)
$('.burger-menu__link').click(function() {
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 600);
	return false;
});
// MENU-ITEM-SCROLL (ADAPTIVE)

// HEADER-BUTTON-SCROLL
$('.header__button').click(function() {
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 600);
	return false;
});
// HEADER-BUTTON-SCROLL

// BURGER-BUTTON
$('.burger-btn').click(function() {
	$(this).toggleClass('burger-btn_is-active');
	$('.burger-menu').fadeToggle('fast');
});
// BURGER-BUTTON

// ZOOM-PICTURE
$('.lightzoom').lightzoom({
	speed: 5,
	imgPadding: 7,
	viewTitle: true,
	isOverlayClickClosing: true,
	isEscClosing: true
});
// ZOOM-PICTURE

// BUTTON SHOW-MORE (TAB-WEB)
$('#web .profile__show-more').on('click', function() {
	$('#web .profile__jobs:hidden').slice(0, 1).fadeIn().css({
		'display': 'flex',
		'margin-top': '5.6%'
	});

	$('#web .profile__jobs:not(.profile__jobs_hidden)').css('margin-top', '0');

	if($('#web .profile__jobs:hidden').length == 0) {
		$('#web .profile__show-more').hide();
	}
});
// BUTTON SHOW-MORE (TAB-WEB)

// BUTTON SHOW-MORE (TAB-3D)
$('#_3d .profile__show-more').on('click', function() {
	$('#_3d .profile__jobs:hidden').slice(0, 1).fadeIn().css({
		'display': 'flex',
		'margin-top': '5.6%'
	});

	$('#_3d .profile__jobs:not(.profile__jobs_hidden)').css('margin-top', '0');

	if($('#_3d .profile__jobs:hidden').length == 0) {
		$('#_3d .profile__show-more').hide();
	}
});
// BUTTON SHOW-MORE (TAB-3D)

//INSPECTION OF INITIAL CONDITION FOR HIDDEN BLOCKS
$(".profile__tab a[href='#_3d']").on('click', function() {
	if($('#_3d .profile__jobs').length == 1) {
		$('#_3d .profile__show-more').hide();
	}
});

if($('#web .profile__jobs:hidden').length == 0) {
	$('#web .profile__show-more').hide();
}
//INSPECTION OF INITIAL CONDITION FOR HIDDEN BLOCKS


