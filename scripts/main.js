function mouseOver(id){
	document.getElementById(id).style.display = "block";
	if (id==="Experience") {
		document.getElementById("about").style.display = "none"; 
	}
	else { 
		document.getElementById("Experience").style.display = "none";
	}		
}

function mouseOut(id) {
	
	if (id==='') {document.getElementById("Experience").style.display = "none";
				document.getElementById("about").style.display = "none";}
	else {document.getElementById(id).style.display ="none"}
}
 
function overPassion(id) {
	document.getElementById(id+"1").style.display = "none";
	document.getElementById(id+"2").style.display = "block";
}

function outPassion(id) {
	document.getElementById(id+"2").style.display = "none";
	document.getElementById(id+"1").style.display = "block";
}



