import pace from 'pace-progressbar';
import './lib/background-clip-text-polyfill.js';
import Pikaday from 'pikaday';
import LazyLoad from 'vanilla-lazyload';
import $ from 'jquery';
// import 'what-input';
import animsition from 'animsition';
import jquery_inview from 'jquery-inview';
import slick from 'slick-carousel';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// window.$ = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

// date picker for date field

var picker = new Pikaday({ field: document.getElementById('wedding-date') });


$(document).foundation();

// get album name for login page

// var loginUrl = document.location.href.indexOf('login/?return_to=%2Falbums') > -1;
// var albumName = document.location.href.substring(document.location.href.indexOf('login/?return_to=%2Falbums%2F') + 1).replace('ogin/?return_to=%2Falbums%2F', '');
// albumName = albumName.replace(/%2F&album=.*$/i, '').replace(/\-/g, ' ').replace(/\d+/g, '').replace(/\s*$/, '');

// function toTitleCase(str) {
// 	return str.replace(/(?:^|\s)\w/g, function (match) {
// 		return match.toUpperCase();
// 	});
// }

// if (loginUrl) {
// 	$('.k-lens-login .page-title-container').append('<h1 class="page-title" itemprop="headline">&#xe00c;' + toTitleCase(albumName) + '&#xe013;</h1>');
// }

// disable sumbit button on login form until something is entered

// $('input[type="password"]').keyup(function () {
// 	$('button[type="submit"]').attr('disabled', !$(this).val().length);
// }).trigger('keyup');

// load animsition

$('.page-load').animsition({
	inClass: 'fade-in',
	outClass: 'fade-out',
	inDuration: 1500,
	outDuration: 800,
	linkElement: '.animsition-link',
	// e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
	loading: true,
	loadingParentElement: 'body', //animsition wrapper element
	loadingClass: 'animsition-loading',
	loadingInner: '', // e.g '<img src="loading.svg" />'
	timeout: false,
	timeoutCountdown: 5000,
	onLoadEvent: true,
	browser: ['animation-duration', '-webkit-animation-duration'],
	// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	overlay: false,
	overlayClass: 'animsition-overlay-slide',
	overlayParentElement: 'body',
	transition: function (url) { window.location.href = url;}
});

// slick slider for home page & sets pages

$('.gallery-main').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	variableWidth: true
});

// function to set the height on fly

// function autoHeight() {
// 	$('#main').css('min-height', 0);
// 	$('#main').css('min-height', (
// 		$(document).height()
// 		- $('#header').height()
// 		- $('#footer').height()
// 	));
// }

// // onDocumentReady function bind
// $(document).ready(function() {
// 	autoHeight();
// });

// // onResize bind of the function
// $(window).resize(function() {
// 	autoHeight();
// });

// detect iOS and add class to body

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (iOS) {
	$('body').addClass('iOS')
}

// detect album parent set and add active class to corresonding link

var setId = $('.gallery-page').attr('id');
var pageName = $('.regular-page').attr('id');

if (setId) {
	$('.main-nav a[title="' + setId + '"]').parent('li').addClass('active');
}

if (pageName) {
	$('.main-nav a[title="' + pageName + '"]').parent('li').addClass('active');
}

// hamburger icon animation

$('#offCanvasRight').bind('opened.zf.offcanvas closed.zf.offcanvas', function () {
	$('.hamburger, .side-nav').toggleClass('active');
});

$(document).ready(function() {
	var img = $('.image-item img');//jQuery id selector

	var width = img.width(); //jQuery width method
	var height = img.height(); //jQuery height method

	if(width > height){
		img.addClass('portrait');
	}
});

$(window).bind('load', function () {

	// detect portrait photos and add class

	$('.image-item img').each(function(){

		// lazy load images
		var myLazyLoad = new LazyLoad();
		myLazyLoad.update();

		this.onload = function() {

		    var width  = this.naturalWidth;
		    var height = this.naturalHeight;

			// $(this).parent('.image-item').css('min-width', width + 'px');

		    if (width > height) {
				$(this).parent('.image-item').addClass('landscape');
			} else {
				$(this).parent('.image-item').addClass('portrait');
			}

			$('img[data-layout="portrait"]').parent('.image-item').addClass('portrait').removeClass('landscape');
			$('img[data-layout="landscape"]').parent('.image-item').addClass('landscape').removeClass('portrait');

		}

	});

	// add animation class when in viewport

	$('.main-front-page-header .menu').addClass('active');

	$('.content p, form .form-group').bind('inview', function (event, visible) {
		if (visible === true) {
			// element is now visible in the viewport
			$(this).addClass('moveInUp');
		}
	});

});


// home page sliding content

$('.slides-container .main-slide .gallery-trigger').click(function() {
	$(this).parent().find('.gallery-container').toggleClass('mover-over');
	$(this).parent().parent().find('.main-background').fadeToggle(1000);
	$(this).find('.main-title').fadeToggle(1000);
	return false;
});

// trigger extra fields for contact form

$('#wedding-date-group, #wedding-location-group').addClass('disappear');
$('#weddings').change(function () {
	if ($(this).is(':checked')) {
		$('#wedding-date-group, #wedding-location-group').fadeIn('fast');
	} else {
		$('#wedding-date-group, #wedding-location-group').fadeOut('fast');
		$('#wedding-date, #wedding-location').val('');
	}
});

// contact form ajax

// $('#ajax-contact').submit(function(ev) {
//     // Prevent the form from actually submitting
//     ev.preventDefault();
//     $('#spinner').addClass('show');

//     // Send it to the server
//     $.post({
//         url: '/',
//         dataType: 'json',
//         data: $('#ajax-contact').serialize(),
//         success: function(response) {
//             if (response.success) {
//                 $('#thanks').fadeIn();
//                 $('#error').fadeOut();
//                 $('#spinner').removeClass('show');
//                 $('#ajax-contact').each(function () {
// 					this.reset();
// 				});
//             } else {
//                 // response.error will be an object containing any validation errors that occurred, indexed by field name
//                 // e.g. response.error.fromName => ['From Name is required']
//                 // alert('An error occurred. Please try again.');
//                 $('#error').fadeIn();
// 				$('#thanks').fadeOut();
// 				$('#spinner').removeClass('show');
//             }
//         }
//     });
// });
