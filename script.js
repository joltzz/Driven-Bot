/* variáveis de controle */
const respostas = [
  "Olá! Eu sou o DrivenBot! Como você se chama?",
  "Legal! E o que você gosta de fazer?",
  "Interessante... E o que mais?"
];
let indiceRespostas = 0;

/* declaração de funções */

function iniciarConversa() {
  postarMensagemMaquina();
}

function enviarMensagem() {
  const ul = document.querySelector("ul");
  const mensagem = document.querySelector("input").value;
  ul.innerHTML += `
    <li class="mensagem-usuario">você: ${mensagem}</li>
  `;
  
  setTimeout(postarMensagemMaquina, 5000);
  //postarMensagemMaquina(); // queria que fosse só depois de uns segundos para dar a impressão que alguém está digitando...
}

function postarMensagemMaquina() {
  const ul = document.querySelector("ul");
  const mensagem = document.querySelector("input").value;
  if(indiceRespostas < respostas.length) {
    ul.innerHTML += `
      <li class="mensagem-maquina">máquina: ${respostas[indiceRespostas]}</li>
    `;
  } else {
    encerrarConversa();
  }
  
  indiceRespostas++;
}

function encerrarConversa() {
  const ul = document.querySelector("ul");
  ul.innerHTML += `
      <li class="mensagem-maquina">máquina: Foi legal conversar com você, adeus!</li>
    `;
  document.querySelector("footer button").disabled = true;
}

/* execução de funções */
iniciarConversa();
