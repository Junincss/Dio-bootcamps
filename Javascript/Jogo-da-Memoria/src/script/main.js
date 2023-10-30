const emojis = [
  "🐴",
  "🐴",
  "😶‍🌫️",
  "😶‍🌫️",
  "🤑",
  "🤑",
  "🥳",
  "🥳",
  "👽",
  "👽",
  "👻",
  "👻",
  "🤖",
  "🤖",
  "🐯",
  "🐯",
];

const state = {
  view: {
    score: document.querySelector("#score"),
  },
  value: {
    valueScoreHits: 0,
    valueScoreErros: 0,
  },
};

let cartasAbertas = [];
function mostrarPontos() {
  state.view.score.contentText = state.value.valueScoreHits;
}
mostrarPontos();
let embaralharEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let caixa = document.createElement("div");
  caixa.className = "item";
  caixa.innerHTML = embaralharEmojis[i];
  caixa.onclick = handleClick;
  document.querySelector(".game").appendChild(caixa);
}

function handleClick() {
  if (cartasAbertas.length < 2) {
    this.classList.add("boxOpen");
    cartasAbertas.push(this);
  }
  if (cartasAbertas.length == 2) {
    setTimeout(checkMatch, 500);
  }
  console.log(cartasAbertas);
}

function checkMatch() {
  if (cartasAbertas[0].innerHTML === cartasAbertas[1].innerHTML) {
    cartasAbertas[0].classList.add("boxMatch");
    cartasAbertas[1].classList.add("boxMatch");
    playSound("hit2");
    state.value.valueScoreHits++;
    state.view.score.textContent = state.value.valueScoreHits;
  } else {
    cartasAbertas[0].classList.remove("boxOpen");
    cartasAbertas[1].classList.remove("boxOpen");
    state.value.valueScoreErros++;
    state.view.score.textContent = state.value.valueScoreErros;
    playSound("wrong");
  }
  cartasAbertas = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    if (state.value.valueScoreErros >= 5) {
      alert(`Você venceu!
        acertando as : ${state.value.valueScoreHits} combinações, 
        mas pena que você errou ${state.value.valueScoreErros} combinações`);
    } else if (state.value.valueScoreErros <= 4) {
      alert(`Você venceu!
        Voce acertou as ${state.value.valueScoreHits} combinações 
        e errou apenas ${state.value.valueScoreErros} delas `);
    }
    setTimeout(playSound("winSound"), 5000);
  }
}

function playSound(audioName) {
  let audio = new Audio(`./src/sounds/${audioName}.m4a`);
  audio.volume = 0.1;
  audio.play();
}
