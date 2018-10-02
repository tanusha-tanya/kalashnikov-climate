
$(document).ready(function() {
	$('.askbutton__link, .header__link').magnificPopup({
		type: 'ajax',
		overflowY: 'scroll',
		callbacks: {
			ajaxContentAdded: function() {
    		$(this.content).find(".ask__input-phone").mask("+7(999) 999-9999");;
  		}
		}
  });
});
