let indiceSlide = 0;
mostrarSlides();

function mostrarSlides() {
    let i;
    let slides = document.getElementsByClassName("mi-slide");
    let puntos = document.getElementsByClassName("punto");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    indiceSlide++;
    if (indiceSlide > slides.length) {indiceSlide = 1}
    for (i = 0; i < puntos.length; i++) {
        puntos[i].className = puntos[i].className.replace(" activo", "");
    }
    slides[indiceSlide-1].style.display = "block";
    puntos[indiceSlide-1].className += " activo";
    setTimeout(mostrarSlides, 5000);
}

function cambiarSlide(n) {
    mostrarSlides(indiceSlide += n);
}

function slideActual(n) {
    mostrarSlides(indiceSlide = n);
}