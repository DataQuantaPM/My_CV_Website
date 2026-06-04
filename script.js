// ===============================
// Custom JavaScript - Website CV
// ===============================

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

console.log("Website CV Zona 74 berhasil dimuat.");
