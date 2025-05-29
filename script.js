const form = document.getElementById('registroForm');
const errorApellido = document.getElementById('errorApellido');
const errorNombre = document.getElementById('errorNombre');
const errorDni = document.getElementById('errorDni');
const errorFechaNacimiento = document.getElementById('errorFechaNacimiento');
const errorEmail = document.getElementById('errorEmail');

form.addEventListener('submit', function(event) {
event.preventDefault();

let esValido = true;

const apellidoVal = form.apellido.value;
const nombreVal = form.nombre.value;
const dniVal = form.dni.value;
const fechaNacimientoVal = form.fechaNacimiento.value;
const emailVal = form.email.value;

let mensajeError = validarApellido(apellidoVal);
errorApellido.textContent = mensajeError;
if (mensajeError) esValido = false;

mensajeError = validarNombre(nombreVal);
errorNombre.textContent = mensajeError;
if (mensajeError) esValido = false;

mensajeError = validarDNI(dniVal);
errorDni.textContent = mensajeError;
if (mensajeError) esValido = false;

mensajeError = validarFechaNacimiento(fechaNacimientoVal);
errorFechaNacimiento.textContent = mensajeError;
if (mensajeError) esValido = false;

mensajeError = validarEmail(emailVal);
errorEmail.textContent = mensajeError;
if (mensajeError) esValido = false;

if (esValido) {
alert('Formulario enviado exitosamente!');
form.reset();
} else {
alert('Por favor, corrige los errores en el formulario.');
}
});


const btnPreguntas = document.getElementById('btnPreguntasProgresivas');
const divRespuestas = document.getElementById('respuestasProgresivas');
const pRespuesta1 = document.getElementById('respuesta1');
const pRespuesta2 = document.getElementById('respuesta2');
const pRespuesta3 = document.getElementById('respuesta3');

btnPreguntas.addEventListener('click', function() {
const respuestas = [];
let respuesta;

respuesta = prompt("Pregunta 1: ¿Cuál es tu nacionalidad?");
respuestas.push(respuesta === null ? "No respondida" : respuesta);

respuesta = prompt("Pregunta 2: ¿Cuál es tu color favorito?");
respuestas.push(respuesta === null ? "No respondida" : respuesta);

respuesta = prompt("Pregunta 3: ¿Cuál es el nombre de tu mascota? (Si no tienes, escribe 'Ninguna')");
respuestas.push(respuesta === null ? "No respondida" : respuesta);


pRespuesta1.textContent = `Nacionalidad: ${respuestas[0]}`;
pRespuesta2.textContent = `Color Favorito: ${respuestas[1]}`;
pRespuesta3.textContent = `Nombre Mascota: ${respuestas[2]}`;

divRespuestas.style.display = 'block';
});

function validarApellido(apellido) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!apellido.trim()) return "El apellido es obligatorio.";
    if (!regex.test(apellido)) return "El apellido solo debe contener caracteres y espacios.";
    return "";
    }
    
function validarNombre(nombre) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombre.trim()) return "El nombre es obligatorio.";
    if (!regex.test(nombre)) return "El nombre solo debe contener caracteres y espacios.";
    return "";
}
    
function validarDNI(dni) {
    const regex = /^[0-9]+$/;
    if (!dni.trim()) return "El DNI es obligatorio.";
    if (!regex.test(dni)) return "El DNI solo debe contener números.";
    if (dni.length !== 8) return "El DNI debe tener exactamente 8 dígitos.";
    return "";
}
    
function validarFechaNacimiento(fecha) {
    if (!fecha) return "La fecha de nacimiento es obligatoria.";
    const fechaSeleccionada = new Date(fecha);
    const anioSeleccionado = fechaSeleccionada.getFullYear();
    if (anioSeleccionado <= 2006) {
    return "El año de nacimiento debe ser superior a 2006.";
    }
    return "";
}
    
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "El email es obligatorio.";
    if (!regex.test(email)) return "El formato del email no es válido.";
    return "";
}

function validarColorFavorito(ColorFavorito){
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!ColorFavorito.trim()) return "Responda la pregunta por favor";
    if (!regex.test(ColorFavorito)) return "La respuesta solo debe contener caracteres y espacios.";
    return "";
}

function validarnombreDeMascota(nombreDeMascota){
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombreDeMascota.trim()) return "El nombre es obligatorio.";
    if (!regex.test(nombreDeMascota)) return "El nombre solo debe contener caracteres y espacios.";
    return "";
}
