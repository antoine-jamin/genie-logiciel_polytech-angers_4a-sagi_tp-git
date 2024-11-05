// Afficher le bon signe et le résultat de la somme
function somme() {
    document.querySelector("#signe").value = "+";
    x = parseInt(document.querySelector("#x").value);
    y = parseInt(document.querySelector("#y").value);
    document.querySelector("#z").value = x + y;
}

// Afficher le bon signe et le résultat de la multiplication
function mult() {
    document.querySelector("#signe").value = "x";
    x = parseInt(document.querySelector("#x").value);
    y = parseInt(document.querySelector("#y").value);
    document.querySelector("#z").value = x + y;
}

// Affecter les fonctions de calcul aux clic sur les boutons.
document.querySelector("#somme").addEventListener("click", somme);
document.querySelector("#mult").addEventListener("click", mult);