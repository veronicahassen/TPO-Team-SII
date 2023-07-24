

// obtiene una referencia al formulario
const form = document.querySelector('form');

// obtiene referencias a los campos del formulario
const email = document.getElementById("inputEmail4");
const emailError = document.getElementById("emailError");
const nameField = document.getElementById("inputName4");
const nameError = document.getElementById("nameError");
const domicilio = document.getElementById("inputAddress");
const domicilioError = document.getElementById("addressError")
const ciudad = document.getElementById("inputCiudad");
const ciudadError = document.getElementById("inputCiudadError");
const provincia = document.getElementById("inputState");
const codigoPostal = document.getElementById("inputCodigoPostal");
const codigoPostalError = document.getElementById("postalCodeError");
const consulta = document.getElementById("inputConsulta");
const consultaError = document.getElementById("consultaError");

form.addEventListener('submit', (event) => {
  // previene el comportamiento por defecto del evento submit
  event.preventDefault();

  // valida el campo email
  if (!email.value) {
    emailError.textContent = '*El campo Email es obligatorio.';
  }else{
    emailError.textContent = "";
  }
    
    // valida el campo nombre y apellido
    if (!nameField.value) {
      nameError.textContent = '*El campo Nombre y Apellido es obligatorio.';
    return;
  } else {
    nameError.textContent = '';
  }

  //valida el campo domicilio
  if (!domicilio.value) {
    domicilioError.textContent = '*El campo domicilio es obligatorio.';
    return;
  } else {
    domicilioError.textContent = '';
  }

  //valida el campo ciudad
  if (!ciudad.value) {
    ciudadError.textContent = '*El campo ciudad es obligatorio.';
    return;
  } else {
    ciudadError.textContent = '';
  }

  // valida el campo código postal
  if (!codigoPostal.value) {
    codigoPostalError.textContent = '*El campo Código Postal es obligatorio.';
    return;
  } else {
    codigoPostalError.textContent = '';
  }

  // valida el campo consulta
  if (!consulta.value) {
    consultaError.textContent = '*El campo Consulta es obligatorio.';
    return;
  } else {
    consultaError.textContent = '';
  }
 
  // Mostrar los datos ingresados por el usuario en la consola
  console.log(`
  Email: ${email.value}
  Nombre y Apellido: ${nameField.value}
  Domicilio: ${domicilio.value}
  Ciudad: ${ciudad.value}
  Provincia: ${provincia.value}
  Codigo Postal: ${codigoPostal.value}
  Consulta: ${consulta.value}`);

  form.reset()
});

  