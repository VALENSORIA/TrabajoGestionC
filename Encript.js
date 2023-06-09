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
  
    // Intercambiar el primer dígito con el tercero
    var temp = digitos[0];
    digitos[0] = digitos[2];
    digitos[2] = temp;
  
    // Intercambiar el segundo dígito con el cuarto
    temp = digitos[1];
    digitos[1] = digitos[3];
    digitos[3] = temp;
  
    // Obtener el número encriptado
    var numeroEncriptado = digitos.join("");
  
    // Mostrar el número encriptado en el elemento de resultado
    document.getElementById('resultado').innerHTML = "Número encriptado: " + numeroEncriptado;
  }


 