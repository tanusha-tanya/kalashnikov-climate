const sendmail = document.querySelector(".sendmail__form");
if(sendmail){
  inputChange(sendmail);
  let sendButton = sendmail.querySelector(".sendmail__button");
  let input = sendmail.querySelector(".sendmail__input");
  sendButton.onclick = function(){
    if(!sendButton.classList.contains("button-disabled") && (input.value.length > 0)){
      sendmail.submit();
    }
  }
}
