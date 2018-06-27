$(window).scroll(function(){
  if($(window).scrollTop() >= $(window).height()){
    $(".up").addClass("fixedUp")
    if($(window).scrollTop() >= $(document).height() - $(window).height()){
      $(".up").removeClass("fixedUp")
    }
  }
  else{
    $(".up").removeClass("fixedUp")
  }
});
$('.up').on("click", function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});
