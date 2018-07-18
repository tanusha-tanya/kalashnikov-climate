const leftmenuButton = document.querySelectorAll(".leftmenu__svg")
if (leftmenuButton){
  for(let i = 0; i < leftmenuButton.length; i++){
    leftmenuButton[i].addEventListener("click", function(){
      let span = this.parentElement.parentElement;
      let height = 0;
      let insidecats = span.querySelector(".leftmenu__insidecats");
      let insidecat = insidecats.querySelectorAll(".leftmenu__insidecat");
      for(let i = 0; i < insidecat.length; i++){
        height+= insidecat[i].offsetHeight;
        console.log(insidecat[i])
      }
      insidecats.style.height = height+"px";
      span.classList.toggle("leftmenu__opencat");
    })
  }
}
