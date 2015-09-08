$(window).scroll(function() {
  var headerHeight = $(window).height();

  if ($(this).scrollTop() > headerHeight) {
    $('.homepage .nav--container').fadeIn(300);
  } else {
    $('.homepage .nav--container').fadeOut(300);
  }
});
