const dealersFilter = document.querySelector(".dealers__filter")
if(dealersFilter){
  let inputs = document.querySelectorAll(".dealers__input");
  for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("input", function(){
    let input = this;
    let label = this.parentElement;
    changeSvg(input, label);
  })
}

  let dealersLinks = document.querySelectorAll(".dealers__link");

  for(let i = 0; i < dealersLinks.length; i++){
    dealersLinks[i].addEventListener("click", function(event){
      event.preventDefault();
      let indexLink = i;
      activeLink(indexLink);
    })
  };

  let dealersButtons = document.querySelectorAll(".dealers__button");
  for(let i = 0; i < dealersButtons.length; i++){
    dealersButtons[i].addEventListener("click", function(event){
      event.preventDefault();
      let indexLink = i;
      activeTab(indexLink);
    })
  };

  let dataText = [], actuallyText = [];

  for(let i = 0; i < dealersLinks.length; i++){
    actuallyText.push(dealersLinks[i].text)
    if(dealersLinks[i].dataset.text !== undefined){
      dataText.push(dealersLinks[i].dataset.text)
    }
    else{
      dataText.push(dealersLinks[i].text)
    }
  }

  function changeText(){
    if(window.innerWidth >= 768){
      for(let i = 0; i < dealersLinks.length; i++){
        dealersLinks[i].text = dataText[i];
      }
    }
    else{
      for(let i = 0; i < dealersLinks.length; i++){
        dealersLinks[i].text = actuallyText[i];
      }
    }
  }
changeText()
window.addEventListener("resize", function(){
    changeText();
  })
}

function changeSvg(input, label){
  if(input.value.trim().length !== 0){
    label.classList.add("activeInput");
    autoComplete(input, label)
  }
  else{
    label.classList.remove("activeInput");
  }
}

function autoComplete(input, label){
  console.log("Здесь будет автокомплит")
}

function activeLink(indexLink){
  let dealersLinks = document.querySelectorAll(".dealers__link");
    for(let i = 0; i < dealersLinks.length; i++){
      dealersLinks[i].parentElement.classList.remove("dealers__typeitem-active")
    }
    dealersLinks[indexLink].parentElement.classList.add("dealers__typeitem-active")
}

function activeTab(indexLink){
  let dealersButtons = document.querySelectorAll(".dealers__button");
  let dealersShow = document.querySelectorAll(".dealers__show");
    for(let i = 0; i < dealersButtons.length; i++){
      dealersButtons[i].classList.remove("dealers__button-active");
      dealersShow[i].classList.remove("dealers__show-active")
    }
  dealersButtons[indexLink].classList.add("dealers__button-active");
  dealersShow[indexLink].classList.add("dealers__show-active")
}
