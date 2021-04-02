var numero = parseInt(Math.random() * (11 - 1) + 1);
var dicasMaiorMenor = "";
var dicasParImpar = "";
var textoTentativas = "";
var tentativas = 3;
if(numero%2==0){
  dicasParImpar = "O número é par.";
} else {
  dicasParImpar = "O número é ímpar.";
}
document.getElementById("dicas").innerHTML = dicasParImpar;

function chutar(){
  tentativas-=1;
  var chute = parseInt(document.getElementById("chute").value);
  if(chute==numero){ 
    dicasMaiorMenor = "";
    dicasParImpar = "";
    textoTentativas = "Você acertou!"
  } else {
    if(tentativas<=0){
      dicasMaiorMenor = "";
      dicasParImpar = "";
      textoTentativas = "Suas tentativas acabaram. O número certo era "+numero;
    } else {
      if (numero>chute){
        dicasMaiorMenor = "<br> O número é maior!";
      } else {
        dicasMaiorMenor = "<br> O número é menor!";
      }
      textoTentativas = "<br> Número de tentativas restantes: "+tentativas;
    }
  }
  
  document.getElementById("dicas").innerHTML = dicasParImpar+dicasMaiorMenor+textoTentativas;
}