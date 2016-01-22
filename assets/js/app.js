// creat class for viewport measurements

new vUnit({
  CSSMap: {
    // The selector (VUnit will create rules ranging from .selector1 to .selector100)
    '.vh_height': {
      // The CSS property (any CSS property that accepts px as units)
      property: 'height',
      // What to base the value on (vh, vw, vmin or vmax)
      reference: 'vh'
    }
  },
}).init(); // call the public init() method

(function($) {

  "use strict";

  // start foundation

  $(document).foundation();

  $(document).ready(function() {
    $(".animsition").animsition({
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
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    });
  });

  // hamburger icon animation

  $('.hamburger').on('click', function() {
    $(this).toggleClass('active');
  });

  $('.js-off-canvas-exit').on('click', function() {
    $('.hamburger').toggleClass('active');
  });

  // slick slider for home page

  $(document).ready(function(){

    $('.gallery-main').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true
    });

    // detect portrait photos and add class

    $('.image-items-list').find('img').each(function(i,elem){
      var $this = $(this),
          ratio = $this.width() / $this.height();

      $this.addClass((ratio < 1) ? 'portrait' : 'landscape');
    });

  });

  // scroll to sections

  $('a[href*=#]:not([href=#])').click(function() {
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

  $('#weddings .main-slide .gallery-trigger').on('click', function(){
    $('#weddings .gallery-container').toggleClass('mover-over');
    $('#weddings .main-background').fadeToggle(1000);
    $('#weddings .main-title').fadeToggle(1000);
  });

  $('#engagements .main-slide .gallery-trigger').on('click', function(){
    $('#engagements .gallery-container').toggleClass('mover-over');
    $('#engagements .main-background').fadeToggle(1000);
    $('#engagements .main-title').fadeToggle(1000);
  });

  $('#families .main-slide .gallery-trigger').on('click', function(){
    $('#families .gallery-container').toggleClass('mover-over');
    $('#families .main-background').fadeToggle(1000);
    $('#families .main-title').fadeToggle(1000);
  });

  $('#personal .main-slide .gallery-trigger').on('click', function(){
    $('#personal .gallery-container').toggleClass('mover-over');
    $('#personal .main-background').fadeToggle(1000);
    $('#personal .main-title').fadeToggle(1000);
  });

  // trigger extra fields for contact form

  $('#k-contact-form-19c2105d7fabb39e6dced86cb0563667-k-contact-field-6').parent().addClass( "disappear" );
  $('#k-contact-form-19c2105d7fabb39e6dced86cb0563667-k-contact-field-7').parent().addClass( "disappear" );

  $('#k-contact-form-19c2105d7fabb39e6dced86cb0563667-k-contact-field-2').change(function(){
    if($(this).is(":checked")) {
      $('#k-contact-form-19c2105d7fabb39e6dced86cb0563667-k-contact-field-6').parent().addClass("show");
      $('#k-contact-form-19c2105d7fabb39e6dced86cb0563667-k-contact-field-7').parent().addClass("show");
    } else {
      $('#k-contact-form-19c2105d7fabb39e6dced86cb0563667-k-contact-field-6').parent().removeClass("show");
      $('#k-contact-form-19c2105d7fabb39e6dced86cb0563667-k-contact-field-7').parent().removeClass("show");
    }
  });

})(jQuery);
	