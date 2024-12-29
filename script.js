// Criando um array de objetos com as perguntas e respostas
const perguntasRespostas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    respostas: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte", "Salvador"],
    respostaCorreta: 2
  },
  {
    pergunta: "Qual é o maior animal terrestre?",
    respostas: ["Leão", "Elefante", "Girafa", "Rinoceronte", "Hipopótamo"],
    respostaCorreta: 1
  },
  {
    pergunta: "Quem escreveu a obra 'Dom Quixote'?",
    respostas: ["William Shakespeare", "Miguel de Cervantes", "Júlio Verne", "Machado de Assis", "Clarice Lispector"],
    respostaCorreta: 1
  },
  {
    pergunta: "Qual é a montanha mais alta do mundo?",
    respostas: ["Monte Everest", "Monte Kilimanjaro", "Monte Aconcágua", "Monte Denali", "Monte Vinson"],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual é o elemento químico mais abundante na crosta terrestre?",
    respostas: ["Ferro", "Oxigênio", "Silício", "Carbono", "Cálcio"],
    respostaCorreta: 1
  }
];

// Variável global para armazenar a pergunta atual
let perguntaAtual;

// Função que retorna uma pergunta aleatória do array
function perguntasAleatorias() {
  const indice = Math.floor(Math.random() * perguntasRespostas.length);
  perguntaAtual = perguntasRespostas[indice];
  return perguntaAtual.pergunta;
}

// Função que exibe as respostas da pergunta atual
function exibirRespostas() {
  const respostasContainer = document.getElementById("respostas-container");
  respostasContainer.innerHTML = "";
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    const resposta = perguntaAtual.respostas[i];
    const respostaBtn = document.createElement("button");
    respostaBtn.textContent = resposta;
    respostaBtn.addEventListener("click", () => verificarResposta(i));
    respostasContainer.appendChild(respostaBtn);
  }
}

// Função que verifica a resposta do usuário
function verificarResposta(indiceResposta) {
  const gabaritoContainer = document.getElementById("gabarito-container");
  gabaritoContainer.innerHTML = "";
  const respostaCorreta = perguntaAtual.respostaCorreta;
  
  if (indiceResposta === respostaCorreta) {
    gabaritoContainer.textContent = "Resposta correta!";
  } else {
    gabaritoContainer.textContent = `Resposta incorreta! A resposta correta é ${perguntaAtual.respostas[respostaCorreta]}.`;
  }
}

// Evento que é acionado quando o botão "Gabarito" é clicado
document.getElementById("gabarito-btn").addEventListener("click", exibirRespostas);

// Evento que é acionado quando a página é carregada para exibir uma pergunta aleatória
window.onload = function() {
  document.getElementById("pergunta").textContent = perguntasAleatorias();
  exibirRespostas();
}