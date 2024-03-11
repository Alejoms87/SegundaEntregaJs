//Este es el segundo proyecto de pre-entrega para Js
//Se trata de un juego en donde la persona va a responder 5 preguntas de futbol referidas al mundial
//Para ello se han utilizado clases, constructores, objetos y funciones
//Se crearon dos botones para que el jugador decida si quiere jugar o salir del juego



class Pregunta {
    constructor(enunciado, opciones, respuestaCorrecta) {
        this.enunciado = enunciado;
        this.opciones = opciones;
        this.respuestaCorrecta = respuestaCorrecta;
    }
}

const preguntas = [
    new Pregunta("¿Cuál es el mejor jugador del mundo?", ["1. Neymar Jr.", "2. Cristiano Ronaldo", "3. Lionel Messi", "4. Angel di Maria", "5. Paul Pogba"], 2),
    new Pregunta("¿Cuantas copas del mundo tiene la selección Argentina de futbol?", ["1. Dos copas del mundo", "2. Cinco copas del mundo", "3. Tres copas del mundo", "4. Seis copas del mundo", "5. No posee copas del mundo"], 2),
    new Pregunta("¿Cuantos equipos juegan la copa del mundo ?", ["1. 48 equipos", "2. 36 equipos", "3. 50 equipos", "4. 40 equipos", "5. 28 equipos"], 0),
    new Pregunta("¿Donde se jugo el ultimo mundial ?", ["1 .Brasil(decime que se siente)", "2. Francia", "3. España", "4. Qatar", "5. Argentina"], 3),
    new Pregunta("¿Cuantos goles se metieron en la final del mundo?", ["1. 4 goles", "2. 5 goles", "3. 7 goles", "4. 2 goles", "5. 6 goles"], 4)
];

function seleccionarPreguntasAleatorias() {
    const preguntasAleatorias = [];
    while (preguntasAleatorias.length < 5) {
        const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
        if (!preguntasAleatorias.includes(pregunta)) {
            preguntasAleatorias.push(pregunta);
        }
    }
    return preguntasAleatorias;
}

document.getElementById("botonjugar").addEventListener("click", jugar);
document.getElementById("botonsalir").addEventListener("click", salir);

function jugar() {
    const preguntasAleatorias = seleccionarPreguntasAleatorias();
    let respuestasCorrectas = 0;
    let respuestasIncorrectas = 0;

    for (let i = 0; i < preguntasAleatorias.length; i++) {
        const pregunta = preguntasAleatorias[i];
        let respuestaUsuario;
        let opcionValida = false;

        while (!opcionValida) {
            respuestaUsuario = prompt(`${pregunta.enunciado}\n${pregunta.opciones.join("\n")}\nPor favor ingresa una opción correcta:`);
            if (respuestaUsuario === null) {
                return;
            } else if (respuestaUsuario.trim() === "" || isNaN(respuestaUsuario) || parseInt(respuestaUsuario) < 1 || parseInt(respuestaUsuario) > pregunta.opciones.length) {
                alert("Por favor ingresa un dentro de las opciones disponibles.");
            } else {
                opcionValida = true;
            }
        }

        if (parseInt(respuestaUsuario) === pregunta.respuestaCorrecta + 1) {
            respuestasCorrectas++;
        } else {
            respuestasIncorrectas++;
        }
    }

    alert(`El juego termino .\nEl numero de respuestas correctas fue de : ${respuestasCorrectas}\nMientras que el numero de respuestas incorrectas fue de : ${respuestasIncorrectas}`);

    if (respuestasCorrectas >= 4) {
        alert("¡La tenes reclara!Sabe un montón!");
    }else {
        alert ("Sos malisimo!")
    }

    window.location.href = "juegofin.html";

}


function salir() {
    const confirmacion = confirm("¿Está seguro de que desea salir del juego?");
    if (confirmacion) {
        alert("Hasta la proxima y gracias por jugar!");
    }
}