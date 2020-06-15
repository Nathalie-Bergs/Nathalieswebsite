function mouseOver(id){
	document.getElementById(id).style.display = "block";
	if (id==="Experience") {
		document.getElementById("about").style.display = "none"; 
	}
	else { document.getElementById("Experience").style.display = "none";
	}
}

function mouseOut(id) {
	
	if (id==='') {document.getElementById("Experience").style.display = "none";
				document.getElementById("about").style.display = "none";}
	else {document.getElementById(id).style.display ="none"}
}


