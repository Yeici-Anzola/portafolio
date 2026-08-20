
const TOTAL_PREGUNTAS = 10;
const TIEMPO_DEL_JUEGO = 60;

let tiempoRestante = TIEMPO_DEL_JUEGO;
let countdown;
let preguntaActual = 0;
let cantidadAcertadas = 0;


let estadoPreguntas = new Array(TOTAL_PREGUNTAS).fill(0);

const BD_PREGUNTAS = [
    { letra: 'A', pregunta: 'Con la A: Empresa reconocida que se dedica a los servidores.', respuesta: 'amazon' },
    { letra: 'B', pregunta: 'Con la B: Lenguaje de marcado utilizado en frameworks y bases de datos.', respuesta: 'bson' },
    { letra: 'C', pregunta: 'Con la C: Lenguaje de estilos para estructurar de forma visual una web.', respuesta: 'css' },
    { letra: 'D', pregunta: 'Con la D: Document Object Model, interfaz de programación para HTML.', respuesta: 'dom' },
    { letra: 'E', pregunta: 'Con la E: Entorno de ejecución de JavaScript del lado del servidor.', respuesta: 'express' },
    { letra: 'F', pregunta: 'Con la F: Conjunto de conceptos o metodologías estandarizadas de trabajo.', respuesta: 'framework' },
    { letra: 'G', pregunta: 'Con la G: Sistema de control de versiones distribuido.', respuesta: 'git' },
    { letra: 'H', pregunta: 'Con la H: HyperText Markup Language, lenguaje de marcado para la web.', respuesta: 'html' },
    { letra: 'I', pregunta: 'Con la I: Protocolo de red que asigna una dirección numérica única.', respuesta: 'ip' },
    { letra: 'J', pregunta: 'Con la J: Lenguaje de programación dinámico orientado a objetos en web.', respuesta: 'javascript' }
];

const container = document.querySelector('.container');
const timer = document.getElementById('tiempo');
const comenzarBtn = document.getElementById('comenzar');
const responderBtn = document.getElementById('responder');
const pasarBtn = document.getElementById('pasar');
const reiniciarBtn = document.getElementById('reiniciar');
const inputRespuesta = document.getElementById('respuesta');

// 1. Generar los círculos de las letras y distribuirlos matemáticamente
function generarRosco() {
    container.querySelectorAll('.circle').forEach(c => c.remove()); // Limpieza por si se reinicia
    for (let i = 1; i <= TOTAL_PREGUNTAS; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        let letra = String.fromCharCode(i + 96).toUpperCase();
        circle.textContent = letra;
        circle.id = letra;
        container.appendChild(circle);

        // Fórmula trigonométrica para posicionar en círculo
        const angle = ((i - 1) / TOTAL_PREGUNTAS) * Math.PI * 2 - (Math.PI / 2);
        const x = Math.round(105 + 105 * Math.cos(angle)); // Ajustado al contenedor css de 255px
        const y = Math.round(105 + 105 * Math.sin(angle));
        
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    }
}

// 2. Controlar inicio de juego y temporizador
comenzarBtn.addEventListener('click', () => {
    document.getElementById('pantalla-inicial').style.display = 'none';
    document.getElementById('pantalla-juego').style.display = 'block';
    
    tiempoRestante = TIEMPO_DEL_JUEGO;
    preguntaActual = 0;
    cantidadAcertadas = 0;
    estadoPreguntas.fill(0);
    
    generarRosco();
    iniciarContador();
    cargarPregunta();
});

function iniciarContador() {
    countdown = setInterval(() => {
        tiempoRestante--;
        timer.innerText = tiempoRestante;
        if (tiempoRestante <= 0) {
            clearInterval(countdown);
            mostrarPantallaFinal();
        }
    }, 1000);
}

// 3. Control de preguntas y flujos
function cargarPregunta() {
    // Buscar si quedan preguntas pendientes
    let primeraPendiente = estadoPreguntas.indexOf(0, preguntaActual);
    if (primeraPendiente === -1) {
        primeraPendiente = estadoPreguntas.indexOf(0); // Busca desde el inicio
    }

    if (primeraPendiente === -1) {
        // Ya no quedan preguntas pendientes, fin del juego
        mostrarPantallaFinal();
        return;
    }

    preguntaActual = primeraPendiente;
    
    // Remover clase actual de todos los círculos y ponérsela a la activa
    document.querySelectorAll('.circle').forEach(c => c.classList.remove('pregunta-actual'));
    
    const letraActual = BD_PREGUNTAS[preguntaActual].letra;
    document.getElementById(letraActual).classList.add('pregunta-actual');
    
    document.getElementById('letra-pregunta').innerText = letraActual;
    document.getElementById('pregunta').innerText = BD_PREGUNTAS[preguntaActual].pregunta;
    inputRespuesta.value = "";
    inputRespuesta.focus();
}

// 4. Lógica de respuesta
function controlarRespuesta() {
    const respuestaUsuario = inputRespuesta.value.trim().toLowerCase();
    const respuestaCorrecta = BD_PREGUNTAS[preguntaActual].respuesta;
    const letraActual = BD_PREGUNTAS[preguntaActual].letra;
    const circuloLetra = document.getElementById(letraActual);

    if (respuestaUsuario === respuestaCorrecta) {
        circuloLetra.classList.add('bien-respondida');
        cantidadAcertadas++;
    } else {
        circuloLetra.classList.add('mal-respondida');
    }

    estadoPreguntas[preguntaActual] = 1; // Marcar como respondida
    preguntaActual++;
    cargarPregunta();
}

// Eventos de botones de respuesta
responderBtn.addEventListener('click', controlarRespuesta);
inputRespuesta.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') controlarRespuesta();
});

// Botón Pasa palabra (Saltear pregunta sin responder)
pasarBtn.addEventListener('click', () => {
    preguntaActual++;
    cargarPregunta();
});

// 5. Finalizar y reiniciar
function mostrarPantallaFinal() {
    clearInterval(countdown);
    document.getElementById('pantalla-juego').style.display = 'none';
    document.getElementById('pantalla-final').style.display = 'block';
    document.getElementById('acertadas').innerText = cantidadAcertadas;
}

reiniciarBtn.addEventListener('click', () => {
    document.getElementById('pantalla-final').style.display = 'none';
    document.getElementById('pantalla-inicial').style.display = 'block';
});