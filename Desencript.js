
function desencriptarNumero(event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    // Obtener el valor del número encriptado ingresado
    var numeroEncriptado = document.getElementById('numeroEncriptado').value;
  
    // Verificar si el número tiene 4 dígitos
    if (numeroEncriptado.length !== 4) {
      alert("Por favor, ingrese un número encriptado de 4 dígitos.");
      return;
    }
  
    // Convertir el número encriptado en un arreglo de dígitos
    var digitos = numeroEncriptado.split("");
  
    // Intercambiar el primer dígito con el tercero (deshacer el intercambio de la encriptación)
    var temp = digitos[0];
    digitos[0] = digitos[2];
    digitos[2] = temp;
  
    // Intercambiar el segundo dígito con el cuarto (deshacer el intercambio de la encriptación)
    temp = digitos[1];
    digitos[1] = digitos[3];
    digitos[3] = temp;
  
    // Deshacer la encriptación aplicada a cada dígito
    for (var i = 0; i < digitos.length; i++) {
      var digito = parseInt(digitos[i]);
  
      // Deshacer el reemplazo del dígito con el residuo de la división entre 10 de la suma de dicho dígito más 7
      digito = digito - 7;
      if (digito < 0) {
        digito = digito + 10; // Asegurar que el resultado sea un dígito válido (positivo)
      }
  
      // Actualizar el dígito en la matriz de dígitos
      digitos[i] = digito.toString();
    }
  
    
  }