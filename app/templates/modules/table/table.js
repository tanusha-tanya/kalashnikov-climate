const tabTable = document.querySelector('.tab__table');
const dealersTable = document.querySelector('.dealers__show-scroll');
$(window).on("load",function(){
  if(dealersTable){
    $(".dealers__show-scroll").mCustomScrollbar({
      axis:"x",
      theme:"dark",
      disable: false
    });
  }
  if(tabTable){
  function changeScroll(){
    if(window.innerWidth >= 768){
      $(".tab__table").mCustomScrollbar("disable",true);
      $(".table__body").mCustomScrollbar({
        axis:"x",
        theme:"dark",
        disable: false,
        documentTouchScroll: true
      });
    }
    else{
      $(".table__body").mCustomScrollbar("disable",true);
      $(".tab__table").mCustomScrollbar({
        axis:"x",
        theme:"dark",
        disable: false
      });
    }
  }
    changeScroll();
  window.addEventListener("resize", function(){
    changeScroll();
  });
}
});
