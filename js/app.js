"use strict";

//$("#logo_form").submit(sendResults);
$(".first_select > .disabled").click(dropDown);
$(".second_select > .disabled").click(dropDown2);
$(".first_select > .options").click(selection);
$(".second_select > .options").click(secondSelection);

// displays select options
function dropDown () {
	$(".first_select > .options").css("display", "block");
};
function dropDown2 () {
	$(".second_select > .options").css("display", "block");
};

// sends data to sendResults of the selected item
function selection () {

	var programChoice = $(this).text();
	$(".first_select > .disabled").html(programChoice + "<i class='fa fa-chevron-down' aria-hidden='true'></i>");
	$(".first_select > .options").css("display", "none");

	grabResults();
};

// sends data to sendResults of the second selected item
function secondSelection () {

	var educationChoice = $(this).text();
	$(".second_select > .disabled").html(educationChoice + "<i class='fa fa-chevron-down' aria-hidden='true'></i>");
	$(".second_select > .options").css("display", "none");

	grabResults();
};

function grabResults () {
	var program = $(".first_select > .disabled").text();
	var education = $(".second_select > .disabled").text();

	sendResults(program, education);
}

// runs a check to make sure the search button is clicked before executing
function sendResults (program, education) {

	$("#submit").click(function() {
		displayLogos(program, education);
	})

	return false;
};

// displays logos based on program criteria
function displayLogos (program, education){

	console.log(program);
	console.log(education);

	if (program == "SCHOLARSHIP PROGRAM" && education == "SEARCH ALL") {
		$(".kgarten").addClass("selected");
		$(".hschool").addClass("selected");
		$(".scholar").addClass("selected");
		$(".loan").removeClass("selected");

	} else if (program == "SCHOLARSHIP PROGRAM" && education == "KINDERGARTEN") {
		$(".kgarten").addClass("selected");
		$(".scholar").addClass("selected");
		$(".hschool").removeClass("selected");
		$(".loan").removeClass("selected");

	} else if (program == "SCHOLARSHIP PROGRAM" && education == "HIGH SCHOOL") {
		$(".hschool").addClass("selected");
		$(".scholar").addClass("selected");
		$(".kgarten").removeClass("selected");
		$(".loan").removeClass("selected");

	}  else if (program == "LOAN PROGRAM" && education == "SEARCH ALL") {
		$(".kgarten").addClass("selected");
		$(".hschool").addClass("selected");
		$(".loan").addClass("selected");
		$(".scholar").removeClass("selected");

	} else if (program == "LOAN PROGRAM" && education == "KINDERGARTEN") {
		$(".loan").addClass("selected");
		$(".kgarten").addClass("selected");
		$(".hschool").removeClass("selected");
		$(".scholar").removeClass("selected");

	}  else if (program == "LOAN PROGRAM" && education == "HIGH SCHOOL") {
		$(".hschool").addClass("selected");
		$(".loan").addClass("selected");
		$(".kgarten").removeClass("selected");
		$(".scholar").removeClass("selected");
		
	}  else if(education == "KINDERGARTEN" && program == "LOAN PROGRAM") {
		$(".loan").addClass("selected");
		$(".kgarten").addClass("selected");
		$(".hschool").removeClass("selected");
		$(".scholar").removeClass("selected");

	} else if(education == "KINDERGARTEN" && program == "SCHOLARSHIP PROGRAM") {
		$(".scholar").addClass("selected");
		$(".kgarten").addClass("selected");
		$(".hschool").removeClass("selected");
		$(".loan").removeClass("selected");

	} else if(education == "KINDERGARTEN" && program == "SEARCH ALL") {
		$(".scholar").addClass("selected");
		$(".loan").addClass("selected");
		$(".kgarten").addClass("selected");
		$(".hschool").removeClass("selected");

	} else if (education == "HIGH SCHOOL" && program == "SCHOLARSHIP PROGRAM") {
		$(".scholar").addClass("selected");
		$(".hschool").addClass("selected");
		$(".kgarten").removeClass("selected");
		$(".loan").removeClass("selected");

	} else if (education == "HIGH SCHOOL" && program == "LOAN PROGRAM") {
		$(".loan").addClass("selected");
		$(".hschool").addClass("selected");
		$(".kgarten").removeClass("selected");
		$(".scholar").removeClass("selected");

	} else if (education == "HIGH SCHOOL" && program == "SEARCH ALL") {
		$(".scholar").addClass("selected");
		$(".loan").addClass("selected");
		$(".hschool").addClass("selected");
		$(".kgarten").removeClass("selected");

	} else if (program == "SEARCH ALL" && education == "SEARCH ALL") {
		$(".display").addClass("selected");
	}

};
