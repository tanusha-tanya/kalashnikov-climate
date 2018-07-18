const hamburger = document.querySelector(".hamburger");

if(hamburger){
  let footerMobilemenu = document.querySelector(".footer__mobilemenu");
  let section = document.querySelector(".main__section");
  let footer = document.querySelector(".footer__top");
  footerMobilemenu.style.display = "none";
  hamburger.onmousedown = function(){
    changeHamburger();
    return
  };
  hamburger.onfocus = function(){
    changeHamburger();
    return
  };
  function changeHamburger(){
    (hamburger.classList.contains("openhamburger"))?
    closeHamburger():
    openHamburger()
  }
  function openHamburger(){
    footerMobilemenu.style.display = "block";
    setTimeout(function(){
      hamburger.classList.add("openhamburger");
      footerMobilemenu.classList.add("openmenu");
    }, 100);
    setTimeout(function(){
      section.classList.add("noscroll");
      footer.classList.add("noscroll");
    }, 300);
  }
  function closeHamburger(){
    section.classList.remove("noscroll");
    setTimeout(function(){
      hamburger.classList.remove("openhamburger");
      footerMobilemenu.classList.remove("openmenu");
    }, 100);
    setTimeout(function(){
      footerMobilemenu.style.display = "none";
    }, 300);
    closeList();
  }
}
