const spoilarrow = document.querySelector(".spoilarrow");
const spoilarrowText = document.querySelector(".spoilarrow__text");
if(spoilarrow){
  let txt = spoilarrowText.textContent;
  let spoilpick = document.querySelector(".spoilarrow__pick");
  spoilarrow.onclick = function(){
    if(spoilpick.classList.contains("spoildown")){
      spoilpick.classList.remove("spoildown");
      spoilarrowText.textContent = txt;
    }
    else{
      spoilpick.classList.add("spoildown");
      spoilarrowText.textContent = "Вверх";
    }
  }
}
