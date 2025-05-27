function popBalloon() {
  if (clicks >= maxClicks) return;

  // Adiciona a animação de explode
  balloon.classList.add("explode");

  // Espera a animação terminar antes de atualizar a pontuação e mover
  setTimeout(() => {
    balloon.classList.remove("explode");

    score++;
    clicks++;
    scoreText.textContent = `Pontos: ${score} / ${maxClicks}`;

    if (clicks === maxClicks) {
      balloon.style.display = "none";

      const endMsg = document.createElement("p");
      endMsg.textContent = `Fim de jogo! Preparado para sua surpresa? 🎁`;
      endMsg.style.fontSize = "22px";
      endMsg.style.marginTop = "20px";
      endMsg.style.color = "#004d40";
      document.getElementById("game").appendChild(endMsg);

      setTimeout(() => {
        window.location.href = "surpresa.html";
      }, 3000);
    } else {
      moveBalloon();
    }
  }, 400); // duração da animação explode
}
