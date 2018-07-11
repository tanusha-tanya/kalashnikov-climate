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
  if(window.innerWidth >= 768){
    for(let i = 0; i < dealersLinks.length; i++){
      if(dealersLinks[i].dataset.text !== undefined)
      dealersLinks[i].text = dealersLinks[i].dataset.text;
    };
  }
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
(function($){
  $(window).on("load",function(){
    $(".dealers__table").mCustomScrollbar({
      axis:"x",
      theme: "my-theme",
      scrollButtons:{ enable: true }
    });
  });
})(jQuery);

ymaps.ready(init);

function init(){
  let myMap = new ymaps.Map('map', {
        center: [57.053319, 53.987401],
        zoom: 13
  });
  console.log("map")
}
