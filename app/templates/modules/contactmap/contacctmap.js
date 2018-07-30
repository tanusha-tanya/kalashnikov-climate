ymaps.ready(init);
let mymapId = document.querySelector("#mymap");
let contactmapId = document.querySelector("#contactmap");

function init(){
  if(mymapId){
    var myMap = new ymaps.Map('mymap', {
      center: [55.72, 37.77],
      zoom: 13
    });
    var myPlacemark = new ymaps.Placemark([55.72, 37.77], {
      hintContent: 'Содержимое всплывающей подсказки',
      balloonContent: 'Содержимое балуна'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/images/svg/placemark.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]});
      myMap.geoObjects.add(myPlacemark);
  };
  if(contactmapId){
    var contactMap = new ymaps.Map('contactmap', {
      center: [55.72, 37.77],
      zoom: 13
    });


    var contactPlacemark = new ymaps.Placemark([55.72, 37.77], {
      hintContent: 'Содержимое всплывающей подсказки',
      balloonContent: 'Содержимое балуна'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/images/svg/contactsmap.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]});

      contactMap.geoObjects.add(contactPlacemark);
  }
}
