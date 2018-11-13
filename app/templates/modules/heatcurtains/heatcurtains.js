 $(document).ready(function () {
  $("#heatcurtainsslider").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 800,
    from: 0,
    to: 800
  });
  const heatcurtains = document.querySelector(".heatcurtains__filter");
  if(heatcurtains){
    inputChange(heatcurtains);
  }
});

function inputChange(form){
  let formInputs = form.querySelectorAll("input[type='text']");
  for(let i = 0; i < formInputs.length; i++){
    let formInput = formInputs[i];
    formInput.addEventListener("input", function(){
      if (formInput.value.length > 0){
        formInput.classList.add("active");
      }
      else{
        formInput.classList.remove("active");
      }
    })
  }
}

const cityTempreture = document.querySelector("#city");
if (cityTempreture){
      const temperature = document.querySelector("#external");
      cityTempreture.addEventListener("input", function(){
        let text = this.value;
        let word = text.toLowerCase().trim();
        matchName(word);
      })

  //сравниваем введенное значение с именами инпута
    function matchName(word){
      let takeId;
      let dataList = JSON.parse(city.dataset.city);
      let names = [];
      let external = null;
      for(let i = 0; i < dataList.length; i++){
        let name = dataList[i].NAME.toLowerCase().trim()
        if(word === name){
          external = dataList[i].PROPERTY.CALC_AIR_TEMPERATURE_EXTERNAL;
          temperature.value = external;
          temperature.classList.add("active");
          hideAutocompleet();
          return
        }
        else if(word == ""){
          temperature.value = "";
          temperature.classList.remove("active");
          hideAutocompleet();
        }
        else if(name.indexOf(word) !== -1){
          external = dataList[i].PROPERTY.CALC_AIR_TEMPERATURE_EXTERNAL;
          temperature.value = external;
          temperature.classList.add("active");
          names.push(dataList[i].NAME);
        }
        else{
          temperature.value = "";
          temperature.classList.remove("active");
          hideAutocompleet();
        }
      }
      if(names.length > 0){
        showAutocompleet(names);
      }
      else{
        hideAutocompleet();
      }
    }


  //Показываем автокомплит
  function showAutocompleet(names){
    let autocompleet = cityTempreture.parentNode.querySelector(".autocompleet");
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


  //Выбираем строку из списка
    function selectRow(autocompleetString){
      for(let i = 0; i< autocompleetString.length; i++){
        autocompleetString[i].addEventListener("click", function(){
          let text = this.textContent;
          let word = text.toLowerCase().trim()
          let input = this.parentNode.parentNode.querySelector("input[type='text']");
          matchName(word, input);
          city.value = text;
          city.parentNode.classList.add("activeInput");
        })
      }
    }

  function hideAutocompleet(){
    let autocompleet = city.parentNode.querySelector(".autocompleet");
    let autocompleetString = autocompleet.querySelectorAll(".autocompleet__string");
    if(autocompleetString.length > 0){
      for(let i = 0; i < autocompleetString.length; i++){
        autocompleet.removeChild(autocompleetString[i]);
      }
    }
    autocompleet.classList.remove("autocompleet-active")
  }


}
