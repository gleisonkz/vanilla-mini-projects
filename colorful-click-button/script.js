const colors = ["green", "red", "blue"];
const $button = document.querySelector(".btn");
$button.addEventListener("click", () => {
  currentBgColor = $button.style.backgroundColor;
  let currentIndex = colors.indexOf(currentBgColor);
  let nextIndex = ++currentIndex % colors.length;
  $button.style.backgroundColor = colors[nextIndex];
});
