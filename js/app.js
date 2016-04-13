"use strict";

$("#logo_form").submit(sendResults);
//$(".disabled").click(dropDown);

/*function dropDown () {
	$("li").css("display", "block");
};
*/

function sendResults () {

	var results = $(this).serialize();

	var indexStart = results.indexOf("=") + 1;
	var indexEnd = results.indexOf("&");
	var indexStartSecondary = results.lastIndexOf("=") + 1;

	var program = results.slice(indexStart, indexEnd);
	var education = results.slice(indexStartSecondary);

	console.log(results);
	console.log(indexStart);
	console.log(indexEnd);

	console.log(program);
	console.log(education);


	displayProgramLogos(program);
	displayEducationLogos(education);

	return false;
	
};

function displayProgramLogos (program){

	if(program == "SCHOLARSHIP+PROGRAM") {
		$(".scholar").addClass("selected");
		$(".loan").removeClass("selected");

	} else if (program == "LOAN+PROGRAM") {
		$(".loan").addClass("selected");
		$(".scholar").removeClass("selected");

	} else if (program == "SEARCH+ALL") {
		$(".display").addClass("selected");
	};
};

function displayEducationLogos (education){

	if(education == "KINGDERGARTEN") {
		$(".k_garten").addClass("selected");
		$(".h_school").removeClass("selected");

	} else if (education == "HIGH+SCHOOL") {
		$(".h_school").addClass("selected");
		$(".k_garten").removeClass("selected");

	} else if (education == "SEARCH+ALL") {
		$("img").addClass("selected");
	};
};
