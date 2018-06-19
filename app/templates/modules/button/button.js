function sendForm(){
const btn = document.querySelector(".send__button");
btn.onclick = function(){
  btn.classList.add("sent");
  btn.textContent = "Отправлено";
}
}
