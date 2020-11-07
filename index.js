const projects = [
  {
    name: "Social Media Dashboard",
    description: "Layout produced using css Grid Layout and FlexBox, with color theme switcher.",
    imageName: "social-media-switcher.jpg",
    projectPath: "social-media-dashboard-switcher/index.html",
  },
  {
    name: "FAQ Accordion Card",
    description: "State manipulation and context bind functions used to control and iterate each item of the list.",
    imageName: "faq-accordion-card.png",
    projectPath: "faq-accordion-card-main/index.html",
  },
  {
    name: "My Book List",
    description:
      "Book list build using OOP to handle form validation, local storage manipulation, async functions and images uploads.",
    imageName: "book-list.png",
    projectPath: "book-list/index.html",
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
