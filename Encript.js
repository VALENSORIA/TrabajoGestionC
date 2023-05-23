function encriptarNumero(event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    // Obtener el valor del número ingresado
    var numero = document.getElementById('numero').value;
  
    // Verificar si el número tiene 4 dígitos
    if (numero.length !== 4) {
      alert("Por favor, ingrese un número de 4 dígitos.");
      return;
    }
  
    // Convertir el número en un arreglo de dígitos
    var digitos = numero.split("");
  
    // Aplicar la encriptación a cada dígito
    for (var i = 0; i < digitos.length; i++) {
      var digito = parseInt(digitos[i]);
  
      // Reemplazar cada dígito con el residuo de la división entre 10 de la suma de dicho dígito más 7
      digito = digito + 7;
      digito = digito % 10;
  
      // Actualizar el dígito en la matriz de dígitos
      digitos[i] = digito.toString();
    }
  
    
  }
  