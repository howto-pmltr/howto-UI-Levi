class NavLink {
    constructor(domElement) {
      this.domElement = domElement;
      this.expandButton = document.querySelector('.caret-open');
      this.caretIcons = document.querySelectorAll('.fas');
      this.expandButton.addEventListener('click', this.expandLinks.bind(this));
      this.expandButton.addEventListener('click', this.caretFlip.bind(this));
    }
  
    expandLinks() {
      this.domElement.classList.toggle('nav-link--open');
    }

    caretFlip() {
        this.caretIcons.forEach((icon) => {
            icon.classList.toggle('caret-open');
    })};
  }
 
  
  let navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach((link) => {
    return new NavLink(link);
  });