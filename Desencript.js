
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
  
    
  }