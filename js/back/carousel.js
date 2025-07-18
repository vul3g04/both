$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    nav: true,
    loop: true,
    margin: 1,
    lazyLoad: true,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 1.15
      }
    }
  });
});
