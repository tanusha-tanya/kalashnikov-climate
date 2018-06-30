const hamburger = document.querySelector(".hamburger");
const mobilemenu = document.querySelector(".footer__mobilemenu");
const section = document.querySelector(".main__section");
hamburger.onclick = function(){
  if (hamburger.classList.contains("openhamburger")){
    hamburger.classList.remove("openhamburger");
    mobilemenu.classList.remove("openmenu");
    section.classList.remove("noscroll");
    closeList();
  }
  else{
    hamburger.classList.add("openhamburger");
    mobilemenu.classList.add("openmenu");
    section.classList.add("noscroll");
  }
};
