$(document).ready(function() {
  $('input[type=checkbox].js-confirm').change(function(){
    changeButtonIfAgree($(this).parents('form').find('input[type=submit]'), $(this));
    changeButtonIfAgree($(this).parents('form').find('button[type=submit]'), $(this));
  });
  $(".form__input-phone").mask("+7(999) 999-9999");
});
let form = document.querySelector(".ajaxform")
if(form){
  inputChange(form);
}
