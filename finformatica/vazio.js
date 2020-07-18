function verificaForm(){
  if(document.getElementById("cep").value == "84600-000"){
  alert("ATENDEMOS SUA LOCALIDADE com velocidade máxima! :D");
  return false; 
}
  else if(document.getElementById("cep").value == ""){
    document.getElementById("cep").style.borderColor = "red";
    document.getElementById("cep").style.backgroundColor = "#ffe5e5";
    document.getElementById("cep").focus()
    return false;
  }
  else { alert("INFELIZMENTE AINDA NÃO ATENDEMOS SUA LOCALIDADE mas estamos trabalhando para isso! :(");
  return false;
 }
}