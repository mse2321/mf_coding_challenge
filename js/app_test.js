"use strict";

$(".first_select > .disabled").click(dropDown);
$(".second_select > .disabled").click(dropDown2);
$(".first_select > .options").click(selection);

// displays select options
function dropDown () {
	$(".first_select > .options").css("display", "block");
};
function dropDown2 () {
	$(".second_select > .options").css("display", "block");
};

// sends data to sendResults of the selected item
function selection () {

	var program = $(this).text();
	$(".first_select > .disabled").html(program + "<i class='fa fa-chevron-down' aria-hidden='true'></i>");
	$(".first_select > .options").css("display", "none");

	sendResults(program);
};

// runs a check to make sure the search button is clicked before executing
function sendResults (program) {
	$("#submit").click(function() {
		console.log(program);
	})
};
