const spoilarrow = document.querySelectorAll(".spoilarrow");
if(spoilarrow){
  for(let i = 0; i < spoilarrow.length; i++){
    let txt = [];
    let spoilarrowText = document.querySelectorAll(".spoilarrow__text");
    for(let j = 0; j < spoilarrowText.length;  j++){
      txt.push(spoilarrowText[j].textContent);
    }
    spoilarrow[i].addEventListener("click", function(){
      let thisText = this.querySelector(".spoilarrow__text");
      let spoilpick = this.querySelector(".spoilarrow__pick");
      if(spoilpick.classList.contains("spoildown")){
        spoilpick.classList.remove("spoildown");
        thisText.textContent = txt[i];
      }
      else{
        spoilpick.classList.add("spoildown");
        thisText.textContent = "Вверх";
      }
    })
  }
}
