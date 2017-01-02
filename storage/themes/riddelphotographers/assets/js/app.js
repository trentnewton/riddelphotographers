// create class for viewport measurements

new vUnit({
  CSSMap: {
    // The selector (VUnit will create rules ranging from .selector1 to .selector100)
    '.vh_height': {
      // The CSS property (any CSS property that accepts px as units)
      property: 'height',
      // What to base the value on (vh, vw, vmin or vmax)
      reference: 'vh'
    }
  }
}).init(); // call the public init() method

// jquery functions

(function ($) {

  'use strict';

  // start foundation

  $(document).foundation();

  $(document).ready(function () {

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

    // slick slider for home page & sets pages

    $('.gallery-main').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      variableWidth: true
    });

    // detect iOS and add class to body

    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (iOS) {
      $('body').addClass('iOS')
    }

    // detect album parent set and add acitve class to corresonding link

    if ($('.gallery-page').is('.set-Weddings')) {
      $('.k-nav-root a[title="Weddings"]').addClass('k-nav-current');
    }

    if ($('.gallery-page').is('.set-Engagements')) {
      $('.k-nav-root a[title="Engagements"]').addClass('k-nav-current');
    }

    if ($('.gallery-page').is('.set-Families')) {
      $('.k-nav-root a[title="Families"]').addClass('k-nav-current');
    }

    if ($('.gallery-page').is('.set-Personal')) {
      $('.k-nav-root a[title="Personal"]').addClass('k-nav-current');
    }

    // disable sumbit button on login form until something is entered

    $('input[type="password"]').keyup(function () {
      $('button[type="submit"]').attr('disabled', !$(this).val().length);
    }).trigger('keyup');

  });

  // hamburger icon animation

  $('#offCanvasRight').bind('opened.zf.offcanvas closed.zf.offcanvas', function () {
    $('.hamburger').toggleClass('active');
    $('.side-nav').toggleClass('active');
  });

  $(window).bind('load', function () {

    // add animation class when in viewport

    $('.main-header .menu').addClass('active');

    $('.content p, form fieldset').bind('inview', function (event, visible) {
      if (visible === true) {
        // element is now visible in the viewport
        $(this).addClass('moveInUp');
      }
    });

    // detect portrait photos and add class

    // $('.image-items-list .image-item > img[data-presets*="tiny,40,60"]').parent().addClass('half');
    $('.image-items-list .image-item.0\\.666').removeClass('small-12').addClass('small-6');
    $('.image-items-list .image-item.0\\.667').removeClass('small-12').addClass('small-6');
    $('.image-items-list .image-item > img[alt*="portrait"]').parent().removeClass('small-12').addClass('small-6');
    // $('.image-items-list .image-item > img[alt*="landscape"][data-presets*="tiny,40,60"]').parent().removeClass('half');
    $('.image-items-list .image-item > img[alt*="landscape"]').parent().removeClass('small-6').addClass('small-12');
    $('.image-items-list .image-item.0\\.666 > img[alt*="landscape"]').parent().removeClass('small-6').addClass('small-12');
    $('.image-items-list .image-item.0\\.667 > img[alt*="landscape"]').parent().removeClass('small-6').addClass('small-12');

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

  // home page sliding content

  $('#Weddings .main-slide .gallery-trigger').on('click', function () {
    $('#Weddings .gallery-container').toggleClass('mover-over');
    $('#Weddings .main-background').fadeToggle(1000);
    $('#Weddings .main-title').fadeToggle(1000);
    return false;
  });

  $('#Engagements .main-slide .gallery-trigger').on('click', function () {
    $('#Engagements .gallery-container').toggleClass('mover-over');
    $('#Engagements .main-background').fadeToggle(1000);
    $('#Engagements .main-title').fadeToggle(1000);
    return false;
  });

  $('#Families .main-slide .gallery-trigger').on('click', function () {
    $('#Families .gallery-container').toggleClass('mover-over');
    $('#Families .main-background').fadeToggle(1000);
    $('#Families .main-title').fadeToggle(1000);
    return false;
  });

  $('#Personal .main-slide .gallery-trigger').on('click', function () {
    $('#Personal .gallery-container').toggleClass('mover-over');
    $('#Personal .main-background').fadeToggle(1000);
    $('#Personal .main-title').fadeToggle(1000);
    return false;
  });

  $(function () {
    var dataBase = $('.split-boxes .k-content-embed .k-content img').attr('data-base');
    var dataExtension = $('.split-boxes .k-content-embed .k-content > img').attr('data-extension');
    $('div.split-page-bg').css('background-image', 'url(' + dataBase + 'xlarge.' + dataExtension + ')');
    $('.split-boxes .k-content-embed .k-content img').parent().parent().remove();
  });

  // trigger extra fields for contact form

  $('[name*="k-contact-field-6"]').parent().addClass('disappear');
  $('[name*="k-contact-field-7"]').parent().addClass('disappear');
  $('[name*="k-contact-field-2"]').change(function () {
    if ($(this).is(':checked')) {
      $('[name*="k-contact-field-6"]').parent().fadeIn('fast');
      $('[name*="k-contact-field-7"]').parent().fadeIn('fast');
    } else {
      $('[name*="k-contact-field-6"]').parent().fadeOut('fast');
      $('[name*="k-contact-field-7"]').parent().fadeOut('fast');
    }
  });

  // format contact form

  $('.form-columns').prependTo('form.k-contact-form');
  $('[name*="k-contact-field-7"]').parent().prependTo('.first-column');
  $('[name*="k-contact-field-6"]').parent().prependTo('.first-column');
  $('[name*="k-contact-field-5"]').parent().prependTo('.first-column');
  $('[name*="k-contact-field-4"]').parent().prependTo('.first-column');
  $('[name*="k-contact-field-3"]').parent().prependTo('.first-column');
  $('[name*="k-contact-field-2"]').parent().prependTo('.first-column');
  $('[name*="k-contact-field-1"]').parent().prependTo('.first-column');
  $('[name*="k-contact-field-0"]').parent().prependTo('.first-column');
  $('[name*="k-contact-field-10"]').parent().prependTo('.second-column');
  $('[name*="k-contact-field-9"]').parent().prependTo('.second-column');
  $('[name*="k-contact-field-8"]').parent().prependTo('.second-column');
  $('p.k-contact-form-success').wrap('<div class="row column" />');
  $('.k-contact-form-submit').addClass('row column');
  $('button[type="submit"]').addClass('button');

  // change social media text links to icons

  $('.footer-nav a[title*="Facebook"]').html('<svg class="icon icon-facebook"><use xlink:href="#icon-facebook"></use></svg>');
  $('.footer-nav a[title*="Instagram"]').html('<svg class="icon icon-instagram"><use xlink:href="#icon-instagram"></use></svg>');

})(jQuery);