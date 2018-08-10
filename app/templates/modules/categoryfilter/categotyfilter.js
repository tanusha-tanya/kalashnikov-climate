const filter = document.querySelector(".categoryfilter");
if(filter){
  let buttonFilter = filter.querySelector("#filter");
  let selectBlock = filter.querySelector(".categoryfilter__selectblock");
  let reset = document.createElement("button");
  reset.id = "reset";
  reset.className = "categoryfilter__reset";
  reset.textContent = "Сбросить";
  let send = document.createElement("button");
  send.id = "apply";
  send.className = "categoryfilter__apply";
  send.textContent = "Применить";

  // Кнопка с фильтром для мобилы
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

  // Меняем текст на таблетах и десктопах
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
    let arrayOfKeys = Object.keys(localStorage);
    let checkboxes = filter.querySelectorAll(".categoryfilter__popupinput")
    for(let i=0; i < arrayOfKeys.length; i++){
      if (arrayOfKeys[i].indexOf("result") !== -1){
        let checkboxValue = localStorage.getItem(arrayOfKeys[i]);
        for(let j = 0; j < checkboxes.length; j++){
          if(checkboxes[j].value === checkboxValue){
            checkboxes[j].checked = true;
          }
          localStorage.removeItem(arrayOfKeys[i]);
        }
        selectBlock.appendChild(reset);
      }
    }
    for(let i = 0; i < popups.length; i++){
      let counter = 0;
      let checkbox = popups[i].querySelectorAll('.categoryfilter__popupinput');
      for(let j = 0; j < checkbox.length; j++){
        if(checkbox[j].checked){
          counter++;
        }
      }
      if(counter > 0){
        let selectItem = popups[i].parentNode;
        let span = selectItem.querySelector('.categoryfilter__counter');
        let select = selectItem.querySelector('.categoryfilter__select');
        let svg = selectItem.querySelector('.categoryfilter__closesvg');
        span.textContent = ': '+counter;
        select.classList.add('categoryfilter__select-active');
        svg.style.display = 'block';
      }
    }
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
  });


  function selectChange(select){
    let inputs = select.parentNode.querySelectorAll(".categoryfilter__popupinput");
    let span = select.querySelector(".categoryfilter__counter");
    let close = select.querySelector(".categoryfilter__closesvg");
    let count = span.textContent !== "" ? parseInt(span.textContent.replace(/\D+/g,"")): 0;
    let popup = select.parentNode.querySelector(".categoryfilter__popup ");
    for(let i = 0; i < inputs.length; i++){
      inputs[i].addEventListener("click", function(){
        if(this.checked){
          count++;
          changeCount(count, select, span);
        }
        else{
          count--;
          changeCount(count, select, span)
        }
        if(count>=1){
          select.classList.add("categoryfilter__select-active");
          close.style.display="block";
        }
        else{
          select.classList.remove("categoryfilter__select-active");
          popup.classList.remove("categoryfilter__popup-open");
          close.style.display="none"
        }
        selectBlock.appendChild(send);
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
      let thisItem = this.parentNode.parentNode;
      let thisSelect = thisItem.querySelector(".categoryfilter__select");
      let thisPopup = thisItem.querySelector(".categoryfilter__popup");
      clearPopup(clearSelect);
    })
  };

  function clearPopup(select) {
    let popup = select.parentNode.querySelector(".categoryfilter__popup");
    let thisSelect = select.parentNode.querySelector(".categoryfilter__select");
    let inputs = popup.querySelectorAll(".categoryfilter__popupinput");
    let span = select.querySelector(".categoryfilter__counter");
    thisSelect.classList.remove("categoryfilter__select-open");
    popup.classList.remove("categoryfilter__popup-open");
    for(let i = 0; i < inputs.length; i++){
      inputs[i].checked = false;
      changeCount(0, select, span)
    }
  }

  document.body.onclick = function(event){
    if(!event.target.closest(".categoryfilter__selectitem")){
      for(let i = 0; i < select.length; i++){
        select[i].classList.remove("categoryfilter__select-open");
      }
      for(let i = 0; i < popups.length; i++){
        popups[i].classList.remove("categoryfilter__popup-open");
      }
    }
  }

  let result = [];
  send.onclick = function(){
    for(let i = 0; i < popups.length; i++){
      let checkbox = popups[i].querySelectorAll('.categoryfilter__popupinput');
      for(let j = 0; j < checkbox.length; j++){
        if(checkbox[j].checked){
          result.push(checkbox[j].value);
        }
      }
    }
    for(let i = 0; i < result.length; i++){
      localStorage.setItem('result'+[i], result[i]);
    }

    let url = window.location.toString().split("?")[0];
    window.location = result.length > 0? url +"?"+result.join("+"): url;
  }

  reset.onclick = function(){
    for(let i = 0; i < popups.length; i++){
      let checkbox = popups[i].querySelectorAll('.categoryfilter__popupinput');
      for(let j = 0; j < checkbox.length; j++){
        checkbox[j].checked = false;
      }
    }
    let url = window.location.toString().split("?")[0];
    window.location = url;
  }
}
