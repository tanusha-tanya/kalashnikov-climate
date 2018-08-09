const param = document.querySelectorAll(".category__param");
const question = document.querySelector(".category__question");
if(question ){
  for(let i = 0; i<param.length; i++){
    param[i].addEventListener("click", function(){
      let capture = this.children[1],
      innerText = capture.innerText,
      dataText = capture.dataset.text;
      capture.innerText = dataText;
      capture.dataset.text = innerText;
      this.classList.toggle("questionOpen")
    })
  }
}
