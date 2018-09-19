const question = document.querySelectorAll(".category__param-question");
if(question){
function questionPopup(){
  let close = document.createElement("div");
  close.className = "close";
  for(let i = 0; i < question.length; i++){
    question[i].addEventListener("click", function(e){
      if(e.target === close){
        let parent = close.parentNode;
        parent.classList.remove("open");
        parent.removeChild(close);
      }
      else{
        let spoil = document.querySelectorAll(".category__spoiltext");
          for (var j = 0; j < spoil.length; j++) {
            spoil[j].classList.remove("open");
          }
        let spoiltext = this.querySelector(".category__spoiltext");
        spoiltext.classList.add("open");
        spoiltext.appendChild(close);
      }
    })
  }
}
if(window.innerWidth >= 768){
  questionPopup()
}
window.addEventListener("resize", function(){
  if(window.innerWidth >= 768){
    questionPopup()
  }
});
}
