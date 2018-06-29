$( document ).ready(function() {
  let owl =  $(".slider__items");
  owl.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navContainer: '.flipping',
    navElement: 'div class="flipping__arrow"',
    navText: ['<svg class="flipping__svg" role="img" width="20" height="10"> <use xlink:href="#sliderarrow"></svg>', '<svg class="flipping__svg" role="img" width="20" height="10"> <use xlink:href="#sliderarrow"></svg>'],
    responsive:{
        0:{
            items:1
        },
        1220:{
            items:2,
            center:true,
            margin: 30
        }
    }
  });

  let items = $('.slider .owl-item:not(.cloned)'),
      total = items.length,
      current;
  (total<10)?
  $('.count__amount-total').text("0" + total):
  $('.count__amount-total').text(total);

  owl.on('changed.owl.carousel', function(event) {
    current = event.item.index - 1;
    console.log(current)
    changeCurrent(current)
  });

  function changeCurrent(current){
    if(current === 0){
      console.log("current = 0")
      current = total;
      console.log(current)
    }
    (current<10)?
    $('.count__amount-current').text("0" + current):
    $('.count__amount-current').text(current);
  }
});
