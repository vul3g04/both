$(window).on('load', function () {
  $('.la-square-loader').fadeOut('slow');
  $('#loading').fadeOut('slow');
  $('.fade01').hide(0).delay(3000).fadeIn(600, 'easeInOutCubic');
  $('.fade02').hide(0).delay(3200).fadeIn(600, 'easeInOutCubic');
  $('.fade03').hide(0).delay(3400).fadeIn(1000, 'easeInOutCubic');
  $('.fade04').hide(0).delay(4000).fadeIn(1600, 'easeInOutCubic');
  $('.fade05').hide(0).delay(4600).fadeIn(600, 'easeInOutCubic');
});
