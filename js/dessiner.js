// Ajout id select
document.querySelector("#menu select").id = "color";

// Ajout id input number
document.querySelector('#menu input[type="number"]').id="size";

// Onclick bouton générer
document.querySelector('#menu input[type="button"]').onclick = function() { generer(document.getElementById("size").value)}


// Générer tableau
generer(document.getElementById("size").value)

function colorier(x, y){
	document.getElementById("case" + x + y).style.backgroundColor=document.getElementById("color").value;
}

function generer(size){
	// Suppression du contenu de div dessin
	var dessin = document.getElementById("dessin");
	dessin.innerHTML="";
	// Génération du tableau
	var table = document.createElement("table");
	for(let i=0; i<size; i++){
		var tr = document.createElement("tr");
		for(let j=0; j<size ; j++){
			var td = document.createElement("td");
			td.id = "case" + i + j;
			td.onclick = function() { colorier(i, j); };
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	dessin.appendChild(table);

}