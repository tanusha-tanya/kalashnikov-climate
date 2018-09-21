const dealers = document.querySelector(".dealers__filter");
if(dealers){
  let field = dealers.querySelectorAll("input[type='text']");
  let fieldHidden = dealers.querySelectorAll("input[type='hidden']");

  //обработка input
  for(let i = 0; i < field.length; i++){
    field[i].addEventListener("input", function(){
      let dataList = JSON.parse(this.dataset.list);
      let names = []
      let text = field[i].value;
      let word = text.toLowerCase().trim();
      matchName(word, this);
    })
  }

 //устанавливаем значение в скрытом инпуте
  function SetHiddenId(input, value){
    let forId = input.dataset.for;
    for(let i = 0; i < fieldHidden.length; i++){
      if(fieldHidden[i].name === forId){
          let hiddenInput = fieldHidden[i];
          hiddenInput.value = value;
      }
    }
  }

  //сравниваем введенное значение с именами инпута
  function matchName(word, input){
    let takeId;
    let dataList = JSON.parse(input.dataset.list);
    let names = [];
    for(let i = 0; i < dataList.length; i++){
      let name = dataList[i].NAME.toLowerCase().trim()
      if(word === name){
        takeId = dataList[i].ID;
        SetHiddenId(input, takeId);
        hideAutocompleet(input);
        return
      }
      else if(word == ""){
        takeId = "";
        SetHiddenId(input, takeId);
        hideAutocompleet(input);
      }
      else if(name.indexOf(word) !== -1){
        takeId = "";
        SetHiddenId(input, takeId);
        names.push(dataList[i].NAME);
      }
      else{
        takeId = "";
        SetHiddenId(input, takeId);
        hideAutocompleet(input);
      }
    }
    if(names.length > 0){
      showAutocompleet(names, input);
    }
    else{
      hideAutocompleet(input);
    }
  }

  //Показываем автокомплит
  function showAutocompleet(names, input){
    let autocompleet = input.parentNode.querySelector(".autocompleet");
    autocompleet.classList.add("autocompleet-active");
    if(autocompleetString){
      for(let i = 0; i < autocompleetString.length; i++){
        autocompleet.removeChild(autocompleetString[i]);
      }
    }
    let string = "";
    for(let i = 0; i < names.length; i++){
      string+= '<div class="autocompleet__string">'+names[i]+'</div>'
    }
    autocompleet.innerHTML = string;
    let autocompleetString = autocompleet.querySelectorAll(".autocompleet__string");
    selectRow(autocompleetString)
  }

  //Убираем автокомплит
  function hideAutocompleet(input){
    let autocompleet = input.parentNode.querySelector(".autocompleet");
    let autocompleetString = autocompleet.querySelectorAll(".autocompleet__string");
    if(autocompleetString.length > 0){
      for(let i = 0; i < autocompleetString.length; i++){
        autocompleet.removeChild(autocompleetString[i]);
      }
    }
    autocompleet.classList.remove("autocompleet-active")
  }

  //Выбираем строку из списка
  function selectRow(autocompleetString){
    for(let i = 0; i< autocompleetString.length; i++){
      autocompleetString[i].addEventListener("click", function(){
        let text = this.textContent;
        let word = text.toLowerCase().trim()
        let input = this.parentNode.parentNode.querySelector("input[type='text']");
        matchName(word, input);
        input.value = text;
        input.parentNode.classList.add("activeInput");
      })
    }
  }
}
