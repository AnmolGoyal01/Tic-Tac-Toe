let boxes = document.querySelectorAll(".boxes");
let resetbtn = document.querySelector(".reset");
let ngbtn = document.querySelector(".newGame");
let winnerBox = document.querySelector(".winnerBox");
let winnerMsg = document.querySelector(".winnerMsg");

counter = 0;

let turnX = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

resetbtn.addEventListener("click", () => {
  turnX = true;
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
    counter = 0;
  }
});

ngbtn.addEventListener("click", () => {
    turnX = true;
    for (box of boxes) {
      box.innerText = "";
      box.disabled = false;
    }
    winnerBox.classList.add("hidden");
    counter = 0;
  });
  


let displayWinner = (p1)=>{
    for (box of boxes) {
        box.disabled = true;
    }
    let msg = `Congratulations ${p1} is the Winner`;

    if (p1==="Draw") {
        msg = `Game is Draw`;
    }

    winnerMsg.innerText = msg;
    winnerBox.classList.remove("hidden");

}

let checkWinner = () => {
  for (pattern of winPattern) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;

    if (!(p1 === "" || p2 === "" || p3 === "")) {
        if (p1 === p2 && p2 === p3 && p3 === p1) {
            displayWinner(p1);
            counter = 0;
        }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      box.style.color = "#2f0e07";
      turnX = false;
    } else {
      box.innerText = "O";
      box.style.color = "#004052";
      turnX = true;
    }
    box.disabled = true;
    counter++;
    checkWinner();
    if (counter>=9) {
        displayWinner("Draw");
    }
  });
});
