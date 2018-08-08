const result = document.querySelector(".result");
if(result){
  let resultTitle = result.querySelector("h2");
  let dataText, actuallyText;
    actuallyText = resultTitle.textContent;
    if(resultTitle.dataset.text !== undefined){
      dataText = resultTitle.dataset.text
    }
    else{
      dataText = resultTitle.textContent
    }

  function changeText(){
    if(window.innerWidth >= 768){
      resultTitle.textContent = dataText;
    }
    else{
        resultTitle.textContent = actuallyText;
    }
  }
  changeText()
  window.addEventListener("resize", function(){
      changeText();
  });

  let arrow = result.querySelectorAll(".spoilarrow");
  for(let i = 0; i < arrow.length; i++){
    arrow[i].addEventListener("click", function(){
      let item = this.closest(".result__item");
      let spoiler = item.querySelector(".result__spoiler");
      if(spoiler.classList.contains("result__spoiler-open")){
        spoiler.classList.remove("result__spoiler-open")
      }
      else{
        spoiler.classList.add("result__spoiler-open")
      }
    })
  }
}
