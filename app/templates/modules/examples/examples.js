$(document).ready(function () {
  var owl = $(".examples__carousel");
  owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
        autoWidth: true
      },
      1220: {
        items: 2,
        center: true,
        margin: 30,
        autoWidth: true
      }
    }
  })
});
