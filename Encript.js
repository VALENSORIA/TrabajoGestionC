function guardarNumero(event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    // Obtener el valor del número ingresado
    var numero = document.getElementById('numero').value;
  
    // Mostrar el número en el elemento de resultado
    document.getElementById('resultado').innerHTML = "El número ingresado es: " + numero;
  }
  