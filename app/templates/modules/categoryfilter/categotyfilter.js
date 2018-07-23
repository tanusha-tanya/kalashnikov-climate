const filter = document.querySelector(".categoryfilter");
if(filter){
  let all =  filter.querySelector(".categoryfilter__input-all");
  let buttonFilter =  filter.querySelector(".categoryfilter__input-filter");
  let labelAll = all.parentNode;
  let labelFilter = buttonFilter.parentNode;
  buttonFilter.onchange = function(){
    if(this.checked){
      all.checked = false;
      labelFilter.classList.add("categoryfilter__button-active");
      labelAll.classList.remove("categoryfilter__button-active");
      filterOpen()
    }
    else{
      filterClose()
    }
  }
  all.onchange= function(event){
    if(this.checked){
      buttonFilter.checked = false;
      labelAll.classList.add("categoryfilter__button-active");
      labelFilter.classList.remove("categoryfilter__button-active");
      filterClose()
    }
    else{
      event.preventDefault();
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
  })
}

function filterOpen(){
  let hideButons = filter.querySelectorAll(".categoryfilter__button-hide");
  let select = filter.querySelector(".categoryfilter__selectblock-hide");
  select.classList.remove("categoryfilter__selectblock-hide");
  select.classList.add("categoryfilter__selectblock-show");
  for(let i = 0; i < hideButons.length; i++){
    hideButons[i].classList.remove("categoryfilter__button-hide");
    hideButons[i].classList.add("categoryfilter__button-show");
  }
  buttonsClick();
  selectOpen();
}

function filterClose(){
  let hideButons = filter.querySelectorAll(".categoryfilter__button-show");
  let select = filter.querySelector(".categoryfilter__selectblock-show");
  select.classList.remove("categoryfilter__selectblock-show");
  select.classList.add("categoryfilter__selectblock-hide");
  for(let i = 0; i < hideButons.length; i++){
    hideButons[i].classList.remove("categoryfilter__button-show");
    hideButons[i].classList.add("categoryfilter__button-hide");
  }
}

function buttonsClick(){
  let input = filter.querySelectorAll(".categoryfilter__input");
  for(let i=0; i < input.length; i++){
    input[i].addEventListener('change', function(){
      let label = this.parentNode;
      this.checked?
      label.classList.add("categoryfilter__button-active"):
      label.classList.remove("categoryfilter__button-active")
    })
  }
}

function selectOpen(){
  let selectBlock = filter.querySelector(".categoryfilter__selectblock");
  let select = selectBlock.querySelectorAll(".categoryfilter__select");
  let popups =  selectBlock.querySelector('.categoryfilter__popup');
  for(let i=0; i < select.length; i++){
    select[i].addEventListener('click', function(){
      let selectitem = this.parentNode;
      let popup = selectitem.querySelector('.categoryfilter__popup');
      selectChange(this);
      if(popup.classList.contains('categoryfilter__popup-open')){
        popup.classList.remove('categoryfilter__popup-open');
        this.classList.remove(".categoryfilter__select-open")
      }
      else{
        for(let i=0; i < popups.length; i++){
          popups[i].remove('categoryfilter__popup-open');
        }
        popup.classList.add('categoryfilter__popup-open');
        this.classList.add(".categoryfilter__select-open");
      }
    })
  }
}

function selectChange(select){
  let inputs = select.parentNode.querySelectorAll(".categoryfilter__popupinput");
  let count = 0;
  let span = select.querySelector("span");
  let text = span.textContent;
  for(let i=0; i < inputs.length; i++){
    inputs[i].addEventListener("change", function(){
      if(inputs[i].checked){
        count++;
      }
      if(!inputs[i].checked){
        count--;
      }
      if(count > 0){
        span.textContent = text + ": " + count;
        select.classList.add("categoryfilter__select-active")
      }
      else{
        select.classList.remove("categoryfilter__select-active")
        span.textContent = text
      }
    })
  }
}
