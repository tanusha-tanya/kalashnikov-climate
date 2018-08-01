const leftmenuButton = document.querySelectorAll(".leftmenu__arrow")
if (leftmenuButton){
  for(let i = 0; i < leftmenuButton.length; i++){
    leftmenuButton[i].addEventListener("click", function(){
      let span = this.parentElement.parentElement;
      let insidecats = span.querySelector(".leftmenu__insidecats");
      let insidecat = insidecats.querySelectorAll(".leftmenu__insidecat");
      if(span.classList.contains("leftmenu__opencat")){
        span.classList.add("leftmenu__closecat");
        setTimeout(function(){
          span.classList.remove("leftmenu__opencat");
        }, 300)
      }
      else{
        span.classList.add("leftmenu__opencat");
        setTimeout(function(){
          span.classList.remove("leftmenu__closecat");
        }, 300)
      }
    })
  }
}
