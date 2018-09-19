const dealers = document.querySelector(".dealers__filter");
if(dealers){
  let field = dealers.querySelectorAll("input[type='text']");
  for(let i = 0; i < field.length; i++){
    field[i].addEventListener("input", function(){
      //console.log(this.dataset.list);
      let fieldHidden = dealers.querySelectorAll("input[type='hidden']");
      for(let j = 0; j < fieldHidden.length; j++){
        if(fieldHidden[j].name === this.dataset.for){
          console.log(fieldHidden[j])
        }
      }
    })
  }
}
