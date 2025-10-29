function entradausuario(input){
    input.value = input.value.replace(/[^a-zA-Z0-9]/g, '');
    document.getElementById('resultado').textContent.min = "Você digitou: " + input.value;
   
}
