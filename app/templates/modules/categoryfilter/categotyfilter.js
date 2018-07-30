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
      selectChange(this);
      if(popup.classList.contains('categoryfilter__popup-open')){
        popup.classList.remove('categoryfilter__popup-open');
        this.classList.remove('categoryfilter__select-open');
        selectChange(this)
      }
      else{
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
        //setCounter(this);
      })
    }
  }
  /*function setCounter(input){
      let count = 0;
      let span = input.parentNode.parentNode.querySelector(".categoryfilter__counter");
      console.log(span)
        if(input.checked){
          count++;
        }
        if(!input.checked){
          count--;
        }
        if(count > 0){
          span.textContent = ": " + count;
          input.parentNode.parentNode.classList.add("categoryfilter__select-active");
          //close.style.display = "block";
        }
        else{
          span.textContent = "";
        }
    }*/
}
