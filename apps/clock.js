function updateClock() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, 0);
    const mins = now.getMinutes().toString().padStart(2, 0);
    const secs = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${mins}:${secs}`;
    document.getElementById("clock").textContent = timeString;
}

function startClock() {
    updateClock();

    const msecs = new Date().getMilliseconds();

    const msecsToNextSec = 1000 - msecs;
    setTimeout(startClock, msecsToNextSec);
}

startClock();
