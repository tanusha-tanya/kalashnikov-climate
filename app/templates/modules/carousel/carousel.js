$( document ).ready(function() {
 $(".carousel__items").owlCarousel({
  autoWidth:true,
  dots: false,
  margin: 20,
  responsive:{
    0:{
       items:2
    },
    768:{
     items:2
    },
    1120:{
     items:2
    }
   }
 });
});
