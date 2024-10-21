$(document).ready(function() {
	$("#accordion > div").toggle();
	$("#accordion > h3").click(function() {
		const thisHeading = $(this);
		thisHeading.siblings("div").not(thisHeading.next("div")).slideUp();
		thisHeading.siblings("h3").addClass("rounded-bottom-1");
		if (thisHeading.hasClass("rounded-bottom-1")) {
			thisHeading.next("div").slideDown();
			thisHeading.removeClass("rounded-bottom-1");
		}
		else {
			thisHeading.next("div").slideUp();
			thisHeading.addClass("rounded-bottom-1");
		}

	});
});