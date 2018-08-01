//Checked off items
//We used on("click") instead of click to reflect changes on future li's
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Delete Todo when X is clicked
$("ul").on("click", "span", function(event){
	//Below line is possible only because of jQuery
	//It allows parents to be removed with the help of child
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Adding Todo
$("input[type='text']").keypress(function(event){
	//which is the property of keypress that enables to select key by its value specified in jQuery pages.
	if (event.which === 13) {
		//fetching text from input option
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		//append method takes html string and add it to attribute
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});