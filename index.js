const $html = document.querySelector("html");
const $toggle = document.querySelector(".toggle__input");
$toggle.addEventListener("change", () => {
  $html.classList.toggle("dark-mode");
});
