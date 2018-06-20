const listbtn = document.querySelectorAll(".mobilemenu__svg");
const li = document.querySelectorAll(".mobilemenu__li");
for(let i = 0; i < listbtn.length; i++){
  listbtn[i].addEventListener("click", function(){
    let parent = this.parentElement;
    let child = parent.querySelectorAll(".mobilemenu__li");
    if(parent.classList.contains("openlist")){
      parent.classList.remove("openlist")
      for(let i = 0; i < child.length; i++){
        child[i].classList.remove("openlist")
      };
    }
    else{
      parent.classList.add("openlist")
    }
  })
}
function closeList(){
  for(let i = 0; i < li.length; i++){
    li[i].classList.remove("openlist")
  }
}
