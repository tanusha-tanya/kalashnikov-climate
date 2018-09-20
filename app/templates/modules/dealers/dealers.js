const dealers = document.querySelector(".dealers__filter");
if(dealers){
  let field = dealers.querySelectorAll("input[type='text']");
  let fieldHidden = dealers.querySelectorAll("input[type='hidden']");
  let takeId;
  let autocompleet = document.createElement("div");
  autocompleet.className = "autocompleet";
  let string;
  let autocompleetString = dealers.querySelectorAll(".autocompleet__string");
  let name;
  let hiddenInput;

  for(let i = 0; i < field.length; i++){
    field[i].addEventListener("input", function(){
      let val = field[i].value;
      let keyword = val.toLowerCase().trim();
      let dataList = JSON.parse(this.dataset.list);
      let forId = this.dataset.for;
      let names = [];
      for(let k = 0; k < dataList.length; k++){
        name = dataList[k].NAME;
        let currentName = name.toLowerCase().trim();
        if(currentName.indexOf(keyword) !== -1){
          if(names.indexOf(name) === -1){
          names.push(name);
        }
        autocompleetShow(names, field[i])
          /*if(keyword === currentName){
            takeId = dataList[k].ID;
            setId(takeId)
            return
          }
          else{
            takeId = "";
            setId(takeId)
          }*/
        }
        else if(keyword = ""){
          if(autocompleet)
          autocompleetHide(field[i].parentNode)
        }
        else{
          if(autocompleet)
          autocompleetHide(field[i].parentNode)
        }
      }

      function setId(takeId){
        for(let j = 0; j < fieldHidden.length; j++){
          if(fieldHidden[j].name === forId){
            hiddenInput = fieldHidden[j];
            hiddenInput.value = takeId;
          }
        }
      }

    })
  }

  function autocompleetShow(name, field){
    field.parentNode.appendChild(autocompleet);
    for(let i = 0; i<name.length; i++){
      string += "<span class='autocompleet__string'>"+name[i]+"</span>"
    }
      autocompleet.innerHTML = string;
      stringClick()
    }

  function autocompleetHide(that){
    that.removeChild(autocompleet)
  }
  function stringClick(){
    for(let i =0; i < autocompleetString.length; i++){
    autocompleetString[i].addEventListener("click", function(){
      let parent = this.parentNode;
      let input = parent.parentNode.querySelector("input[type='text']");
      input.value = this.textContent
      autocompleetHide(parent.parentNode)
    })
  }
}
}
