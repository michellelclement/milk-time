const playLeft = document.querySelector(".play-left");
const playRight = document.querySelector(".play-right");

playLeft.addEventListener("click", startLeft);
playRight.addEventListener("click", startRight);

function startLeft() {
    playLeft.classList.add("active");
}

function startRight() {
    playRight.classList.add("active");
}