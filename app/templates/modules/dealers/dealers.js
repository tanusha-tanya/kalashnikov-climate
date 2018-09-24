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


/*  function geoFindMe() {
   if (!navigator.geolocation){
      console.log("<p>Geolocation is not supported by your browser</p>")
     return;
   }

   function success(position) {
    if (window.sessionStorage && window.localStorage) {
      sessionStorage.setItem("latitude", position.coords.latitude)
      sessionStorage.setItem("longitude", position.coords.longitude)
    }
    /*matchCity(latitude, longitude)*/
   /*};

   function error() {
     console.log("Unable to retrieve your location");
   };

   navigator.geolocation.getCurrentPosition(success, error);
 }*/

  /*function matchCity(latitude, longitude){
    getCitiesCoords();
  }*/

  /*function getCitiesCoords(){
    let datalist;
    for(let i = 0; i < field.length; i++){
      datalist = JSON.parse(field[i].dataset.list);
    }
      for(let j = 0; j < datalist.length; j++){
        if(datalist[j].XY !== undefined){
          for (let m = 0; m < datalist[j].XY.length; m++){
            getDistance(datalist[j].XY[m].X, datalist[j].XY[m].Y)
          }
        }
    }
  }

  function getDistance(lat, long){
    let distance = Math.sqrt(Math.pow((latitude - lat), 2) + Math.pow((longitude - long), 2));
    distanceArr.push(distance);
    //let sortDistance = distanceArr.sort(compareNumeric);
    //let closestPoint = sortDistance[0];
    //let index = distanceArr.findIndex(el => el.name == 15.577980022704354);
    let searchName = "15.577980022704354";
    for (let f = 0; f < distanceArr.length; f++){
      console.log(distanceArr[f]);
      /*if(distanceArr[f].indexOf(searchName) !== -1){
        console.log(f);
        return
      }
    }
  }

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }*/

  /*getDistance(55.794572, 37.654877)//1200
  getDistance(59.939095, 30.315868)//1900
  getDistance(43.117948, 131.948548)//8100
  getDistance(56.461621, 53.803678)//65
  getDistance(43.708220, 39.580032)// 2400
  getDistance(55.796289, 49.108795)//390
  getDistance(53.195538, 50.101783)//560
  getDistance(58.010374, 56.229398)//280
  getDistance(56.838011, 60.597465)//640*/

  //geoFindMe()
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
      let oldDistance = [];
      function isCity(){
        for(let i =0; i < datalist.length; i++){
          if(datalist[i].NAME.indexOf(city) !== -1){
            cityId = datalist[i].ID;
            return cityId
          }
          else{
              for (let m = 0; m < datalist[i].XY.length; m++){
              let lat = datalist[i].XY[m].X;
              let long = datalist[i].XY[m].Y;
              console.log(lat)
              console.log(long)
              let distance = Math.sqrt(Math.pow((latitude - lat), 2) + Math.pow((longitude - long), 2));
              console.log( distance)
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
        console.log(hiddenInput)
      }


      function sortDistance(distanceArr){
        for(let i =0; i < distanceArr.length; i++){
          oldDistance.push(distanceArr[i])

        }
        distanceArr.sort(compareNumeric);
        let index = oldDistance.indexOf(distanceArr[0]);
        for(let i =0; i < datalist.length; i++){
          for (let m = 0; m < datalist[i].XY.length; m++){
            let arrey = [];
            arrey.push(datalist[i].XY[m]);
            console.log(arrey)
            /*if((arrey.length + 1) === index){
              console.log(arrey)
              cityId = datalist[i].ID;
            }*/
          }
        }
      }

      function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
      }
      setcityId(cityId);

   }
  }
}
