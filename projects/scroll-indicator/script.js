const setProgressBarValue = (value) => {
  document.documentElement.style.setProperty("--progressValue", value);
};

const windowHeight = document.documentElement.clientHeight;
const containerScrollHeight = document.documentElement.scrollHeight;

function updateScrollBarProgress() {
  const currentScrollTopPosition = document.documentElement.scrollTop;
  const totalHeightContainer = containerScrollHeight - windowHeight;
  const scrollBarProgress = (currentScrollTopPosition / totalHeightContainer) * 100;
  setProgressBarValue(`${scrollBarProgress}%`);
}
window.addEventListener("scroll", updateScrollBarProgress);
