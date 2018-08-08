$(window).on("load",function(){
  $(".dealers__show-scroll").mCustomScrollbar({
    axis:"x",
    theme:"dark"
  });
  function changeScroll(){
    if(window.innerWidth >= 768){
      $(".tab__table .table__body").mCustomScrollbar({
        axis:"x",
        theme:"dark"
      });
    }
    else{
      $(".tab__table").mCustomScrollbar({
        axis:"x",
        theme:"dark"
      });
    }
  }
    changeScroll();
  window.addEventListener("resize", function(){
    changeScroll();
  });
});
