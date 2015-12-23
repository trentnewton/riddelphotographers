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

// start foundation

$(document).foundation();

// hamburger icon animation

$(function() {
  "use strict";

  $('.hamburger').on('click', function() {
    $(this).toggleClass('open');
  });

  $('.js-off-canvas-exit').on('click', function() {
    $('.hamburger').toggleClass('open');
  });

});

// scroll to sections

$(function() {
  "use strict";

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
});

// home page sliding content

$(function() {
  "use strict";

  $('#weddings .main-slide a').on('click', function(){
      $('#weddings .slides-container').addClass('slide-on');
  });

  $('#weddings .back-link a').on('click', function(){
      $('#weddings .slides-container').removeClass('slide-on');
  });

  $('#engagements .main-slide a').on('click', function(){
      $('#engagements .slides-container').removeClass('slide-on');
  });

  $('#engagements .back-link a').on('click', function(){
      $('#engagements .slides-container').addClass('slide-on');
  });

  $('#families .main-slide a').on('click', function(){
      $('#families .slides-container').addClass('slide-on');
  });

  $('#families .back-link a').on('click', function(){
      $('#families .slides-container').removeClass('slide-on');
  });

  $('#personal .main-slide a').on('click', function(){
      $('#personal .slides-container').removeClass('slide-on');
  });

  $('#personal .back-link a').on('click', function(){
      $('#personal .slides-container').addClass('slide-on');
  });

});

// Initialize masonry grid

$(window).on('load', function(){
  "use strict";

  // init Masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
  });

  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });

});


	