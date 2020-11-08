const $items = [...document.querySelectorAll(".faq__item")].map((item) => ({
  item: item,
  content: item.querySelector(".item__content"),
  isActive: function () {
    return this.item.classList.contains("active");
  },
  assignActiveClass: function () {
    this.item.classList.add("active");
    this.content.style.maxHeight = this.content.scrollHeight + "px";
  },
  unassignActiveClass: function () {
    this.item.classList.remove("active");
    this.content.style.maxHeight = 0;
  },
  toggleActiveClass: function () {
    const action = this.isActive() ? this.unassignActiveClass : this.assignActiveClass;
    action.bind(this)();
    return this;
  },
}));
let $currentItem;

function changeStateItem($item) {
  $currentItem !== $item && $currentItem?.unassignActiveClass();
  $currentItem = $item.toggleActiveClass();
}

$items.forEach(($item) => $item.item.addEventListener("click", () => changeStateItem($item)));
