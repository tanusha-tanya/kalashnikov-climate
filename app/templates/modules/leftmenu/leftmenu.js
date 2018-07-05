const leftmenuButton = document.querySelectorAll(".leftmenu__svg")
if (leftmenuButton){
  for(let i = 0; i < leftmenuButton.length; i++){
    leftmenuButton[i].addEventListener("click", function(){
      let span = this.parentElement.parentElement;
      span.classList.toggle("leftmenu__opencat")
    })
  }
}
