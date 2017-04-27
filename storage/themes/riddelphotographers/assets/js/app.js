/* global vUnit */
/* global jQuery */

// create class for viewport measurements

new vUnit({
  CSSMap: {
    // The selector (VUnit will create rules ranging from .selector1 to .selector100)
    '.vh_height': {
      // The CSS property (any CSS property that accepts px as units)
      property: 'height',
      // What to base the value on (vh, vw, vmin or vmax)
      reference: 'vh'
    },
    '.vh_min-height': {
      // The CSS property (any CSS property that accepts px as units)
      property: 'min-height',
      // What to base the value on (vh, vw, vmin or vmax)
      reference: 'vh'
    }
  }
}).init(); // call the public init() method

// jquery functions

(function ($){

  'use strict';

  // start foundation

  $(document).foundation();

  // get album name for login page

  var loginUrl = document.location.href.indexOf('login/?return_to=%2Falbums') > -1;
  var albumName = document.location.href.substring(document.location.href.indexOf('login/?return_to=%2Falbums%2F') + 1).replace('ogin/?return_to=%2Falbums%2F', '');
  albumName = albumName.replace(/%2F&album=.*$/i, '').replace(/\-/g, ' ').replace(/\d+/g, '').replace(/\s*$/, '');

  function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function (match) {
      return match.toUpperCase();
    });
  }

  if (loginUrl) {
    $('.k-lens-login .page-title-container').append('<h1 class="page-title" itemprop="headline">&#xe00c;' + toTitleCase(albumName) + '&#xe013;</h1>');
  }

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

  // detect album parent set and add active class to corresonding link

  var setId = $('.gallery-page').attr('id');

  if (setId) {
    $('.k-nav-root a[title="' + setId + '"]').addClass('k-nav-current');
  }

  // disable sumbit button on login form until something is entered

  $('input[type="password"]').keyup(function () {
    $('button[type="submit"]').attr('disabled', !$(this).val().length);
  }).trigger('keyup');

  // hamburger icon animation

  $('#offCanvasRight').bind('opened.zf.offcanvas closed.zf.offcanvas', function () {
    $('.hamburger, .side-nav').toggleClass('active');
  });

  $(window).bind('load', function () {

    // detect portrait photos and add class

    $('img[alt*="portrait"]').parent('.image-item').addClass('portrait');
    $('img[alt*="landscape"]').parent('.image-item').removeClass('ratio-0\.666').removeClass('ratio-0\.667');

    // add animation class when in viewport

    $('.main-front-page-header .menu').addClass('active');

    $('.content p, form fieldset').bind('inview', function (event, visible) {
      if (visible === true) {
        // element is now visible in the viewport
        $(this).addClass('moveInUp');
      }
    });

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
    $('#Weddings .main-background, #Weddings .main-title').fadeToggle(1000);
    return false;
  });

  $('#Engagements .main-slide .gallery-trigger').on('click', function () {
    $('#Engagements .gallery-container').toggleClass('mover-over');
    $('#Engagements .main-background, #Engagements .main-title').fadeToggle(1000);
    return false;
  });

  $('#Families .main-slide .gallery-trigger').on('click', function () {
    $('#Families .gallery-container').toggleClass('mover-over');
    $('#Families .main-background, #Families .main-title').fadeToggle(1000);
    return false;
  });

  $('#Personal .main-slide .gallery-trigger').on('click', function () {
    $('#Personal .gallery-container').toggleClass('mover-over');
    $('#Personal .main-background, #Personal .main-title').fadeToggle(1000);
    return false;
  });

  // get url from image in page content and use as a background

  $(function () {
    var dataBase = $('.split-boxes .k-content-embed .k-content img').attr('data-base');
    var dataExtension = $('.split-boxes .k-content-embed .k-content > img').attr('data-extension');
    $('div.split-page-bg').css('background-image', 'url(' + dataBase + 'xlarge.' + dataExtension + ')');
    $('.split-boxes .k-content-embed .k-content img').parent().parent().remove();
  });

  // trigger extra fields for contact form

  $('[name*="k-contact-field-6"], [name*="k-contact-field-7"]').parent().addClass('disappear');
  $('[name*="k-contact-field-2"]').change(function () {
    if ($(this).is(':checked')) {
      $('[name*="k-contact-field-6"], [name*="k-contact-field-7"]').parent().fadeIn('fast');
    } else {
      $('[name*="k-contact-field-6"], [name*="k-contact-field-7"]').parent().fadeOut('fast');
    }
  });

  // format contact form

  $('.form-columns').prependTo('form.k-contact-form');
  $('[name="k-contact-field-7"], [name="k-contact-field-6"], [name="k-contact-field-5"], [name="k-contact-field-4"], [name="k-contact-field-3"], [name="k-contact-field-2"], [name="k-contact-field-1"], [name="k-contact-field-0"]').parent().prependTo('.first-column');
  $('[name="k-contact-field-10"], [name="k-contact-field-9"], [name="k-contact-field-8"]').parent().prependTo('.second-column');
  $('p.k-contact-form-success').wrap('<div class="small-12" itemprop="text"></div>');
  $('.k-contact-form-submit').addClass('row column');
  $('button[type="submit"]').addClass('button');

  // change social media text links to icons

  $('.footer-nav a[title*="Facebook"]').html('<svg class="icon icon-facebook"><use xlink:href="#icon-facebook"></use></svg>');
  $('.footer-nav a[title*="Instagram"]').html('<svg class="icon icon-instagram"><use xlink:href="#icon-instagram"></use></svg>');

})(jQuery);