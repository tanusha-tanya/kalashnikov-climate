function spoiler(){
const spoilarrow = document.querySelector(".spoilarrow");
const spoilarrowText = document.querySelector(".spoilarrow__text");
let txt = spoilarrowText.textContent;
spoilarrow.onclick = function(){
  if(spoilarrow.classList.contains("spoildown")){
    spoilarrow.classList.remove("spoildown");
    spoilarrowText.textContent = txt;
  }
  else{
    spoilarrow.classList.add("spoildown");
    spoilarrowText.textContent = "Вверх";
  }
}
}
