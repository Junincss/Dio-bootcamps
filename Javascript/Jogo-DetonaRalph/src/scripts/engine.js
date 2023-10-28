const state = {
  // Contexto de variáveis globais.
  // Variáveis de caracteristicas visuais
  view: {
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector(".enemy"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),
  },
  // Variáveis de caracteristicas matemáticas.
  values: {
    gameVolocity: 1000,
    hitPosition: 0,
    result: 0,
    currentTime: 60,
    InitalLife: 3,
  },
  actions: {
    timerId: setInterval(randomSquare, 1000),
    countDownTimerId: setInterval(countDown, 1000),
  },
};

function countDown() {
  state.values.currentTime--;
  state.view.timeLeft.textContent = state.values.currentTime;
  if (state.values.currentTime <= 0) {
    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.timerId);
    playSound("gameOver");
    alert(`Game over - Seu resultado foi ${state.values.result}`);
  }
}
function playSound(audioName) {
  let audio = new Audio(`./src/sounds/${audioName}.m4a`);
  audio.volume = 0.1;
  audio.play();
}

function randomSquare() {
  // Removendo a classe enemy de todos os elementos squares no html através do foreach com uma função lambda aplicando o método remove.
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  });
  // sorteando um numero inteiro aleatório de 0 a 9
  let randomNumber = Math.floor(Math.random() * 9);

  // pegando o quadrado referente ao número sorteado.
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add("enemy");
  state.values.hitPosition = randomSquare.id;
}

function moveEnemy() {
  state.values.timerId = setInterval(randomSquare, state.values.gameVolocity);
}

function addListenerHitbox() {
  state.view.squares.forEach((squares) => {
    squares.addEventListener("mousedown", () => {
      if (squares.id === state.values.hitPosition) {
        state.values.result++;
        state.view.score.textContent = state.values.result;
        state.values.hitPosition = null;
        playSound("hit");
      } else if (squares.id !== state.values.hitPosition) {
        state.view.score.textContent = state.values.result;
        state.values.hitPosition = null;
        playSound("wrong");
      }
    });
  });
}
function init() {
  // moveEnemy();
  addListenerHitbox();
}
init();
