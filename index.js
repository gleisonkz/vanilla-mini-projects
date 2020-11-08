const projects = [
  {
    name: "Social Media Dashboard",
    description: "Layout produced using css Grid Layout and FlexBox, with color theme switcher.",
    imageName: "social-media-switcher.gif",
    projectPath: "projects/social-media-dashboard-switcher/index.html",
  },
  {
    name: "FAQ Accordion Card",
    description: "State manipulation and context bind functions used to control and iterate each item of the list.",
    imageName: "faq-accordion-card.gif",
    projectPath: "projects/faq-accordion-card-main/index.html",
  },
  {
    name: "My Book List",
    description:
      "Book list build using OOP to handle form validation, local storage manipulation, async functions and images uploads.",
    imageName: "book-list.png",
    projectPath: "projects/book-list/index.html",
  },
  {
    name: "Scroll Indicator",
    description: "Built using clientHeight and scrollHeight DOM elements property to calculate and animate scroll.",
    imageName: "scroll-indicator.gif",
    projectPath: "projects/scroll-indicator/index.html",
  },
  {
    name: "Full Screen Vertical Scroll",
    description: "Built using css properties to control scroll like scroll-snap-type and scroll-snap-align.",
    imageName: "full-screen-vertical-scroll.gif",
    projectPath: "projects/full-screen-vertical-scroll/index.html",
  },
  {
    name: "Colorful Click Button",
    description:
      "Button that changes its colors on every click based on an array of colors and ever returning to the beginning regardless of its size.",
    imageName: "colorful-click-button.gif",
    projectPath: "projects/colorful-click-button/index.html",
  },
  {
    name: "Article Preview Component",
    description: "Built using css Grid Layout and Flexbox, and toggle method of javascript to activate button.",
    imageName: "article-preview.gif",
    projectPath: "projects/article-preview-component-master/index.html",
  },
];
const $projectsContent = document.querySelector(".projects__content");
const $html = document.querySelector("html");
const $toggle = document.querySelector(".toggle__input");
$toggle.addEventListener("change", () => {
  $html.classList.toggle("dark-mode");
});

projects.forEach((project) => {
  const $project = document.createElement("div");
  $project.className = "card";
  $project.innerHTML = `
    <div class="card__header">
      <img class="header__image" src="assets/images/${project.imageName}" alt="Project Image" />
    </div>
    <div class="card__body">
      <span class="body__title">${project.name}</span>
      <p class="body__text">${project.description}</p>
    </div>
    <div class="card__footer">
      <a href="${project.projectPath}" class="footer__btn-link">View Project</a>
    </div>
  `;
  $projectsContent.appendChild($project);
});
