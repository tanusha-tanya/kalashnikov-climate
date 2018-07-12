const tabBtn = document.querySelectorAll(".tab__button");
const tabInfo = document.querySelectorAll(".tab__info");
if(tabBtn){
  for(let i = 0; i < tabBtn.length; i++){
    tabBtn[i].addEventListener("click", function(){
      clearTab(tabBtn, "button");
      clearTab(tabInfo, "info");
      addTab(tabBtn[i], "button");
      addTab(tabInfo[i], "info");
    })
  };
}

function clearTab(actived, type){
  for(let i = 0; i < actived.length; i++){
    if (actived[i].classList.contains("tab__"+type+"-active")){
      actived[i].classList.remove("tab__"+type+"-active")
    }
  }
}
function addTab(el, type){
  el.classList.add("tab__"+type+"-active");
}

$(window).on("load",function(){
  $(".tab__table, .dealers__show-scroll").mCustomScrollbar({
    axis:"x",
    theme:"dark"
  });
});
