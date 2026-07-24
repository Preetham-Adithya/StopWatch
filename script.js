const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let elapsedTime = 0;
let timer = null;

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = ms % 1000;

  const paddedMins = String(minutes).padStart(2, "0");
  const paddedSecs = String(seconds).padStart(2, "0");
  const paddedMs = String(milliseconds).padStart(3, "0");

  return `${paddedMins}:${paddedSecs}:${paddedMs}`;
}

function startTimer() {
  if (timer !== null) return;

  startTime = Date.now() - elapsedTime;

  timer = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10); 
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopTimer() {
  clearInterval(timer);
  timer = null;

  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  display.textContent = "00:00:000";

  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
