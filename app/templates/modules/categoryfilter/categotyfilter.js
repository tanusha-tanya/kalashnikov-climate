const filter = document.querySelector(".categoryfilter");
if(filter){
  let buttonFilter = filter.querySelector("#filter");
  buttonFilter.onchange = function(){
    let catsHide = filter.querySelectorAll(".categoryfilter__button-hide");
    let selectHide = filter.querySelectorAll(".categoryfilter__selectblock-hide");
    let catsShow = filter.querySelectorAll(".categoryfilter__button-show");
    let selectShow = filter.querySelectorAll(".categoryfilter__selectblock-show");
    if(this.checked){
      for(let i = 0; i < catsHide.length; i++){
        catsHide[i].classList.remove("categoryfilter__button-hide");
        catsHide[i].classList.add("categoryfilter__button-show");
      };
      for(let i = 0; i < selectHide.length; i++){
        selectHide[i].classList.remove("categoryfilter__selectblock-hide");
        selectHide[i].classList.add("categoryfilter__selectblock-show");
      }
    }
    else{
      for(let i = 0; i < catsShow.length; i++){
        catsShow[i].classList.remove("categoryfilter__button-show");
        catsShow[i].classList.add("categoryfilter__button-hide");
      };
      for(let i = 0; i < selectShow.length; i++){
        selectShow[i].classList.remove("categoryfilter__selectblock-show");
        selectShow[i].classList.add("categoryfilter__selectblock-hide");
      }
    }
  }
  let dataText = [], actuallyText = [];
  let labelSpan = document.querySelectorAll(".categoryfilter__button span");

  for(let i = 0; i < labelSpan.length; i++){
    actuallyText.push(labelSpan[i].textContent)
    if(labelSpan[i].dataset.text !== undefined){
      dataText.push(labelSpan[i].dataset.text)
    }
    else{
      dataText.push(labelSpan[i].textContent)
    }
  }

  function changeText(){
    if(window.innerWidth >= 768){
      for(let i = 0; i < labelSpan.length; i++){
        labelSpan[i].textContent = dataText[i];
      }
    }
    else{
      for(let i = 0; i < labelSpan.length; i++){
        labelSpan[i].textContent = actuallyText[i];
      }
    }
  }
  changeText()
  window.addEventListener("resize", function(){
    changeText();
  });

  let select = filter.querySelectorAll(".categoryfilter__select");
  let popups =  filter.querySelectorAll('.categoryfilter__popup');

  for(let i=0; i < select.length; i++){
    select[i].addEventListener('click', function(){
      let selectitem = this.parentNode;
      let popup = selectitem.querySelector('.categoryfilter__popup');
      if(popup.classList.contains('categoryfilter__popup-open')){
        popup.classList.remove('categoryfilter__popup-open');
        this.classList.remove('categoryfilter__select-open');
      }
      else{
        for(let j=0; j < popups.length; j++){
          popups[j].classList.remove('categoryfilter__popup-open');
          select[j].classList.remove('categoryfilter__select-open');
        }
        popup.classList.add('categoryfilter__popup-open');
        this.classList.add('categoryfilter__select-open');
        selectChange(this);
      }
    })
  }

  function selectChange(select){
    let inputs = select.parentNode.querySelectorAll(".categoryfilter__popupinput");
    let span = select.querySelector(".categoryfilter__counter");
    let close = select.querySelector(".categoryfilter__closesvg");
    let count = span.textContent !== "" ? span.textContent - 1: 0;
    for(let i=0; i < inputs.length; i++){
      inputs[i].addEventListener("change", function(){
        if(this.checked){
          count++;
          changeCount(count, select, span)
        }
        else{
          count--;
          changeCount(count, select, span)
        }
        if(count>=1){
          select.classList.add("categoryfilter__select-active")
        }
        else{
          select.classList.remove("categoryfilter__select-active")
        }
      })
    }
  }
  function  changeCount(count, select, span){
    span.textContent = "";
    span.textContent = " :"+count;
    if(count <= 0){
      span.textContent = "";
    }
  }
}
