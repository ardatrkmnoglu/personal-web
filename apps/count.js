const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    increaseBtn.click();
  }
})

addEventListener("keydown", function(event) {
  if (event.key === "ArrowDown") {
    event.preventDefault();
    decreaseBtn.click();
  }
})


decreaseBtn.onclick = function() {
  count--;
  countLabel.textContent = count;
}

increaseBtn.onclick = function() {
  count++;
  countLabel.textContent = count;
}

resetBtn.onclick = function() {
  count = 0;
  countLabel.textContent = count;
}
