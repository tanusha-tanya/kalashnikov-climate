if(document.querySelector(".ask__input-confirm") !== null){
   askForm();
}

function askForm(){
  const askButton = document.querySelector(".ask__button");
  const askCheckbox = document.querySelector(".ask__input-confirm");
  console.log(askCheckbox);
  askCheckbox.onpropertychange = function() {
    console.log( askCheckbox );
  };

}
