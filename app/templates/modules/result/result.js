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

  let resultItem = result.querySelectorAll(".result__item");
  for(let i = 0; i < resultItem.length; i++){
    let arrow = resultItem[i].querySelector(".spoilarrow")
    arrow.addEventListener("click", function(){
      let spoiler = resultItem[i].querySelector(".result__spoiler");
      if(spoiler.classList.contains("result__spoiler-open")){
        spoiler.classList.remove("result__spoiler-open")
      }
      else{
        spoiler.classList.add("result__spoiler-open")
      }
    })
  }
}
