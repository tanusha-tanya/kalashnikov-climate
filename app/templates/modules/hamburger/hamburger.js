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
    if(footerMobilemenu.style.display = "none")
    footerMobilemenu.style.display = "block";
    setTimeout(function(){
      hamburger.classList.add("openhamburger");
      footerMobilemenu.classList.add("openmenu");
    }, 100);
    setTimeout(function(){
      if(!section.classList.contains("noscroll"))
      section.classList.add("noscroll");
      if(!footer.classList.contains("noscroll"))
      footer.classList.add("noscroll");
    }, 300);
  }
  function closeHamburger(){
    if(section.classList.contains("noscroll"))
    section.classList.remove("noscroll");
    if(footer.classList.contains("noscroll"))
    footer.classList.remove("noscroll");
    setTimeout(function(){
      hamburger.classList.remove("openhamburger");
      footerMobilemenu.classList.remove("openmenu");
    }, 100);
    setTimeout(function(){
      if(footerMobilemenu.style.display = "block")
      footerMobilemenu.style.display = "none";
    }, 300);
    closeList();
  }
  function hideMenu(){
    if(window.innerWidth >= 1199){
      footerMobilemenu.style.display = "none";
    }
    else if(footerMobilemenu.classList.contains("openmenu")){
      footerMobilemenu.style.display = "block";
    }
  }
  hideMenu()
  window.addEventListener("resize", function(){
    hideMenu()
  });
}
