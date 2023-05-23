function encriptarNumero(event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    // Obtener el valor del número ingresado
    var numero = document.getElementById('numero').value;
  
    // Verificar si el número tiene 4 dígitos
    if (numero.length !== 4) {
      alert("Por favor, ingrese un número de 4 dígitos.");
      return;
    }
  
    
  }
  