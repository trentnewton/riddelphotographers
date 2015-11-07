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

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


// hamburger icon animation

$(function() {
	$(".right-off-canvas-toggle, .exit-off-canvas").click(function() {
    	$(".top-bar").toggleClass("top-bar-close");
		$(".middle-bar").toggleClass("middle-bar-close");
		$(".bottom-bar").toggleClass("bottom-bar-close");
  	});
});


// scroll to sections

$(function() {
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

// animate elements when in the viewport

function showOverlay() {   
  $('div.overlay').onScreen({
    doIn: function() {
      $(this).animate({
        opacity: 1
      },800);
    },
    doOut: function() {
      $(this).animate({
        opacity: 0
      },800);
    },
    tolerance: 290
  });
}


// Document ready

$(function() {
  showOverlay();
});