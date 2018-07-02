$(document).ready(function() {
	/*let magnificPopup = $.magnificPopup.instance,
			content = magnificPopup.content;*/
	$('.mainpartners__button').magnificPopup({
		type: 'ajax',
		overflowY: 'scroll',
		closeOnContentClick: false,
		callbacks: {
			open:function() {
				console.log(this.content);
				//askForm(content)
			}
		}
  });
});
