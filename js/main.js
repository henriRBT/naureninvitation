// <!-- Toogle Navbar -->
const stickytop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickytop.style.overflow = "visible";
});

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickytop.style.overflow = "hidden";
});

// Mengembalikan ke halaman web utama
window.addEventListener("load", function () {
    const form = document.getElementById("my-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: "POST",
        body: data,
      }).then(() => {
        alert("Konfirmasi berhasil terkirim!");
      });
    });
});

// Script untuk lihat undangan & Musik 
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const song = document.querySelector("#musik");
let isPlaying = false;

function disableScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
  rootElement.style.scrollBehavior = "auto";
}
function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  playAudio();
}
function playAudio() {
  song.volume = 0.9;
  audioIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
}
audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }
  isPlaying = !isPlaying;
};
disableScroll();
