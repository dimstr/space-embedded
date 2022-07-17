$(function() {
	if(navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i)) {
		$('.loading').hide();
	}
	$('.image').load(function() {
		$(this).parent().find(".loading").hide();
	});
});
alert("hello");
