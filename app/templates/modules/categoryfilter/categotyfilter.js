const filter = document.querySelector(".categoryfilter");
if(filter){
  buttonsClick();
  selectOpen();
}
function buttonsClick(){
  let buttonblock = filter.querySelector(".categoryfilter__buttonblock");
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
      console.log(this)
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
