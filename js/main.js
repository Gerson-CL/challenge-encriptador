
//variables iniciales 
var btnEncrypt = document.getElementById('btnEncrypt');
var btnUncrypt = document.getElementById('btnUncrypt');
var initial_text = document.querySelector('.initial_text');
var end_text = document.querySelector('.end_text');
var muneco = document.querySelector('.text-uncrypt')
var div_uncrypt = document.querySelector('.div-text-uncrypt')

//botones que invocan nuestras funciones y validan que no se usen caracteres especiales
btnEncrypt.addEventListener("click", () => {
    text_agree = initial_text.value.match(/^[a-z ]*$/);
    if(text_agree){
        textEncrypt();
        initial_text.value = ''
    }else{
        alert('No utilice caracteres especiales Ni mayusculas!!!')
    }
  });

btnUncrypt.addEventListener("click", () => {
  text_agree = initial_text.value.match(/^[a-z ]*$/);
  if(text_agree){
      textUncrypt();
      initial_text.value = ''
  }else{
      alert('No utilice caracteres especiales Ni mayusculas!!!')
  }
  
});  

//funcion Encriptar
function textEncrypt(){
    let letter_e = /e/gi;
    let letter_i = /i/gi;
    let letter_a = /a/gi;
    let letter_o = /o/gi;
    let letter_u = /u/gi;
    let result = initial_text.value.replace(letter_e, "enter").replace(letter_i, "imes").replace(letter_a, "ai").replace(letter_o, "ober").replace(letter_u, "ufat");
    end_text.innerText = result;
    muneco.classList.add('show-content')
    div_uncrypt.classList.remove('show-content')
  }

//funcion Desencriptar
function textUncrypt(){
  let string_enter = /enter/gi;
  let string_imes = /imes/gi;
  let string_ai = /ai/gi;
  let string_ober = /ober/gi;
  let string_ufat = /ufat/gi;
  let result = initial_text.value.replace(string_enter, "e").replace(string_imes, "i").replace(string_ai, "a").replace(string_ober, "o").replace(string_ufat, "u");
  end_text.innerText = result;
  muneco.classList.add('show-content')
  div_uncrypt.classList.remove('show-content')
}

//funcion copiar
function copyText(){
  var copied_text = document.querySelector('.end_text');
  console.log(copied_text)
  copied_text.select();
  document.execCommand('copy');
  initial_text.focus();
  alert('Texto copiado al porta papeles!!!')
  muneco.classList.remove('show-content')
  div_uncrypt.classList.add('show-content')
}
