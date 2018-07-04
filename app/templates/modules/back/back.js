window.onload = function() {
  let page, oldPage;
  if (window.sessionStorage && window.localStorage) {
    oldPage = localStorage.page;
    page = window.location;
    localStorage.setItem("page", page);

  }
  else{
    oldPage = "/"
  }
  back(oldPage);
}

function back(oldPage){
const back = document.querySelector(".back__link");
  if(back){
    back.onclick = function(event){
      if(oldPage){
        window.location = oldPage
      }
      else{
        window.location = "/"
      }
    }
  }
}
