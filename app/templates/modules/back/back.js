window.onload = function() {
  let page, oldPage;
  if (window.sessionStorage && window.localStorage) {
    oldPage = localStorage.page;
    page = window.location.href;
    localStorage.setItem("page", page);

  }
  else{
    oldPage = "/"
  }
  back(oldPage, page);
}

function back(oldPage, page){
const back = document.querySelector(".back__link");
  if(back){
    back.onclick = function(event){
      if(oldPage){
        (oldPage === page)?
        window.location = "/":
        window.location = oldPage
      }
      else{
        window.location = "/"
      }
    }
  }
}
