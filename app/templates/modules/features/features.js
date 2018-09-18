const featuresQuestion = document.querySelectorAll(".features__param-question");
if(featuresQuestion){
function questionPopup(){
  let close = document.createElement("div");
  close.className = "close";
  for(let i = 0; i < featuresQuestion.length; i++){
    featuresQuestion[i].addEventListener("click", function(e){
      if(e.target === close){
        let parent = close.parentNode;
        parent.classList.remove("open");
        parent.removeChild(close);
      }
      else{
        for(let j = 0; j < featuresQuestion.length; j++){
          let spoil = featuresQuestion[j].querySelector(".features__spoiltext");
          spoil.classList.remove("open");
        }
        let spoiltext = this.querySelector(".features__spoiltext");
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
