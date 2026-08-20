
const panelPrincipal = document.getElementById("pantalla");
const btnOscuro = document.getElementById("btnOscuro");
const btnClaro = document.getElementById("btnClaro");
const btnLectura = document.getElementById("btnLectura");

btnOscuro.addEventListener("click", function () {
    const colorFondo = "#020000";
    const colorTexto = "white";

    panelPrincipal.style.backgroundColor = colorFondo;
    panelPrincipal.style.color = colorTexto;
});

btnClaro.addEventListener("click", function () {

    const colorFondo = "white";
    const colorTexto = "black";

    panelPrincipal.style.backgroundColor = colorFondo;
    panelPrincipal.style.color = colorTexto;
});

btnLectura.addEventListener("click", function () {

    const colorFondo = "#f4ecd8";
    const colorTexto = "#000000";

    panelPrincipal.style.backgroundColor = colorFondo;
    panelPrincipal.style.color = colorTexto;
});