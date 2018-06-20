const hamburger = document.querySelector(".hamburger");
const mobilemenu = document.querySelector(".footer__mobilemenu")
hamburger.onclick = function(){
  if (hamburger.classList.contains("openhamburger")){
    hamburger.classList.remove("openhamburger");
    mobilemenu.classList.remove("openmenu");
    closeList();
  }
  else{
    hamburger.classList.add("openhamburger");
    mobilemenu.classList.add("openmenu");
  }
};
