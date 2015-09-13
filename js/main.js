$(window).scroll(function() {
  var windowHeight = $(window).height();
  var pageHeight = $(document).outerHeight();
  var footerHeight = $('.site-footer').outerHeight();
  var scrollBottom = $(window).scrollTop() + $(window).height();
  var headerHeight = $('.nav--container').height();

  $('.arrow--container').css("padding-top", headerHeight);

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
