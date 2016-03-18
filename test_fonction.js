function message() {
	alert("Cette fonction se trouve dans un fichier externe");
}
function surface(longueur,largueur) {
	var surface=longueur * largueur;
	return surface;
} 
function onSurface() {
	var longueur = window.prompt("Entrez la longueur");
	var largueur = window.prompt("Entrez la largueur");
	alert("la surface est " + surface(longueur,largueur));
}

function onValidation() {
	window.confirm("Voulez vous valider cette option");
	document.write("l'option a été validée");
}
function table(numerotable) {
	var i;
	var tString="<table border='1'>   <tr><th colspan='2'> Table des " + numerotable +"</th> </tr>";
	for(i = 1; i<11; i++) {
		tString+="<tr>  <td>"+i+ " x "+ numerotable + "</td> <td>" + (i*numerotable) + "</td>  </tr>";	
	}
	tString+="</table>";
	document.write(tString);
}
function onTable() {
	var numerotable= window.prompt("Quelle table voulez vous affichez?");
	if (window.confirm("Une page va s'ouvrir.")) {
			table(numerotable);
	}
}
