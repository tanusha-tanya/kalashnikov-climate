const question = document.querySelectorAll(".category__param-question");
if(question){
  for(let i = 0; i < question.length; i++){
    question[i].addEventListener("click", function(){
      for(let j = 0; j < question.length; j++){
        let spoil = question[j].querySelector(".category__spoiltext");
        spoil.classList.remove("open");
      }
      let spoiltext = this.querySelector(".category__spoiltext");
      spoiltext.classList.add("open");
    })
  }
}
