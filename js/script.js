const gameBoard = document.querySelector(".game-board");
const gameOver = gameBoard.querySelector(".game-over");
const sonic = gameBoard.querySelector(".sonic");
const pine = gameBoard.querySelector(".pine");
const scorePoints = gameBoard.querySelector(".score-points");

const jump = () => {
  sonic.classList.add("jump");
  sonic.src = "./images/sonic-2.gif";

  setTimeout(() => {
    sonic.classList.remove("jump");
    sonic.src = "./images/sonic-1.gif";
  }, 500);
};

const loop = setInterval(() => {
  const pinePosition = pine.offsetLeft;
  const sonicPosition = +getComputedStyle(sonic).bottom.replace("px", "");
  scorePoints.textContent = +scorePoints.textContent + 1;
  if (pinePosition <= 120 && pinePosition > 0 && sonicPosition < 80) {
    pine.style.animation = "none";
    pine.style.left = `${pinePosition}px`;
    sonic.style.animation = "none";
    // sonic.style.bottom = `${sonicPosition}px`;
    sonic.src = "./images/sonic-1.gif";
    pine.style.visibility = "hidden";
    gameOver.style.visibility = "visible";
    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
