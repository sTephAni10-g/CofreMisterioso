const cofre1 = document.getElementById("cofre1");
const cofre2 = document.getElementById("cofre2");
const cofre3 = document.getElementById("cofre3");
const jogarNovamente = document.getElementById("jogarNovamente");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");
const vitorias = document.getElementById("vitorias");

let ESCOLHIDO = 0; // caixa-prêmio sorteada
let TTentativas = 0; // num tentativas
let VVitorias = 0; // num vitórias

function sortearCofre() {
  ESCOLHIDO = Math.floor(Math.random() * 3) + 1;
}

function alternarBotoesCofre(desabilitar) {
  cofre1.disabled = desabilitar;
  cofre2.disabled = desabilitar;
  cofre3.disabled = desabilitar;
}

function abrirCofre(numeroCofre) {
  TTentativas++;
  tentativas.textContent = TTentativas;

  if (numeroCofre === ESCOLHIDO) {  // com TRÊS iguais
    VVitorias++;
    vitorias.textContent = VVitorias;
    mensagem.textContent = "Cofre " + numeroCofre + " aberto! Você encontrou o prêmio!";
  } else {
    mensagem.textContent = "Cofre " + numeroCofre + " vazio! Tente novamente!";
  }
  alternarBotoesCofre(true);
}

function reiniciarJogo() {
  sortearCofre();
  mensagem.textContent = "Escolha um cofre para tentar a sorte!";
  alternarBotoesCofre(false);
}

cofre1.addEventListener("click", function () { abrirCofre(1); });
cofre2.addEventListener("click", function () { abrirCofre(2); });
cofre3.addEventListener("click", function () { abrirCofre(3); });
jogarNovamente.addEventListener("click", reiniciarJogo);
sortearCofre();