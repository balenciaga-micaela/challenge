/*function encriptar() {
  const inputText = document.getElementById('inputText').value;
  let encriptedText = inputText
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  document.getElementById('outputText').value = encriptedText;
}

function desencriptar() {
  const inputText = document.getElementById('inputText').value;
  let decriptedText = inputText
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  document.getElementById('outputText').value = decriptedText;
}
*/

function resizeTextarea(ev) {
  this.style.height = '32px';
  this.style.height = this.scrollHeight + 0 + 'px';
}

var textoUsuario = document.getElementById("tU");
textoUsuario.addEventListener('input', resizeTextarea);






function validarTexto(texto) {
  const regex = /^[a-z\s]*$/;
  return regex.test(texto);
}

function encriptar (){
const encriptar = document.getElementById("tU").value
if (!validarTexto(encriptar)) {
  alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
  return;
}

let textoEncriptado = encriptar
.replace(/e/g, 'enter')
.replace(/i/g, 'imes')
.replace(/a/g, 'ai')
.replace(/o/g, 'ober')
.replace(/u/g, 'ufat');
document.getElementById("tE").value = textoEncriptado

if (textoEncriptado != 0)
  document.getElementById("textos").style.display = "none"
  document.getElementById("tE").style.backgroundImage = "none"
  
}

function desencriptar(){
  const encriptar = document.getElementById("tU").value
  if (!validarTexto(encriptar)) {
    alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
    return;
  }
  let textoDesncriptado = encriptar
  .replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');
  document.getElementById("tE").value = textoDesncriptado

  if (textoDesncriptado != 0)
  document.getElementById("textos").style.display = "none"
  document.getElementById("tE").style.backgroundImage = "none"
}

function copiarTexto(){
  let textoCopiado = document.getElementById("tE")
  navigator.clipboard.writeText(textoCopiado.value);
  alert ("Se ha copiado el texto: " + textoCopiado.value)
}
