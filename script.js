document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function showProducts(category) {
  const products = document.querySelectorAll(".product-card[data-cat]");
  const title = document.getElementById("category-title");

  title.textContent = category.toUpperCase() + " COLLECTION";

  products.forEach(product => {
    if (product.dataset.cat === category) {
      product.style.display = "block";
      product.style.animation = "fadeUp 0.6s ease";
    } else {
      product.style.display = "none";
    }
  });

  document
    .getElementById("display-area")
    .scrollIntoView({ behavior: "smooth" });
}

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");

let isPlaying = false;

if (music && musicBtn) {
  music.volume = 0.5; 

  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      music.play().then(() => {
        musicBtn.textContent = "🔈 Pause Music";
        isPlaying = true;
      }).catch(err => {
        console.log("Music play blocked:", err);
      });
    } else {
      music.pause();
      musicBtn.textContent = "🔊 Play Music";
      isPlaying = false;
    }
  });
}

const video = document.querySelector("video");

if (video && music) {
  video.addEventListener("play", () => {
    if (isPlaying) {
      music.pause();
      musicBtn.textContent = "🔊 Play Music";
      isPlaying = false;
    }
  });
}

