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

function validarApellido(apellido) {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (!apellido.trim()) return "El apellido es obligatorio.";
  if (!regex.test(apellido)) return "El apellido solo debe contener letras y espacios.";
  return "";
}

function validarNombre(nombre) {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (!nombre.trim()) return "El nombre es obligatorio.";
  if (!regex.test(nombre)) return "El nombre solo debe contener letras y espacios.";
  return "";
}

function validarDNI(dni) {
  const regex = /^[0-9]{8}$/;
  if (!dni.trim()) return "El DNI es obligatorio.";
  if (!regex.test(dni)) return "El DNI debe tener exactamente 8 dígitos.";
  return "";
}

function validarFechaNacimiento(fecha) {
  if (!fecha) return "La fecha de nacimiento es obligatoria.";
  const anio = new Date(fecha).getFullYear();
  if (anio <= 2006) return "Debe haber nacido después del año 2006.";
  return "";
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return "El email es obligatorio.";
  if (!regex.test(email)) return "El formato del email no es válido.";
  return "";
}

const btnPreguntas = document.getElementById('btnPreguntasProgresivas');
const divRespuestas = document.getElementById('respuestasProgresivas');
const pRespuesta1 = document.getElementById('respuesta1');
const pRespuesta2 = document.getElementById('respuesta2');
const pRespuesta3 = document.getElementById('respuesta3');

btnPreguntas.addEventListener('click', function() {
  const respuestas = [];

  let r1 = prompt("¿Cuál es tu nacionalidad?");
  respuestas.push(r1 ? r1 : "No respondida");

  let r2 = prompt("¿Cuál es tu color favorito?");
  respuestas.push(r2 ? r2 : "No respondida");

  let r3 = prompt("¿Cuál es el nombre de tu mascota?");
  respuestas.push(r3 ? r3 : "No respondida");

  pRespuesta1.textContent = "Nacionalidad: " + respuestas[0];
  pRespuesta2.textContent = "Color favorito: " + respuestas[1];
  pRespuesta3.textContent = "Nombre de mascota: " + respuestas[2];

  divRespuestas.style.display = 'block';
});
