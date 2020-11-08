const colors = ["green", "red", "blue"];
const $button = document.querySelector(".btn");
$button.style.backgroundColor = colors[0];
$button.addEventListener("click", () => {
  currentBgColor = $button.style.backgroundColor;
  console.log(currentBgColor);
  let currentIndex = colors.indexOf(currentBgColor);
  let nextIndex = ++currentIndex % colors.length;
  $button.style.backgroundColor = colors[nextIndex];
});
