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
          console.log(hiddenInput)
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
    arrowsNavigation(autocompleetString)
    selectRow(autocompleetString)
  }

  function arrowsNavigation(stringCollection){
    for(i = 0; i < stringCollection.length; i++ ){
      stringCollection[i].setAttribute("tabindex", "1");
    }
      let k = 0;
      document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if(keyName == "ArrowDown"){
          event.preventDefault();
          if(k <= stringCollection.length-1){
            stringCollection[k].focus();
            k++;
          }
          else{
            k = 1;
            stringCollection[0].focus();
          }
        }
        else if(keyName == "ArrowUp"){
          event.preventDefault();
          if(k <= 1){
            k = stringCollection.length;
            stringCollection[k-1].focus();
          }
          else{
            k--;
            stringCollection[k-1].focus();
          }
        }
        else if(keyName == "Enter"){
          event.preventDefault()
          var string = null;
            for(i = 0; i < stringCollection.length; i++ ){
              if(document.activeElement === stringCollection[i]){
                string = stringCollection[i];
              }
          }
          if(string !== null){
            let text = string.textContent;
            let word = text.toLowerCase().trim()
            let input = string.parentNode.parentNode.querySelector("input[type='text']");
            matchName(word, input);
            input.value = text;
            input.parentNode.classList.add("activeInput");
          }
        }
    });
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


window.onload = function(){
  if(ymaps){
    let city = ymaps.geolocation.city;
    const dealersCity = document.querySelector(".dealers__input-city");
    if(dealersCity){
      let cityId;
      let hiddenInput = document.querySelector('input[name="filter[CITY]"]');
      let datalist = JSON.parse(dealersCity.dataset.list);
      let latitude = ymaps.geolocation.latitude;
      let longitude = ymaps.geolocation.longitude;
      let distanceArr = [];
      function isCity(){
        for(let i =0; i < datalist.length; i++){
          if(datalist[i].NAME.indexOf(city) !== -1){
            cityId = datalist[i].ID;
            return cityId
          }
          else if(datalist[i].XY !== undefined){
            for (let m = 0; m < datalist[i].XY.length; m++){
              let lat = datalist[i].XY[m].X;
              let long = datalist[i].XY[m].Y;
              let distance = Math.sqrt(Math.pow((latitude - lat), 2) + Math.pow((longitude - long), 2));
              distanceArr.push(distance);
            }
          }
        }
        if(distanceArr.length > 0){
          sortDistance(distanceArr);
        }
        else return
      }

      isCity()

      function setcityId(cityId){
        hiddenInput.value = cityId;
      }

      function sortDistance(distanceArr){
        let minDistans =  Math.min.apply(null,distanceArr);
        let index = distanceArr.indexOf(minDistans);
        let array = [];

        for(let i =0; i < datalist.length; i++){
          if(datalist[i].XY !== undefined){
            for (let m = 0; m < datalist[i].XY.length; m++){
              array.push(datalist[i].ID);
              }
            }
          }
          cityId = array[index];
      }

      setcityId(cityId);
   }
  }
}

document.body.onclick = function(e){
  if(!e.target.classList.contains("autocompleet__string")){
    let autocompleetCollection = document.querySelectorAll(".autocompleet");
    if(autocompleetCollection){
      for(let i = 0; i < autocompleetCollection.length; i++){
        autocompleetCollection[i].classList.remove("autocompleet-active")
      }
    }
  }
}
