/* global jQuery */

// jquery functions

(function ($){

	'use strict';

	// start foundation

	// $(document).foundation();

	// load animsition

	$('.animsition').animsition({
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

	// detect iOS and add class to body

	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	if (iOS) {
		$('body').addClass('iOS')
	}

	// add animation class when in viewport

	$('.content p, form fieldset').bind('inview', function (event, visible) {
		if (visible === true) {
			// element is now visible in the viewport
			$(this).addClass('moveInUp');
		}
	});

	// scroll to sections

	$('a[href*=\\#]:not([href=\\#])').click(function () {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

})(jQuery);