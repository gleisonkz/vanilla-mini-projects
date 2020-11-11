// const $squaresArea1 = document.querySelectorAll(".board__square[data-area='1']");
// const $squaresArea2 = document.querySelectorAll(".board__square[data-area='2']");
// const $squaresArea3 = document.querySelectorAll(".board__square[data-area='3']");
// const areas = [$squaresArea1, $squaresArea2, $squaresArea3];
const $areas = [...document.querySelectorAll(".board__square")];
console.log(
  "areas: ",
  $areas.filter(($area) => $area.getAttribute("data-area") === "3")
);

const $inputs = document.querySelectorAll(".form__control");
$inputs.forEach(($input) =>
  $input.addEventListener("keyup", ($event) => {
    const defaultBackground = "url(images/default.jpg)";

    const currentInputValue = $event.target.value.toLowerCase();
    const areaID = $input.getAttribute("data-area");

    const terrains = [
      { name: "rock", background: "url(images/rock.jpg)" },
      { name: "desert", background: "url(images/desert.jpg)" },
      { name: "grass", background: "url(images/grass.jpg)" },
      { name: "water", background: "url(images/water.jpg)" },
      { name: "ground", background: "url(images/ground.jpg)" },
      { name: "forest", background: "url(images/forest.jpg)" },
      { name: "lava", background: "url(images/lava.jpg)" },
    ];
    const terrain = terrains.find((terrain) => terrain.name === currentInputValue);
    const $currentSquaresArea = $areas.filter(($area) => $area.getAttribute("data-area") === areaID);
    console.log($currentSquaresArea);

    $currentSquaresArea.forEach(($square) => {
      const nextBackground = terrain?.background || defaultBackground;
      nextBackground !== getElementBackgroundUrl($square) &&
        debounce(() => applyBackgroundTransitionEffect($square, nextBackground), 600)();
    });
  })
);

function applyBackgroundTransitionEffect($square, background) {
  $square.style.opacity = "0";
  setTimeout(() => {
    $square.style.background = background;
    $square.style.opacity = "1";
  }, 400);
}

function getElementBackgroundUrl($element) {
  let url = window.getComputedStyle($element, false).backgroundImage;
  url = "url(" + url.split("/").splice(5, 2).join("/").replace('.jpg"', ".jpg");
  return url;
}

function debounce(func, timeout) {
  let timer;

  return (...args) => {
    const next = () => func(...args);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(next, timeout > 0 ? timeout : 300);
  };
}
