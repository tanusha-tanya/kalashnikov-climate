const result = document.querySelector(".result");
if(result){
  let resultTitle = result.querySelector("h2");
  let dataText, actuallyText;
    console.log(resultTitle.textContent)
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
    })
}
