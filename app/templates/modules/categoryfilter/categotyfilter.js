const filter = document.querySelector(".categoryfilter");
if(filter){
/*  let buttonFilter =  filter.querySelector(".categoryfilter__input-filter");
  let catsHide = filter.querySelectorAll(".categoryfilter__button-hide");
  let catsShow = filter.querySelectorAll(".categoryfilter__button-hide");
  let selectBlock = filter.querySelector(".categoryfilter__selectblock");
  buttonFilter.onchange = function(){
    if(this.checked){
      this.parentNode.classList.add("categoryfilter__button-active");
      selectBlock.classList.remove("categoryfilter__selectblock-hide");
      selectBlock.classList.add("categoryfilter__selectblock-show");
      for(let i = 0; i < catsHide.length; i++){
      catsHide[i].classList.add("categoryfilter__button-show");
      catsHide[i].classList.remove("categoryfilter__button-hide");
      }
    }
    else{
      this.parentNode.classList.remove("categoryfilter__button-active");
      selectBlock.classList.remove("categoryfilter__selectblock-show");
      selectBlock.classList.add("categoryfilter__selectblock-hide");
      for(let i = 0; i < catsShow.length; i++){
      catsShow[i].classList.add("categoryfilter__button-hide");
      catsShow[i].classList.remove("categoryfilter__button-show");
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
  })
  let select = selectBlock.querySelectorAll(".categoryfilter__select");
  let popups =  selectBlock.querySelectorAll('.categoryfilter__popup');
  for(let i=0; i < select.length; i++){
    select[i].addEventListener('click', function(){
      let selectitem = this.parentNode;
      let popup = selectitem.querySelector('.categoryfilter__popup');
      selectChange(this);
      if(popup.classList.contains('categoryfilter__popup-open')){
        popup.classList.remove('categoryfilter__popup-open');
        this.classList.remove('categoryfilter__select-open');
        selectChange(this)
      }
      else{
        console.log(popups);
        for(let j=0; j < popups.length; j++){
          popups[j].classList.remove('categoryfilter__popup-open');
          select[j].classList.remove('categoryfilter__select-open');
        }
        popup.classList.add('categoryfilter__popup-open');
        this.classList.add('categoryfilter__select-open');
      }
    })
  }
  function selectChange(select){
    let inputs = select.parentNode.querySelectorAll(".categoryfilter__popupinput");
    let count = 0;
    let span = select.querySelector(".categoryfilter__counter");
    let close = select.querySelector(".categoryfilter__closesvg");
    for(let i=0; i < inputs.length; i++){
      inputs[i].addEventListener("change", function(){
        setCounter();
      })
    }
  }*/
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
  let selects = selectBlock.querySelectorAll(".categoryfilter__select");
  let popups =  selectBlock.querySelectorAll('.categoryfilter__popup');
  for(let i=0; i < select.length; i++){
    select[i].addEventListener('click', function(){
      let selectitem = this.parentNode;
      let popup = selectitem.querySelector('.categoryfilter__popup');
      selectChange(this);
      if(popup.classList.contains('categoryfilter__popup-open')){
        popup.classList.remove('categoryfilter__popup-open');
        this.classList.remove('categoryfilter__select-open');
        selectChange(this)
      }
      else{
        console.log(popups);
        for(let j=0; j < popups.length; j++){
          popups[j].classList.remove('categoryfilter__popup-open');
          select[j].classList.remove('categoryfilter__select-open');
        }
        popup.classList.add('categoryfilter__popup-open');
        this.classList.add('categoryfilter__select-open');
      }
    })
  }
  function setCounter(){
    for(let i = 0; i < selects.length; i++){
      let count = 0;
      let inputs = selects[i].querySelectorAll(".categoryfilter__popupinput");
      let span = selects[i].querySelector(".categoryfilter__counter");
      for(let i = 0; i < inputs.length; i++){
        if(inputs[i].checked){
          count++;
        }
        if(!inputs[i].checked){
          count--;
        }
        if(count > 0){
          span.textContent = ": " + count;
          selects[i].classList.add("categoryfilter__select-active");
          //close.style.display = "block";
        }
        else{
          span.textContent = "";
        }
      }
    }
  }
  setCounter();
}
