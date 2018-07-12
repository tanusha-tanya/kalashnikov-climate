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


  ymaps.ready(init);
  function init(){
    let myMap = new ymaps.Map('mymap', {
      center: [55.72, 37.77],
      zoom: 13
    });
    let myPlacemark = new ymaps.Placemark([55.72, 37.77], {
      hintContent: 'Содержимое всплывающей подсказки',
      balloonContent: 'Содержимое балуна'
    }, {
    iconLayout: 'default#image',
    iconImageHref: '/images/svg/placemark.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]});

    myMap.geoObjects.add(myPlacemark);
  }

/*  $(function(){
      ymaps.ready(init);
      function init() {
      var myMap = new ymaps.Map('map', {
          center: [56.8522511,53.2091607],

          zoom: 12
      }, {
          balloonPanelMaxMapArea: Infinity
      });
      var placemarks = [];
      var firstMark;

$('.js-map_point').each(function(index, element){
  var coords = $(element).data('coords').split(',');
  var balloon = $(element).data('baloon');
  var id = $(element).data('id');
  coords = [Number(coords[0]), Number(coords[1])];
          placemarks[id] = new ymaps.Placemark(coords,{
              balloonContent: balloon
          },{
              preset: 'islands#circleIcon',
              iconColor: '#262626'
          });
          myMap.geoObjects.add(placemarks[id]);
          if (!firstMark) {
              firstMark = placemarks[id];
          }
      })
  firstMark.options.set('preset','islands#circleDotIcon');
  firstMark.options.set('iconColor','#F93877');
  firstMark.balloon.open();

  $('.js-map_point').click(function(){
    var coords = $(this).data('coords').split(',');
    var geoPoint = [Number(coords[0]), Number(coords[1])];
    var id = $(this).data('id');
    var mark = placemarks[id];
            placemarks.forEach(function(item, i, arr) {
                  item.options.set('preset','islands#circleIcon');
                  item.options.set('iconColor','#262626');
              });
              mark.options.set('preset','islands#circleDotIcon');
              mark.options.set('iconColor','#F93877');
              mark.balloon.open();
          $('.js-map__item').removeClass('map__item-active');
          $(this).parents('.js-map__item').addClass('map__item-active');
  	    return false;
      })

  }
})*/
