document.addEventListener("DOMContentLoaded", () => {
  const playerCards = document.querySelectorAll(".player-card");

  playerCards.forEach(card => {
    card.addEventListener("click", () => {
      const playerId = card.getAttribute("data-player");
      if (playerId) {
        // Redirect to player-specific HTML page (e.g., kohli.html)
        window.location.href = `${playerId}.html`;
      }
    });
  });
});