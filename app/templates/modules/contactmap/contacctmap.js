ymaps.ready(initmap);
function initmap(){
  let myMap = new ymaps.Map('contactmap', {
    center: [55.72, 37.77],
    zoom: 13
  });
  let myPlacemark = new ymaps.Placemark([55.72, 37.77], {
    hintContent: 'Содержимое всплывающей подсказки',
    balloonContent: 'Содержимое балуна'
  }, {
  iconLayout: 'default#image',
  iconImageHref: '/images/svg/contactsmap.svg',
  iconImageSize: [30, 42],
  iconImageOffset: [-3, -42]});

  myMap.geoObjects.add(myPlacemark);
}
