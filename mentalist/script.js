var numeroSecreto = parseInt(Math.random() *10);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "você acertou"
  } else if (chute > 10 || chute < 0){
    elementoResultado.innerHTML = "você deve digitar um número entre 0 e 10"
  } else {
    elementoResultado.innerHTML = "você errou, o número secreto é " + numeroSecreto
  }
}