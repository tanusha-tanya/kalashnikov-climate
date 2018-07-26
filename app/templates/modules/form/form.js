$(document).ready(function() {
  $('input[type=checkbox].js-confirm').change(function(){
    changeButtonIfAgree($(this).parents('form').find('input[type=submit]'), $(this));
    changeButtonIfAgree($(this).parents('form').find('button[type=submit]'), $(this));
  });
});
