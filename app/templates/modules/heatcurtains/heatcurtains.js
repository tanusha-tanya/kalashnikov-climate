 $(document).ready(function () {
  $("#heatcurtainsslider").ionRangeSlider({
    grid: true,
    from: 100
  });
  const heatcurtains = document.querySelector(".heatcurtains__filter");
  if(heatcurtains){
    let form = heatcurtains;
    inputChange(form);
  }
});

function inputChange(form){
  let formInputs = form.querySelectorAll("input[type='text']");
  for(let i = 0; i < formInputs.length; i++){
    let formInput = formInputs[i];
    formInput.addEventListener("input", function(){
      if (formInput.value.length > 0){
        formInput.classList.add("active");
      }
      else{
        formInput.classList.remove("active");
      }
    })
  }
}
