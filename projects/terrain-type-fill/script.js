const $squaresArea1 = document.querySelectorAll(".board__square[data-area='1']");
const $squaresArea2 = document.querySelectorAll(".board__square[data-area='2']");
const $squaresArea3 = document.querySelectorAll(".board__square[data-area='3']");
const areas = [$squaresArea1, $squaresArea2, $squaresArea3];

const $inputs = document.querySelectorAll(".form__control");
$inputs.forEach(($input) =>
  $input.addEventListener("keyup", ($event) => {
    const defaultBackground = "var(--base-bg)";
    const currentValue = $event.target.value.toLowerCase();
    const areaID = $input.getAttribute("data-area");
    const terrains = [
      { name: "rock", background: "url(./images/rock.jpg)" },
      { name: "desert", background: "url(./images/desert.jpg)" },
      { name: "grass", background: "url(./images/grass.jpg)" },
      { name: "water", background: "url(./images/water.jpg)" },
      { name: "ground", background: "url(./images/ground.jpg)" },
      { name: "forest", background: "url(./images/forest.jpg)" },
      { name: "lava", background: "url(./images/lava.jpg)" },
    ];
    const terrain = terrains.find((terrain) => terrain.name === currentValue);
    const currentSquaresArea = areas[areaID - 1];

    currentSquaresArea.forEach(($square) => ($square.style.background = terrain?.background || defaultBackground));
  })
);
