let userScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll(".choice");

const userscorepara = document.querySelector("#user-score");

const compscorepara = document.querySelector("#comp-score");

const msg = document.querySelector("#msg");

const genCompChoice = () => {
  let options = ["Rock", "Paper", "Scissor"];
  Math.floor(Math.random() * 3);
  return options[Math.floor(Math.random() * 3)];
};

const drawGame = () => {
  msg.innerText = "Game Draw...Play Again!";
  msg.style.backgroundColor = "rgb(126, 67, 181)";
};

const ShowWinner = (UserWin, userchoice, compchoice) => {
  if (UserWin) {
    userScore++;
    userscorepara.innerText = userScore;
    msg.innerText = `You Win! Your ${userchoice} beats Computer ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    compscorepara.innerText = computerScore;
    msg.innerText = `You Lose! Computer ${compchoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "rgb(231, 10, 10)";
  }
};
const playGame = (userchoice) => {
  const compchoice = genCompChoice();

  if (userchoice === compchoice) {
    drawGame();
  } else {
    let UserWin = true;
    if (userchoice === "Rock") {
      UserWin = compchoice === "Paper" ? false : true;
    } else if (userchoice === "Paper") {
      UserWin = compchoice === "Scissor" ? false : true;
    } else {
      UserWin = compchoice === "Rock" ? false : true;
    }
    ShowWinner(UserWin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
