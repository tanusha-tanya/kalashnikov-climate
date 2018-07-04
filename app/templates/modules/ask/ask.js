function changeButtonIfAgree(button, agree){
    if (agree.is(':checked')) {
        button.removeClass('ask__button-disabled');
        button.attr('disabled', false);
    } else {
        button.addClass('ask__button-disabled');
        button.attr('disabled', true);
    }
}

$(document).ready(function() {
  $('body').on('change','input[type=checkbox].js-confirm',function(){
      changeButtonIfAgree($(this).parents('form').find('input[type=submit]'), $(this));
      changeButtonIfAgree($(this).parents('form').find('button[type=submit]'), $(this));
  });

  $('body').on('input','input[type=text].ask__input',function(){
    if (this.value.trim().length !== 0) {
      $(this).parent("label").removeClass("error-label");
      $(this).parent('.ask__label').addClass('notempty');
      $(this).parent("label").find(".error__text").remove();
    }
    else {
        $(this).parent('.ask__label').removeClass('notempty')
    }
  });
  $('body').find('.ask__input-phone').mask('+7 (999) 999-99-99');

  $('body').on('submit','.ajaxform', function(event){
    event.preventDefault();
    let text = $(this).find('input[type=text]');
    text.parent("label").find(".error__text").remove();
    text.parent("label").removeClass("error-label");
    for(let i = 0; i < text.length; i++){
      if(text[i].value.trim().length === 0){
        $(text[i]).parent("label").addClass("error-label");
        $(text[i]).parent("label").append('<div class="error__text">Пожалуйста, заполните поле</div>');
      }
    };  
  });
})
