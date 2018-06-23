const searchInput =  document.querySelector(".search__input");
const searchText = document.querySelector(".search__text");
const fieldset = (searchInput.parentElement).parentElement;
const searchForm = fieldset.parentElement;
function search(){

  if (searchInput.value.length > 0 || searchInput.value !== " " ){
    inputText();
  }
  searchInput.onfocus = function(){
    inputText();
  }
  searchInput.onblur = function(){
    clearText();
  }
  searchForm.onsubmit = function(event){
    event.preventDefault();
    if (searchInput.value.length === 0 || searchInput.value === " "){
      return
    }
    else{
        let val = searchInput.value;
        window.location.search = "";
        window.location = "search.html?q="+val
      }
    }

  function inputText(){
    fieldset.classList.add("activeInput");
  }
  function clearText(){
    if (searchInput.value.length === 0){
    fieldset.classList.remove("activeInput");
    }
    else {
      return
    };
  }
}
if(searchInput){ search()};
