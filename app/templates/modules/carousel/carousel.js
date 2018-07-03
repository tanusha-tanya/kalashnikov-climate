$( document ).ready(function() {
 $(".carousel__items").owlCarousel({
  autoWidth:true,
  dots: false,
  nav: false,
  margin: 20,
  responsive:{
    0:{
       items:2
    },
    768:{
     items:2
    },
    1120:{
     items:5,
     margin: 30
   },
   2000:{
    items:5,
    margin: 30,
    loop:true
   }
   }
 });
});
