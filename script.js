const music = document.getElementById("birthdayMusic");
const musicToggle = document.getElementById("musicToggle");
const startButton = document.getElementById("startButton");
const wishButtons = document.querySelectorAll(".wish-star");
const wishResult = document.getElementById("wishResult");
const backToTop = document.getElementById("backToTop");

// Scroll to the message and try to start music after a user gesture.
startButton.addEventListener("click", async () => {
  document.getElementById("message").scrollIntoView({behavior: "smooth"});

  try {
    await music.play();
    musicToggle.innerHTML = "♫ <span>Music on</span>";
  } catch (error) {
    // The page still works if no music file has been added yet.
    musicToggle.innerHTML = "♫ <span>Music off</span>";
  }
});

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.innerHTML = "♫ <span>Music on</span>";
    } catch (error) {
      musicToggle.innerHTML = "♫ <span>audio/Banda Neira - Sampai Jadi Debu - Peaceful Piano [9CHAP_Sdc9A] (mp3cut.net).mp3</span>";
    }
  } else {
    music.pause();
    musicToggle.innerHTML = "♫ <span>Music off</span>";
  }
});

// Each star reveals a different birthday wish.
wishButtons.forEach((button) => {
  button.addEventListener("click", () => {
    wishButtons.forEach((star) => star.classList.remove("active"));
    button.classList.add("active");

    wishResult.innerHTML = `
      <span class="result-icon">☄</span>
      <p>${button.dataset.wish}</p>
    `;
  });
});

backToTop.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"});
});
