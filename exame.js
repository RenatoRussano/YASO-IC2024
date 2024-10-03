// Timer function
let timeLeft = 300; // 5 minutes in seconds
const timerElement = document.getElementById('timer');

function startTimer() {
    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Tempo esgotado! A página será encerrada.");
            window.location.href = "index.html"; // Redirecionar ou fechar a página
        } else {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.innerHTML = `<strong>${minutes}m ${seconds < 10 ? '0' + seconds : seconds}s</strong>`;
            timeLeft--;
        }
    }, 1000);
}

startTimer();

// Expand image function
function expandImage(imgElement) {
    const overlay = document.createElement('div');
    overlay.classList.add('image-overlay');
    document.body.appendChild(overlay);

    const expandedImg = imgElement.cloneNode();
    expandedImg.classList.add('expanded');
    document.body.appendChild(expandedImg);

    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.removeChild(expandedImg);
    });
}
