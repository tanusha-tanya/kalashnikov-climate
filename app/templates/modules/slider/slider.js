function slider () {
const countCurrent =  document.querySelector(".count__amount-current");
const countTotal =  document.querySelector(".count__amount-total");
const countAdd = document.querySelector(".flipping__arrow-right");
const countDeduct = document.querySelector(".flipping__arrow-left");
let currentNum = 1;
let totalNum = 10;

function totalNumber(){
  (totalNum<10)?
  countTotal.textContent = "0" + totalNum:
  countTotal.textContent = totalNum
}
function currentNumber(){
  (currentNum<10)?
  countCurrent.textContent = "0" + currentNum:
  countCurrent.textContent = currentNum;
  if(currentNum >= totalNum){
    disableArrow(countAdd);
  }
  else{
    enableArrow(countAdd)
  }
  if(currentNum <= 1){
    disableArrow(countDeduct);
  }
  else{
    enableArrow(countDeduct)
  }
}

function disableArrow(btn){
  btn.classList.add("disabled");
  return
}
function enableArrow(btn){
  btn.classList.remove("disabled");
  return
}
countAdd.onclick = function(){
  if(currentNum >= totalNum){
    disableArrow(this);
  }
  else{
  enableArrow(this);
  currentNum++;
  currentNumber();
  }
}
countDeduct.onclick = function(){
  if(currentNum <= 1){
    disableArrow(this);
  }
  else{
  enableArrow(this);
  currentNum--;
  currentNumber();
  }
}
totalNumber()
}
