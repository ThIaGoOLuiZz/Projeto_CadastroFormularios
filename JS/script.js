function mascara_cpf(i){

   var v = i.value;
   
   if(isNaN(v[v.length-1])){
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "14");
   if (v.length == 3 || v.length == 7) i.value += ".";
   if (v.length == 11) i.value += "-";
}

function mascara_rg(i){

   var v = i.value;
   
   if(isNaN(v[v.length-1])){
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "9");
   if (v.length == 1 || v.length == 5) i.value += ".";
}


function mascara_telefone(input) {
input.value = input.value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .slice(0, 14);
}

function mascara_celular(input) {
input.value = input.value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);
}

function mascara_cep(input) {
input.value = input.value
      .replace(/\D/g, '')
      .replace(/^(\d{5})(\d)/, "$1-$2")
      .slice(0, 9);
}

function mascara_cartao(input) {
   let value = input.value.replace(/\D/g, "");

   value = value.replace(/^(\d{4})(\d)/, "$1 $2");
   value = value.replace(/^(\d{4})\s(\d{4})(\d)/, "$1 $2 $3");
   value = value.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/, "$1 $2 $3 $4");

   input.value = value.slice(0, 19);
}

function atualizarSlider(input) {
   const status = document.getElementById("slider-status");
   status.textContent = input.value == "1" ? "Sim" : "Não";
}