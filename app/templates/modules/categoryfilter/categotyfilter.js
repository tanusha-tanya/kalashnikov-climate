const filter = document.querySelector(".categoryfilter");
if(filter){
  let buttonFilter = filter.querySelector("#filter");
  let selectBlock = filter.querySelector(".categoryfilter__selectblock");
  let reset = document.createElement("div");
  reset.id = "reset";
  reset.className = "categoryfilter__reset";
  reset.textContent = "Сбросить";

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

  let select = filter.querySelectorAll('.categoryfilter__select');
  let popups =  filter.querySelectorAll('.categoryfilter__popup');

  document.addEventListener('DOMContentLoaded', function(){
    for(let i = 0; i < popups.length; i++){
      let counter = 0;
      let checkbox = popups[i].querySelectorAll('.categoryfilter__popupinput');
      for(let j = 0; j < checkbox.length; j++){
        if(checkbox[j].checked){
          counter++;
        }
      }
      if(counter > 0){
        let selectItem = popups[i].closest('.categoryfilter__selectitem');
        let span = selectItem.querySelector('.categoryfilter__counter');
        let select = selectItem.querySelector('.categoryfilter__select');
        let svg = selectItem.querySelector('.categoryfilter__closesvg');
        span.textContent = ': '+counter;
        select.classList.add('categoryfilter__select-active');
        svg.style.display = 'block';
      }
    }
  });

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
    let count = span.textContent !== "" ? parseInt(span.textContent.replace(/\D+/g,"")): 0;
    let popup = select.closest(".categoryfilter__selectitem").querySelector(".categoryfilter__popup ")
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
          select.classList.add("categoryfilter__select-active");
          close.style.display="block";
          selectBlock.appendChild(reset);
        }
        else{
          select.classList.remove("categoryfilter__select-active");
          popup.classList.remove("categoryfilter__popup-open");
          close.style.display="none"
        }
      })
    }
  }
  function  changeCount(count, select, span){
    let close = select.querySelector('.categoryfilter__closesvg');
    span.textContent = "";
    span.textContent = ": "+count;
    if(count <= 0){
      span.textContent = "";
      select.classList.remove("categoryfilter__select-active");
      close.style.display = "none";
    }
    else{
      return
    }
  }

  let closeBtn =  filter.querySelectorAll('.categoryfilter__closesvg');
  for(let i = 0; i < closeBtn.length; i++){
    closeBtn[i].addEventListener("click", function(){
      let clearSelect = this.parentNode;
      clearPopup(clearSelect);
    })
  };

  function clearPopup(select) {
    let popup = select.parentNode.querySelector(".categoryfilter__popup");
    let inputs = popup.querySelectorAll(".categoryfilter__popupinput");
    let span = select.querySelector(".categoryfilter__counter")
    for(let i = 0; i < inputs.length; i++){
      inputs[i].checked = false;
      changeCount(0, select, span)
    }
  }

  document.body.addEventListener("click", function(event){
    if(!event.target.closest(".categoryfilter__selectitem")){
      for(let i = 0; i < select.length; i++){
        select[i].classList.remove("categoryfilter__select-open");
      }
      for(let i = 0; i < popups.length; i++){
        popups[i].classList.remove("categoryfilter__popup-open");
      }
    }
  })

}
