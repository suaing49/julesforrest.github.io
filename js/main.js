$(document).ready(function() {
  setTimeout(function() {
    var headerHeight = $('.nav--container').outerHeight();
    $('.arrow--container').css("padding-top", headerHeight);
    $('.arrow--container').css("opacity", "1");
  }, 100);
});

$(window).scroll(function() {
  var windowHeight = $(window).height();
  var pageHeight = $(document).outerHeight();
  var footerHeight = $('.site-footer').outerHeight();
  var scrollBottom = $(window).scrollTop() + $(window).height();

  if ($(this).scrollTop() > windowHeight) {
    $('.homepage .nav--container').fadeIn(300);
  } else {
    $('.homepage .nav--container').fadeOut(300);
  }

  if (scrollBottom + footerHeight > pageHeight) {
    var margin = pageHeight - (footerHeight + scrollBottom);
    $('.arrow').css({"margin-top": margin});
  } else {
    $('.arrow').css({"margin-top": 0});
  }

});


var main = function() {
  $('.mobile-menu').click(function() {
    $('.desktop-menu').slideToggle(300);
  });

  $('.mobile-menu-items').click(function() {
    $('.desktop-menu').slideUp(300);
  });

  $(window).resize(function(){
  	if(window.outerWidth > 590) {
  		$('.desktop-menu').removeAttr("style");
  	}
  });
}

$(document).ready(main);
