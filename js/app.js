"use strict";

function sendResults () {

	var results = document.getElementById("logo_form").value;

	console.log(results);

	displayProgramLogos(results);
	displayEducationLogos(results);
};

function displayProgramLogos (results){

	if(program_type.value == "Scholorship+Program") {
		var scholar_logos = document.getElementsByClassName('scholar');
		scholar_logos.className = "selected";

	} else if (program_type.value == "Loan+Program") {
		var scholar_logos = document.getElementsByClassName('loan');
		scholar_logos.className = "selected";

	} else if (program_type.value == "Search+All") {
		var scholar_logos = document.getElementsByClassName('display');
		scholar_logos.className = "selected";
	}
};

function displayEducationLogos (results){

	if(education_level.value == "Kingdergarten") {
		var scholar_logos = document.getElementsByClassName('k_garten');
		scholar_logos.className = "selected";

	} else if (education_level.value == "High+School") {
		var scholar_logos = document.getElementsByClassName('h_school');
		scholar_logos.className = "selected";

	} else if (education_level.value == "Search+All") {
		var scholar_logos = document.getElementsByClassName('display');
		scholar_logos.className = "selected";
	}
};