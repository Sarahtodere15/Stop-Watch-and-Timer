// Stopwatch and Timer functionality
let stopwatchInterval;
let timerInterval;

// Stopwatch variables
let stopwatchTime = 0;
let stopwatchRunning = false;

// Timer variables
let timerTime = 0;
let timerRunning = false;

// Format time function
function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Stopwatch functions
function updateStopwatch() {
    stopwatchTime++;
    document.getElementById('stopwatch-time').innerText = formatTime(stopwatchTime);
}

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchInterval = setInterval(updateStopwatch, 1000);
    }
}

function stopStopwatch() {
    if (stopwatchRunning) {
        stopwatchRunning = false;
        clearInterval(stopwatchInterval);
    }
}

function resetStopwatch() {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatch-time').innerText = '00:00:00';
}

// Timer functions
function updateTimer() {
    if (timerTime > 0) {
        timerTime--;
        document.getElementById('timer-time').innerText = formatTime(timerTime);
    } else {
        stopTimer();
        alert('Time is up!');
    }
}

function startTimer() {
    const inputTime = parseInt(document.getElementById('timer-input').value);
    if (inputTime > 0 && !timerRunning) {
        timerRunning = true;
        timerTime = inputTime;
        document.getElementById('timer-time').innerText = formatTime(timerTime);
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    if (timerRunning) {
        timerRunning = false;
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    timerTime = 0;
    document.getElementById('timer-time').innerText = '00:00';
}

// Event listeners
document.getElementById('start-stopwatch').addEventListener('click', startStopwatch);
document.getElementById('stop-stopwatch').addEventListener('click', stopStopwatch);
document.getElementById('reset-stopwatch').addEventListener('click', resetStopwatch);

document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('stop-timer').addEventListener('click', stopTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer);