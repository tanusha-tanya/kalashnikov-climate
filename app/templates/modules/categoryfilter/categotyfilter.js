const filter = document.querySelector(".categoryfilter");
if(filter){
  let buttonblock = filter.querySelector(".categoryfilter__openblock");
  let all =  buttonblock.querySelector(".categoryfilter__input-all");
  let buttonFilter =  buttonblock.querySelector(".categoryfilter__input-filter");
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
  all.onchange= function(){
    if(this.checked){
      buttonFilter.checked = false;
      labelAll.classList.add("categoryfilter__button-active");
      labelFilter.classList.remove("categoryfilter__button-active");
      filterClose()
      }
    }
  }
function filterOpen(){
  let hideblock = filter.querySelector(".categoryfilter__hideblock");
  hideblock.style.display = "block";
  buttonsClick();
  selectOpen();
}
function filterClose(){
  let hideblock = filter.querySelector(".categoryfilter__hideblock");
  hideblock.style.display = "none";
}
function buttonsClick(){
  let buttonblock = filter.querySelector(".categoryfilter__hideblock");
  let input = buttonblock.querySelectorAll("input");
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
  for(let i=0; i < select.length; i++){
    select[i].addEventListener('click', function(){
      let selectitem = this.parentNode;
      let popup = selectitem.querySelector('.categoryfilter__popup');
      if(popup.classList.contains('categoryfilter__popup-open')){
        popup.classList.remove('categoryfilter__popup-open');
      }
      else{
        popup.classList.add('categoryfilter__popup-open');
      }
    })
  }
}
