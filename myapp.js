const p1btn = document.querySelector("#p1btn")
const p2btn = document.querySelector("#p2btn")
const resetbtn = document.querySelector("#resetbtn")
const p1display = document.querySelector("#p1display")
const p2dsiplay = document.querySelector("#p2display")
const playTo = document.querySelector("#playTo")

let p1score = 0;
let p2score = 0;
let winningScore = 3;
let isGameOver = false;

p1btn.addEventListener("click", (evt) => {
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            isGameOver = true
            p1display.classList.add("winner");
            p2display.classList.add("loser");
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p1display.innerText = p1score
    }
})

p2btn.addEventListener("click", (evt) => {
    if (!isGameOver) {
        p2score += 1;
        if (p2score === winningScore) {
            isGameOver = true
            p2display.classList.add("winner");
            p1display.classList.add("loser");
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p2display.innerText = p2score
    }
})


playTo.addEventListener("change", playingTo)
function playingTo() {
    winningScore = parseInt(this.value);
    return reset();
}


resetbtn.addEventListener("click", reset)
function reset() {
    p1display.innerText = 0;
    p2dsiplay.innerText = 0;
    p1score = 0;
    p2score = 0;
    isGameOver = false;
    p1display.classList.remove("winner", "loser");
    p2display.classList.remove("winner", "loser");
    p1btn.disabled = false;
    p2btn.disabled = false;
}