document.addEventListener('DOMContentLoaded', () => {
    const localScoreElement = document.getElementById('local-score');
    const sessionScoreElement = document.getElementById('session-score');
    const incrementButton = document.getElementById('increment-btn');

    // Load scores from local storage and session storage
    let localScore = parseInt(localStorage.getItem('localScore')) || 0;
    let sessionScore = parseInt(sessionStorage.getItem('sessionScore')) || 0;

    // Display initial scores
    localScoreElement.textContent = localScore;
    sessionScoreElement.textContent = sessionScore;

    incrementButton.addEventListener('click', () => {
        // Increment both scores
        localScore++;
        sessionScore++;

        // Update the display
        localScoreElement.textContent = localScore;
        sessionScoreElement.textContent = sessionScore;

        // Save the scores to storage
        localStorage.setItem('localScore', localScore);
        sessionStorage.setItem('sessionScore', sessionScore);
    });
});
