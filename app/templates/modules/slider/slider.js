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
  owl.on('changed.owl.carousel', function(event) {
    changeCount()
  });
  let items = $('.owl-item:not(.cloned)'),
      total = items.length,
      current;
  (total<10)?
  $('.count__amount-total').text("0" + total):
  $('.count__amount-total').text(total);
  function changeCount(){
    for(let i = 0; i < total; i++){
      if($(items[i]).hasClass('active')){
        current = i + 1;
      }
    }
    (current<10)?
    $('.count__amount-current').text("0" + current):
    $('.count__amount-current').text(current);
  }
});
