$( document ).ready(function() {
 $(".carousel__items").owlCarousel({
  center: true,
  autoWidth:true,
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
