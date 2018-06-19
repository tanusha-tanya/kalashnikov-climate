function search(){
  const search =  document.querySelector(".search__input");
  const searchText = document.querySelector(".search__text");
  search.oninput = function(){
    search.classList.add("activeInput");
    searchText.style.display = "none";
    if(search.value.length === 0){
      search.classList.remove("activeInput");
      searchText.style.display = "block";
    }
  }
  search.onclick = function(){
    if(search.value.length === 0){
      search.classList.remove("activeInput");
      searchText.style.display = "block";
    }
  }
  search.onmouseout = function(){
    if(search.value.length === 0){
      search.classList.remove("activeInput");
      searchText.style.display = "block";
    }
  }
}
if(document.querySelector(".search__input") !== undefined) search();
