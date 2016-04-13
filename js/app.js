"use strict";

$("#logo_form").submit(sendResults);
$(".disabled").click(dropDown);
$(".first_select > .options").click(selection);
$(".second_select > .options").click(secondSelection);

// displays select options
function dropDown () {
	$("li").css("display", "block");
};

// sends data to sendResults of the selected item
function selection () {

	var program = $(this).text();
	$(".first_select > .disabled").html(program + "<i class='fa fa-chevron-down' aria-hidden='true'></i>");
	$(".first_select > .options").css("display", "none");

	sendResults(program);
}

// sends data to sendResults of the second selected item
function secondSelection () {

	var education = $(this).text();
	$(".second_select > .disabled").html(education + "<i class='fa fa-chevron-down' aria-hidden='true'></i>");
	$(".second_select > .options").css("display", "none");

	sendResults(education);
}

// runs a check to make sure the search button is clicked before executing
function sendResults (program, education) {

	$("#submit").click(function() {
		displayProgramLogos(program);
		displayEducationLogos(education);
	})

	return false;
};

// displays logos based on program criteria
function displayProgramLogos (program){

	if(program == "SCHOLARSHIP PROGRAM") {
		$(".scholar").addClass("selected");
		$(".loan").removeClass("selected");

	} else if (program == "LOAN PROGRAM") {
		$(".loan").addClass("selected");
		$(".scholar").removeClass("selected");

	} else if (program == "SEARCH ALL") {
		$(".display").addClass("selected");
	};
};

// displays logos based on education criteria
function displayEducationLogos (education){

	if(education == "KINGDERGARTEN") {
		$(".k_garten").addClass("selected");
		$(".h_school").removeClass("selected");

	} else if (education == "HIGH SCHOOL") {
		$(".h_school").addClass("selected");
		$(".k_garten").removeClass("selected");

	} else if (education == "SEARCH ALL") {
		$("img").addClass("selected");
	};
};
