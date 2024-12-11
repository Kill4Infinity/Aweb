let indiceDiapositiva = 1;
mostrarDiapositivas(indiceDiapositiva);

function cambiarDiapositiva(n) {
    mostrarDiapositivas(indiceDiapositiva += n);
}

function actualDiapositiva(n) {
    mostrarDiapositivas(indiceDiapositiva = n);
}

function mostrarDiapositivas(n) {
    let i;
    let diapositivas = document.getElementsByClassName("miDiapositiva");
    let puntos = document.getElementsByClassName("punto");
    if (n > diapositivas.length) {indiceDiapositiva = 1}
    if (n < 1) {indiceDiapositiva = diapositivas.length}
    for (i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display = "none";
    }
    for (i = 0; i < puntos.length; i++) {
        puntos[i].className = puntos[i].className.replace(" activo", "");
    }
    diapositivas[indiceDiapositiva-1].style.display = "block";
    puntos[indiceDiapositiva-1].className += " activo";
}
