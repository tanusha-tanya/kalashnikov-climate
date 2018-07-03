function changeButtonIfAgree(button, agree){
    if (agree.is(':checked')) {
        button.removeClass('ask__button-disabled');
        button.attr('disabled', false);
    } else {
        button.addClass('ask__button-disabled');
        button.attr('disabled', true);
    }
}
function mask(event) {
      let matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
      if (def.length >= val.length) val = def;
      this.value = matrix.replace(/./g, function(a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });

      if (event.type == "blur") {
          if (this.value.length == 2) this.value = ""
      } else setCursorPosition(this.value.length, this)
};
$(document).ready(function() {
  $('body').on('change','input[type=checkbox].js-confirm',function(){
      changeButtonIfAgree($(this).parents('form').find('input[type=submit]'), $(this));
      changeButtonIfAgree($(this).parents('form').find('button[type=submit]'), $(this));
  });

  $('body').on('change','input[type=text].ask__input',function(){
    if (this.value.trim().length !== 0) {
      $(this).parent('.ask__label').addClass('notempty')
    }
    else {
        $(this).parent('.ask__label').removeClass('notempty')
    }
  });
  let input = $('.user-phone');
  $('body').on('input', input, function(event){
    mask(event)
  })
  $('body').on('focus', input, function(event){
    mask(event)
  })
  $('body').on('blur', input, function(event){
    mask(event)
  })
})
