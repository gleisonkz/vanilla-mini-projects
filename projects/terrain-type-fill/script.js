const $areas = [...document.querySelectorAll(".board__square")];
const $inputs = document.querySelectorAll(".form__control");
const $optionsContainer = document.querySelector(".container-options");
const defaultBackground = "url(images/default.jpg)";
const terrains = [
  { name: "rock", background: "url(images/rock.jpg)" },
  { name: "desert", background: "url(images/desert.jpg)" },
  { name: "grass", background: "url(images/grass.jpg)" },
  { name: "water", background: "url(images/water.jpg)" },
  { name: "ground", background: "url(images/ground.jpg)" },
  { name: "forest", background: "url(images/forest.jpg)" },
  { name: "lava", background: "url(images/lava.jpg)" },
];

addOptionsInHTML(terrains, $optionsContainer);

$inputs.forEach(($input) =>
  $input.addEventListener(
    "keyup",
    debounce(() => changeBackground($input))
  )
);

function changeBackground($input) {
  const currentInputValue = $input.value.toLowerCase();
  const areaID = $input.getAttribute("data-area");

  const terrain = terrains.find((terrain) => terrain.name === currentInputValue);
  const nextBackground = terrain?.background || defaultBackground;

  const $currentSquaresArea = $areas.filter(($area) => $area.getAttribute("data-area") === areaID);

  $currentSquaresArea.forEach(($square) => {
    nextBackground !== getElementBackgroundUrl($square) && applyBackgroundTransitionEffect($square, nextBackground);
  });
}

function applyBackgroundTransitionEffect($square, background) {
  $square.style.opacity = "0";
  setTimeout(() => {
    $square.style.background = `${background} 0 0 / cover`;
    $square.style.opacity = "1";
  }, 400);
}

function getElementBackgroundUrl($element) {
  let url = window.getComputedStyle($element, false).backgroundImage;
  url = "url(" + url.split("/").splice(5, 2).join("/").replace('.jpg"', ".jpg");
  console.log(url);
  return url;
}

function debounce(callback, timeout = 300) {
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => callback(...args), timeout);
  };
}

function addOptionsInHTML(options, $optionsContainer) {
  options.forEach((option) => {
    const $option = createElementWithClass(
      "div",
      `option option--${option.name}`,
      `<div class="option__image"></div>
       <span class="option__text">${option.name}</span>`
    );
    $optionsContainer.appendChild($option);
  });
}

function createElementWithClass(selector, className, innerHTML) {
  const $element = document.createElement(selector);
  $element.className = className;
  $element.innerHTML = innerHTML;
  return $element;
}
