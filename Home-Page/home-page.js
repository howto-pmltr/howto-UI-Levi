let ctaButton = document.querySelector('.cta-button');
let mainContent = document.querySelector('.main-content');

ctaButton.addEventListener('click', mainContentExpand);

function mainContentExpand() {
    mainContent.classList.toggle('main-content--open');
    mainContent.scrollIntoView({
        behavior: "smooth"
      });
};

let container = document.querySelector('.container');

window.addEventListener('load', () => {
  container.style.opacity = 1;
});