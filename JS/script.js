//Variable que controla el estado actual del menú responsive
let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//Funcion para darle el efecto de animacion a las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");

        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("equipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

//Detectamos el Scrolling de la pagina mediante el evento scroll
window.onscroll = function(){
    efectoHabilidades();
}


function mostrarInteres(tipo) {

    const panel = document.getElementById("panelInteres");
    const titulo = document.getElementById("tituloInteres");
    const lista = document.getElementById("listaInteres");

    // Muestra el panel
    panel.style.display = "block";

    switch (tipo) {

        case "juegos":
            titulo.innerHTML = "🎮 Juegos Favoritos";
            lista.innerHTML = `
                <li>Free Fire</li>
                <li>Puzzle</li>
                <li>Voleibol</li>
                <li>Micro</li>
            `;
            break;

        case "musica":
            titulo.innerHTML = "🎵 Música Favorita";
            lista.innerHTML = `
                <li>Boleros</li>
                <li>Billie Eilish</li>
                <li>Reggaetón</li>
                <li>Electrónica</li>
            `;
            break;

        case "peliculas":
            titulo.innerHTML = "🎬 Películas Favoritas";
            lista.innerHTML = `
                <li>No Manches Frida</li>
                <li>UP</li>
                <li>Los Tipos Malos</li>
                <li>Shrek</li>
            `;
            break;

        case "libros":
            titulo.innerHTML = "📚 Libros Favoritos";
            lista.innerHTML = `
                <li>El Perfume</li>
                <li>El Psicoanalista</li>
                <li>Arlette</li>
                <li>Antes de Diciembre</li>
            `;
            break;

        case "fotografia":
            titulo.innerHTML = "📷 Fotografía";
            lista.innerHTML = `
                <li>Paisajes</li>
                <li>Retratos</li>
                <li>Fotografía Nocturna</li>
                <li>Foto de Nico</li>
            `;
            break;

        case "tecnologia":
            titulo.innerHTML = "💻 Tecnología";
            lista.innerHTML = `
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
            `;
            break;

        case "deporte":
            titulo.innerHTML = "🚴 Deportes";
            lista.innerHTML = `
                <li>Basketball</li>
                <li>Fútbol</li>
                <li>Natación</li>
            `;
            break;

        case "viajar":
            titulo.innerHTML = "✈️ Lugares que quiero visitar";
            lista.innerHTML = `
                <li>Santa Rosa del Cabal</li>
                <li>Santuario de las Lajas</li>
                <li>San Andres Islas</li>
                <li>Ciudad Perdida</li>
            `;
            break;

        default:
            titulo.innerHTML = "Intereses";
            lista.innerHTML = "<li>No hay información disponible.</li>";
    }
}